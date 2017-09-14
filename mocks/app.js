'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', api);


const routes = {
    vehiculos: {
        url: '/api/1.0/gestionmotor/vehicles',
        file: './api/vehicles.mock.json',
    },
};

app.post(routes.vehiculos.url, (req, res) => {
    res.send(JSON.stringify(require(routes.vehiculos.file)));
});
app.get(routes.vehiculos.url, (req, res) => {
    res.send(JSON.stringify(require(routes.vehiculos.file)));
});
app.put(routes.vehiculos.url, (req, res) => {
    res.send(JSON.stringify(require(routes.vehiculos.file)));
});
app.post(routes.vehiculos.url, (req, res) => {
    res.send(JSON.stringify(require(routes.vehiculos.file)));
});
app.listen(port, () => {
    console.log(`Mocks app listening on port ${port}!`);
});

module.exports = app;