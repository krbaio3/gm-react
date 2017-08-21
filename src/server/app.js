'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongose = require('mongoose');

const vehiculoCtrl = require('./controllers/vehiculos');

const app = express();
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(methodOverride());

// app.get('/hola/:name', (req, res) => {
//     res.send({message: `Hola ${req.params.name}`});
// });

app.get('/api/vehiculo', vehiculoCtrl.getVehiculos);

// 599713535eb99226f46c18e0
app.get('/api/vehiculo/:vehiculoId', vehiculoCtrl.getVehiculo);

app.post('/api/vehiculo', vehiculoCtrl.saveVehiculo);

app.delete('/api/vehiculo/:vehiculoId', vehiculoCtrl.deleteVehiculo);

app.put('/api/vehiculo/:vehiculoId', vehiculoCtrl.updateVehiculo);

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
