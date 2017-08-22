'use strict'

const express = require('express');
const vehiculoCtrl = require('../controller/vehiculo.controller');
const api = express.Router();

api.get('/vehiculo', vehiculoCtrl.getVehiculo);
// 599713535eb99226f46c18e0
api.get('/vehiculo/:vehiculoId', vehiculoCtrl.getVehiculos);
api.post('/vehiculo', vehiculoCtrl.saveVehiculo);
api.delete('/vehiculo/:vehiculoId', vehiculoCtrl.deleteVehiculo);
api.put('/vehiculo/:vehiculoId', vehiculoCtrl.updateVehiculo);


module.exports = api;