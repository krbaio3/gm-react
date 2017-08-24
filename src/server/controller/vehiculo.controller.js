'use strict'

const Vehiculo = require('../models/vehiculo.model');
const Cliente = require('../models/cliente.model');

function getVehiculos(req, res) {
    console.log('GET /api/vehiculo/');
    // pasarle un objeto vacio es que nos busque todos
    Vehiculo.find({}, (err,vehiculo)=>{
        Cliente.populate(vehiculo, {path:'cliente'}, (err, vehiculo)=> {
            console.log(vehiculo.length);
            if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
            if(vehiculo.length > 0) return res.status(200).send({vehiculo});
            else return res.status(204).send({message:`No existen resultados`});
        });
    });
}

function getVehiculo(req, res) {
    console.log('GET /api/vehiculo/id');
    console.log(req.params);
    
    let vehiculoId = req.params.vehiculoId;
    if (vehiculoId.length === 24) {
        Vehiculo.findById(vehiculoId, (err, vehiculos) => {
            Cliente.populate(vehiculos, { path: 'cliente' }, (err, vehiculos) => {
                console.log(vehiculos);
                if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
                if (vehiculos !== null) return res.status(200).send({ vehiculos });
                else return res.status(204).send({ message: `No existen resultados` });
            });
        });
    } else {
        //en este caso, clienteId equivale al numDoc
        Vehiculo.find({ matricula: req.params.vehiculoId }, (err, cliente) => {
            console.log(vehiculoId.length);
            if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
            if (cliente) return res.status(200).send({ cliente });
            else return res.status(204).send({ message: `No existen resultados` });
        });
    }
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
    console.log('PUT /api/vehiculo/id');
    let vehiculoId = req.params.vehiculoId;
    let update = req.body;

    console.log(vehiculoId);
    console.log(update)

    Vehiculo.findByIdAndUpdate(vehiculoId, update, (err, vehicleFieldsUpdated) =>{
        console.log(vehicleFieldsUpdated);
        if(err) return res.status(500).send({message:`Error al actualizar: ${err}`});
        if(!vehicleFieldsUpdated) return res.status(404).send({message:`El vehiculo no existe`});
        
        res.status(200).send({message: `El vehiculo con id:${vehiculoId} ha sido actualizado`, vehiculo:vehiculoId});
    })
}

function deleteVehiculo(req, res) {
    console.log('DELETE /api/vehiculo/id');
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