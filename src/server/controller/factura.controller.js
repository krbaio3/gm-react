'use strict'

const Factura = require('../models/factura.model');
const Vehiculo = require('../models/vehiculo.model');
const Cliente = require('../models/cliente.model');
const Taller = require('../models/taller.model');

function getFactura(req, res) {

    // pasarle un objeto vacio es que nos busque todos
    Factura.find({}, (err, factura) => {
        Taller.populate(factura, { path: 'taller' }, (err, factura) => {
            Vehiculo.populate(factura, { path: 'vehiculo' }, (err, factura) => {
                Cliente.populate(factura, { path: 'cliente' }, (err, factura) => {
                    console.log(factura.length);
                    if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
                    if (factura) return res.status(200).send({ factura });
                    else return res.status(204).send({ message: `No existen resultados` });
                });
            });
        });
    });
}

function getFacturas(req, res) {
    console.log(req.params);
    
    let facturaId = req.params.facturaId;

    // pasarle un objeto vacio es que nos busque todos
    Factura.findById(facturaId, (err, facturas) => {
        Taller.populate(factura, { path: 'taller' }, (err, factura) => {
            Vehiculo.populate(factura, { path: 'vehiculo' }, (err, factura) => {
                Cliente.populate(factura, { path: 'cliente' }, (err, factura) => {
                    if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
                    if (facturas) return res.status(200).send({ facturas });
                    else return res.status(204).send({ message: `No existen resultados` });
                });
            });
        });
    });
}

function saveFactura(req, res) {
    console.log('POST /api/factura') 
    console.log(req.body);

    let factura = new Factura();

    factura.numFac= req.body.numFac;
    factura.fecha = req.body.fecha;
    factura.cuerpo = req.body.cuerpo;
    factura.baseImponible = req.body.baseImponible;
    factura.dtoImponible = req.body.dtoImponible;
    factura.impuesto = req.body.impuesto;
    factura.totalPre = req.body.totalPre;
    factura.vehiculo = req.body.vehiculo;
    factura.taller = req.body.taller;

    factura.save((err, facturaSave) => {
        if (err) 
            res.status(500, { message: `error al insertar en BD: ${err}` });
        res.status(200).send({factura: facturaSave});
    });
}

function updateFactura(req, res) {
    let facturaId = req.params.facturaId;
    let update = req.body;

    Factura.findByIdAndUpdate(facturaId, update, (err, facturaFieldsUpdated) =>{
        if(err) return res.status(500).send({message:`Error al actualizar: ${err}`});
        if(!facturaFieldsUpdated) return res.status(404).send({message:`La factura no existe`});
        res.status(200).send({message: `El factura con id:${facturaId} ha sido actualizado`, factura: facturaId});
        
    })
}

function deleteFactura(req, res) {
    let facturaId = req.params.facturaId;
    
    Factura.findById(facturaId, (err, factura) =>{
        if(err) return res.status(500).send({message:`Error al borrar: ${err}`});
        if(!factura) return res.status(404).send({message:`El factura no existe`});

        factura.remove(err =>{
            if(err) return res.status(500).send({message:`Error al ejecutar la peticion borrar: ${err}`});
            res.status(200).send({message: `El factura con id:${facturaId} ha sido eliminado`});
        })
    })
}

module.exports = {
    getFactura,
    getFacturas,
    saveFactura,
    updateFactura,
    deleteFactura,
}