'use strict'

const Cliente = require('../models/cliente.model');

function getClientes(req, res) {
    console.log('GET /api/cliente/id');
    console.log(req.params);
    // pasarle un objeto vacio es que nos busque todos
    Cliente.find({}, (err,cliente)=>{
        console.log(cliente.length);
        if(err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`});
        if(cliente) return res.status(200).send({cliente});
        else return res.status(204).send({message:`No existen resultados`});
    });
}

function getCliente(req, res) {
    console.log(req.params);
    
    let clienteId = req.params.clienteId;
    console.log(`GET api/cliente/:id}`);
    console.log(`Numero id: ${clienteId}`);
    console.log(`Longitud del id: ${clienteId.length}`);

    if(clienteId.length === 24){
        Cliente.findById(clienteId, (err, clientes) => {
            if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
            if (clientes) return res.status(200).send({ clientes });
            else return res.status(204).send({ message: `No existen resultados` });
        });
    }else{
        //en este caso, clienteId equivale al numDoc
        Cliente.find({ numDoc: req.params.clienteId }, (err, cliente) => {
            console.log(cliente.length);
            if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
            if (cliente) return res.status(200).send({ cliente });
            else return res.status(204).send({ message: `No existen resultados` });
        });
    }

}

function saveCliente(req, res) {
    console.log('POST /api/cliente') 
    console.log(req.body);

    let cliente = new Cliente();

    cliente.numCli= req.body.numCli;
    cliente.codigo = req.body.codigo;
    cliente.grupo = req.body.grupo;
    cliente.nombre = req.body.nombre;
    cliente.apellidos = req.body.apellidos;
    cliente.compania = req.body.compania;
    cliente.fechaNac = req.body.fechaNac;
    cliente.tipoDoc = req.body.tipoDoc;
    cliente.numDoc = req.body.numDoc;
    cliente.direccion = req.body.direccion;
    cliente.codPostal = req.body.codPostal;
    cliente.localidad = req.body.localidad;
    cliente.provincia = req.body.provincia;
    cliente.pais = req.body.pais;
    cliente.telefono1 = req.body.telefono1;
    cliente.telefono2 = req.body.telefono2;
    cliente.fax = req.body.fax;
    cliente.email = req.body.email;
    cliente.nota = req.body.nota;
    cliente.numPol = req.body.numPol;
    cliente.tipoIva = req.body.tipoIva;
    cliente.iva = req.body.iva;
    cliente.descuento = req.body.descuento;
    cliente.fechaPago = req.body.fechaPago;

    cliente.save((err, clienteSave) => {
        if (err) 
            res.status(500, { message: `error al insertar en BD: ${err}` });
        res.status(200).send({cliente: clienteSave});
    });
}

function updateCliente(req, res) {
    let clienteId = req.params.clienteId;
    let update = req.body;

    Cliente.findByIdAndUpdate(clienteId, update, (err, clienteFieldsUpdated) =>{
        if(err) return res.status(500).send({message:`Error al actualizar: ${err}`});
        if(!clienteFieldsUpdated) return res.status(404).send({message:`El Cliente no existe`});
        res.status(200).send({message: `El cliente con id:${clienteId} ha sido actualizado`, cliente: clienteId});
    })
}

function deleteCliente(req, res) {
    let clienteId = req.params.clienteId;
    
    Cliente.findById(clienteId, (err, cliente) =>{
        if(err) return res.status(500).send({message:`Error al borrar: ${err}`});
        if(!cliente) return res.status(404).send({message:`El cliente no existe`});

        cliente.remove(err =>{
            if(err) return res.status(500).send({message:`Error al ejecutar la peticion borrar: ${err}`});
            res.status(200).send({message: `El cliente con id:${clienteId} ha sido eliminado`});
        })
    })
}

module.exports = {
    getCliente,
    getClientes,
    saveCliente,
    updateCliente,
    deleteCliente,
}