'use strict'

const express = require('express');
const vehiculoCtrl = require('../controller/vehiculo.controller');
const auth = require ('../middelwares/user.middelware')
const api = express.Router();

api.get('/vehiculo', vehiculoCtrl.getVehiculo);
// 599713535eb99226f46c18e0
api.get('/vehiculo/:vehiculoId', vehiculoCtrl.getVehiculos);
api.post('/vehiculo', vehiculoCtrl.saveVehiculo);
api.delete('/vehiculo/:vehiculoId', vehiculoCtrl.deleteVehiculo);
api.put('/vehiculo/:vehiculoId', vehiculoCtrl.updateVehiculo);
api.put('/private', auth, function(req, res) {
    res.status(200).send({message: 'Tienes acceso'});
});


module.exports = api;