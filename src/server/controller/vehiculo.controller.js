'use strict'

const Vehiculo = require('../models/vehiculo.model');

function getVehiculo(req, res) {

    // pasarle un objeto vacio es que nos busque todos
    Vehiculo.find({}, (err,vehiculo)=>{
        console.log(vehiculo.length);
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if(vehiculo.length > 0) return res.status(200).send({vehiculo});
        else return res.status(204).send({message:`No existen resultados`});
    });
}

function getVehiculos(req, res) {
    console.log(req.params);
    
    let vehiculoId = req.params.vehiculoId;

    Vehiculo.findById(vehiculoId, (err, vehiculos) => {
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if(vehiculos.length > 0) return  res.status(200).send({vehiculos});
        else return res.status(204).send({message:`No existen resultados`});
    });
}

function saveVehiculo(req, res) {
    console.log('POST /api/vehiculo') 
    console.log(req.body);

    let vehiculo = new Vehiculo();

    vehiculo.tipo= req.body.tipo;
    vehiculo.matricula = req.body.matricula;
    vehiculo.marca = req.body.marca;
    vehiculo.modelo = req.body.modelo;
    vehiculo.version = req.body.version;
    vehiculo.combustible = req.body.combustible;
    vehiculo.codMotor = req.body.codMotor;
    vehiculo.potencia = req.body.potencia;
    vehiculo.tipoPintura = req.body.tipoPintura;
    vehiculo.codColor = req.body.codColor;
    vehiculo.fechaFab = req.body.fechaFab;
    vehiculo.fechaMatr = req.body.fechaMatr;

    vehiculo.save((err, vehiculoSave) => {
        if (err) 
            res.status(500, { message: `error al insertar en BD: ${err}` });
        res.status(200).send({vehiculo: vehiculoSave});
    });
}

function updateVehiculo(req, res) {
    let vehiculoId = req.params.vehiculoId;
    let update = req.body;

    Vehiculo.findByIdAndUpdate(vehiculoId, update, (err, vehicleFieldsUpdated) =>{
        if(err) return res.status(500).send({message:`Error al actualizar: ${err}`});
        if(!vehicle) return res.status(404).send({message:`El vehiculo no existe`});
        
        res.status(200).send({message: `El vehiculo con id:${vehiculoId} ha sido actualizado`});
    })
}

function deleteVehiculo(req, res) {
    let vehiculoId = req.params.vehiculoId;
    
    Vehiculo.findById(vehiculoId, (err, vehicle) =>{
        if(err) return res.status(500).send({message:`Error al borrar: ${err}`});
        if(!vehicle) return res.status(404).send({message:`El vehiculo no existe`});

        vehicle.remove(err =>{
            if(err) return res.status(500).send({message:`Error al ejecutar la peticion borrar: ${err}`});
            res.status(200).send({message: `El vehiculo con id:${vehiculoId} ha sido eliminado`});
        })
    })
}

module.exports = {
    getVehiculo,
    getVehiculos,
    saveVehiculo,
    updateVehiculo,
    deleteVehiculo,
}