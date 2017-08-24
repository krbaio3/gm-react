'use strict'

const mongoose = require('mongoose');
const User = require('../models/user.model');
const service = require('../service/index');

function signUp(request, response) {
    const user = new User({
        email: request.body.email,
        displayName: request.body.displayName,
        password: request.body.password,
    });

    user.save((err) => {
        if(err) return response.status(500).send({message:`Error al crear el usuario: ${err}`});      
        return response.status(200).send({token: service.createToken(user)});
    });
    
}

function signIn(request, response) {
    User.find({email: request.body.email}, (error, user) => {
        if(error) return response.status(500).send({message: `Error: ${error}`});
        if(!user) return response.status(404).send({ message: `Usuario ${user} no existe`});
        request.user = user;
        response.status(200).send({
            message: `Login correctamente`,
            token: service.createToken(user),
        });
    })
}

module.exports = {
    signIn,
    signUp,
}