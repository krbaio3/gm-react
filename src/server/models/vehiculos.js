'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehiculo = new Schema({
    tipo: { type: String },
    matricula: { type: String },
    marca: { type: String },
    modelo: { type: String },
    version: { type: String },
    combustible: {
        type: String, enum:
        ['Gasolina', 'Diesel', 'GLP', 'Hibrido', 'Electrico']
    },
    codMotor: { type: String },
    potencia: { type: Number },
    tipoPintura: { type: String },
    codColor: { type: String },
    fechaFab: { type: String },
    fechaMatr: { type: String },
    
});

module.exports = mongoose.model('Vehiculo', vehiculo);