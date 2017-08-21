'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    numCli: {type: Number},
    codigo: { type: Number},
    grupo: { type: String },
    nombre: { type: String },
    apellidos: { type: String },
    fechaNac: { type: String },
    tipoDoc: {
        type: String, enum:
            ['DNI', 'CIF', 'NIE']
    },
    numDoc: { type: String },
    direccion: { type: String }, 
    codPostal: { type: String },
    localidad: { type: String },
    provincia: { type: String },
    pais: { type: String},
    telefono1: { type: String },
    telefono2: { type: String },
    fax: { type: String },
    email: { type: String },
    nota: { type: String },
    numPol: { type: String },
    tipoIva: { type: String },
    iva: { type: String },
    descuento: { type: String },
    fechaPago: { type: String },

});

module.exports = mongoose.model('Cliente', cliente);