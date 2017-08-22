'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cliente = mongoose.model('Cliente');

const vehiculo = new Schema({
    tipo: String,
    matricula: String,
    marca: String,
    modelo: String,
    version: String,
    combustible: {
        String, enum:
        ['Gasolina', 'Diesel', 'GLP', 'Hibrido', 'Electrico']
    },
    codMotor: String,
    potencia: Number,
    tipoPintura: String,
    codColor: String,
    fechaFab: String,
    fechaMatr: String,
    cliente: {
        type: Schema.ObjectId, ref: 'Cliente',
    },
    
});

module.exports = mongoose.model('Vehiculo', vehiculo);