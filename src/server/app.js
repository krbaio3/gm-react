'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

router.get('/hola/:name', (req, res) => {
    res.send({message: 'Hola Mundo!'});
});

app.use(router);

app.listen(port, () => {
    console.log(`Node server running on http://localhost:${port}`);
});

// mongose.connect('monmongodb://localhost/cliente', (err, res) => {
//     if(err){
//         console.error('ERROR: connecting to DataBase. ' + err)
//     }
// });
