'use strict'

const Taller = require('../models/taller.model');

function getTalleres(req, res) {
    console.log('GET /api/taller');

    // pasarle un objeto vacio es que nos busque todos
    Taller.find({}, (err,taller)=>{
        console.log(taller.length);
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if(taller) return res.status(200).send({taller});
        else return res.status(204).send({message:`No existen resultados`});
    });
}

function getTaller(req, res) {
    console.log('GET /api/taller/:id');
    console.log(req.params);
    
    let tallerId = req.params.tallerId;

    Taller.findById(tallerId, (err, tallers) => {
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if(tallers) return  res.status(200).send({tallers});
        else return res.status(204).send({message:`No existen resultados`});
    });
}

function saveTaller(req, res) {
    console.log('POST /api/taller');
    console.log(req.body);

    let taller = new Taller();

    taller.nombre= req.body.nombre;
    taller.CIF = req.body.CIF;
    taller.direccion = req.body.direccion;
    taller.provincia = req.body.provincia;
    taller.localidad = req.body.localidad;
    taller.localidad = req.body.localidad;
    taller.telefono = req.body.telefono;

    taller.save((err, tallerSave) => {
        if (err) 
            res.status(500, { message: `error al insertar en BD: ${err}` });
        res.status(200).send({taller: tallerSave});
    });
}

function updateTaller(req, res) {
    console.log('PUT /api/taller/:id');
    let tallerId = req.params.tallerId;
    let update = req.body;

    Taller.findByIdAndUpdate(tallerId, update, (err, tallerFieldsUpdated) =>{
        if(err) return res.status(500).send({message:`Error al actualizar: ${err}`});
        if(!tallerFieldsUpdated) return res.status(404).send({message:`El Taller no existe`});
        res.status(200).send({message: `El taller con id:${tallerId} ha sido actualizado`, taller: tallerId});
    })
}

function deleteTaller(req, res) {
    console.log('DELETE /api/taller/:id');
    let tallerId = req.params.tallerId;
    
    Taller.findById(tallerId, (err, taller) =>{
        if(err) return res.status(500).send({message:`Error al borrar: ${err}`});
        if(!taller) return res.status(404).send({message:`El taller no existe`});

        taller.remove(err =>{
            if(err) return res.status(500).send({message:`Error al ejecutar la peticion borrar: ${err}`});
            res.status(200).send({message: `El taller con id:${tallerId} ha sido eliminado`});
        })
    })
}

module.exports = {
    getTaller,
    getTalleres,
    saveTaller,
    updateTaller,
    deleteTaller,
}