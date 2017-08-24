'use strict'

const express = require('express');
const clienteCtrl = require('../controller/cliente.controller');
const vehiculoCtrl = require('../controller/vehiculo.controller');
const facturaCtrl = require('../controller/factura.controller');
const tallerCtrl = require('../controller/taller.controller');
const auth = require ('../middelwares/user.middelware')
const api = express.Router();
const userCtrl = require('../controller/user.controller');

api.get('/private', auth, function(req, res) {
    res.status(200).send({message: 'Tienes acceso'});
});
/**
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTlmMWY5MjllMWE3NjUzZjc3Yjc3NGIiLCJpYXQiOjE1MDM2MDA1MzAsImV4cCI6MTUwNDgxMDEzMH0.DxI7GsFFviXXu1FrSyN2QFkLIsBnurlCuZYtsyfLHfE
 */
api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);

/**
 * Falta securizar las llamadas POST, PUT y DELETE
 * 
 * ej: api.delete('/cliente/:clienteId', auth, clienteCtrl.deleteCliente);
 */

/**
 * Router de Cliente
 */
api.get('/cliente', clienteCtrl.getClientes);
api.get('/cliente/:clienteId', clienteCtrl.getCliente);
api.post('/cliente', clienteCtrl.saveCliente);
api.delete('/cliente/:clienteId', clienteCtrl.deleteCliente);
api.put('/cliente/:clienteId', clienteCtrl.updateCliente);


/**
 * Router de Vehiculo
 */
api.get('/vehiculo', vehiculoCtrl.getVehiculos);
// 599713535eb99226f46c18e0
api.get('/vehiculo/:vehiculoId', vehiculoCtrl.getVehiculo);
api.post('/vehiculo', vehiculoCtrl.saveVehiculo);
api.delete('/vehiculo/:vehiculoId', vehiculoCtrl.deleteVehiculo);
api.put('/vehiculo/:vehiculoId', vehiculoCtrl.updateVehiculo);


/**
 * Router de Factura
 */
api.get('/factura', facturaCtrl.getFacturas);
api.get('/factura/:facturaId', facturaCtrl.getFactura);
api.post('/factura', facturaCtrl.saveFactura);
api.delete('/factura/:facturaId', facturaCtrl.deleteFactura);
api.put('/factura/:facturaId', facturaCtrl.updateFactura);

 /**
 * Router de Taller
 */
api.get('/taller', tallerCtrl.getTalleres);
api.get('/taller/:tallerId', tallerCtrl.getTaller);
api.post('/taller', tallerCtrl.saveTaller);
api.delete('/taller/:tallerId', tallerCtrl.deleteTaller);
api.put('/taller/:tallerId', tallerCtrl.updateTaller);


module.exports = api;