'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongose = require('mongoose');

const Vehiculo = require('./models/vehiculos');

const app = express();
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(methodOverride());

// app.get('/hola/:name', (req, res) => {
//     res.send({message: `Hola ${req.params.name}`});
// });

app.get('/api/vehiculo', (req, res) => {
    // pasarle un objeto vacio es que nos busque todos
    Vehiculo.find({}, (err,vehiculos)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if(!vehiculos) return res.status(404).send({message:`No existen resultados`});
        res.status(200).send({vehiculos});
    });
});
// 599713535eb99226f46c18e0
app.get('/api/vehiculo/:vehiculoId', (req, res) => {
    console.log(req.params  );

    let vehiculoId = req.params.vehiculoId;

    Vehiculo.findById(vehiculoId, (err, vehicle) => {
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if(!vehicle) return res.status(404).send({message:`El vehiculo no existe`});
        res.status(200).send({vehicle});
    });
});

app.post('/api/vehiculo', (req, res) => {

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
});

app.delete('/api/vehiculo/:vehiculoId', (req, res) => {
    
    let vehiculoId = req.params.vehiculoId;
    
    Vehiculo.findById(vehiculoId, (err, vehicle) =>{
        if(err) return res.status(500).send({message:`Error al borrar: ${err}`});
        if(!vehicle) return res.status(404).send({message:`El vehiculo no existe`});

        vehicle.remove(err =>{
            if(err) return res.status(500).send({message:`Error al ejecutar la peticion borrar: ${err}`});
            res.status(200).send({message: `El vehiculo con id:${vehiculoId} ha sido eliminado`});
        })
    })
});

app.put('/api/vehiculo/:vehiculoId', (req, res) => {
    let vehiculoId = req.params.vehiculoId;
    let update = req.body;

    Vehiculo.findByIdAndUpdate(vehiculoId, update, (err, vehicleFieldsUpdated) =>{
        if(err) return res.status(500).send({message:`Error al actualizar: ${err}`});
        if(!vehicle) return res.status(404).send({message:`El vehiculo no existe`});
        
        res.status(200).send({message: `El vehiculo con id:${vehiculoId} ha sido actualizado`});
    })
});

app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}`);
});

mongose.connect('mongodb://localhost:27017/cliente', { useMongoClient: true, }, (err, res) => {
    if (err) {
        console.error(`ERROR: connecting to DataBase: ${err}`);
        throw err;
    }
    console.log(`conexion establecida con mongoDB`);
});
