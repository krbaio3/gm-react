'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Vehiculo = require('./vehiculo.model');
const Taller = require('./taller.model');

const factura = new Schema({
    numFac: String,
    fecha: { type: Date, default: Date.now() },
    cuerpo: [
        {
            referencia: String,
            cantidad: Number,
            concepto: String,
            pUnitario: String,
            dto: Number,
            total : Number,
        },
    ],
    baseImponible: String,
    dtoImponible: String,
    impuesto: String,
    totalPre: String,
    vehiculo: {
        type: Schema.ObjectId, ref: 'Vehiculo',
    },
    taller: {
        type: Schema.ObjectId, ref: Taller,
    },

});

module.exports = mongoose.model('Factura', factura);