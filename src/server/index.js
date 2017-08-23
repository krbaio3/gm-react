'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
mongoose.Promise = global.Promise;

// mongoose.connect(config.db, { useMongoClient: true, }, (err, res) => {
mongoose.connect(config.db, {useMongoClient: true},(err, res) => {
    if (err) {
        console.error(`ERROR: connecting to DataBase: ${err}`);
        throw err;
    }
    console.log(`conexion establecida con mongoDB`);
});

app.listen(config.port, () => {
    console.log(`API REST running on http://localhost:${config.port}`);
});

