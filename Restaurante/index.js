const express = require("express");
const app = express();

let mensaje = {
    1: {
        id: '1',
        data: 'El pedido está en camino'
    },
    2: {
        id: '2',
        data: 'El pedido está entregado'
    },
};

app.get('/pedido/:pedidoid', function(req, res) {
    res.send(mensaje[req.params.pedidoid].data);
});

app.post('/pedido', function(req, res) {
    res.send('Pedido del cliente recibido');
});

app.listen(3000, () => {
    console.log("Restaurante Practica 3");
});