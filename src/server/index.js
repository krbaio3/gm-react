'use strict'

const mongose = require('mongoose');
const app = require('./app');
const config = require('./config');

// mongose.connect(config.db, { useMongoClient: true, }, (err, res) => {
mongose.connect(config.db, (err, res) => {
    if (err) {
        console.error(`ERROR: connecting to DataBase: ${err}`);
        throw err;
    }
    console.log(`conexion establecida con mongoDB`);
});

app.listen(config.port, () => {
    console.log(`API REST running on http://localhost:${config.port}`);
});

