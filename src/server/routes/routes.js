'use strict'

const express = require('express');
const clienteCtrl = require('../controller/cliente.controller');
const vehiculoCtrl = require('../controller/vehiculo.controller');
const facturaCtrl = require('../controller/factura.controller');
const tallerCtrl = require('../controller/taller.controller');
const auth = require ('../middelwares/user.middelware')
const api = express.Router();

api.get('/private', auth, function(req, res) {
    res.status(200).send({message: 'Tienes acceso'});
});

/**
 * Router de Cliente
 */
api.get('/cliente', clienteCtrl.getCliente);
api.get('/cliente/:clienteId', clienteCtrl.getClientes);
api.post('/cliente', clienteCtrl.saveCliente);
api.delete('/cliente/:clienteId', clienteCtrl.deleteCliente);
api.put('/cliente/:clienteId', clienteCtrl.updateCliente);

/**
 * Router de Vehiculo
 */
api.get('/vehiculo', vehiculoCtrl.getVehiculo);
// 599713535eb99226f46c18e0
api.get('/vehiculo/:vehiculoId', vehiculoCtrl.getVehiculos);
api.post('/vehiculo', vehiculoCtrl.saveVehiculo);
api.delete('/vehiculo/:vehiculoId', vehiculoCtrl.deleteVehiculo);
api.put('/vehiculo/:vehiculoId', vehiculoCtrl.updateVehiculo);


/**
 * Router de Factura
 */
api.get('/factura', facturaCtrl.getFactura);
api.get('/factura/:facturaId', facturaCtrl.getFacturas);
api.post('/factura', facturaCtrl.saveFactura);
api.delete('/factura/:facturaId', facturaCtrl.deleteFactura);
api.put('/factura/:facturaId', facturaCtrl.updateFactura);

 /**
 * Router de Taller
 */
api.get('/taller', tallerCtrl.getTaller);
api.get('/taller/:tallerId', tallerCtrl.getTalleres);
api.post('/taller', tallerCtrl.saveTaller);
api.delete('/taller/:tallerId', tallerCtrl.deleteTaller);
api.put('/taller/:tallerId', tallerCtrl.updateTaller);


module.exports = api;