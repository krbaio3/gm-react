'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Vehiculo = mongoose.model('Vehiculo');
const Taller = mongoose.model('Taller');

const factura = new Schema({
    numFac: String,
    fecha: { type: Date, default: Date.now() },
    concepto: String,
    referencia: String,
    cantidad: Number,
    pUnitario: String,
    dto: Number,
    tipoPintura: String,
    codColor: String,
    fechaFab: String,
    fechaMatr: String,
    vehiculo: {
        type: Schema.ObjectId, ref: 'Vehiculo',
    },
    taller: {
        type: Schema.ObjectId, ref: 'Taller',
    },

});

module.exports = mongoose.model('Factura', factura);