'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taller = new Schema({
    nombre: String,
    CIF: String,
    direccion: String,
    provincia: String,
    localidad: String,
    telefono: String,

});

module.exports = mongoose.model('Taller', taller);