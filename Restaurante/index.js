const express = require("express"); // se usa el framework express para la creación de la API
const app = express();

let mensaje = { // tipos de mensaje que puede mostrar el restaurante al solicitarse información de un pedido
    1: {
        id: '1',
        data: 'El pedido está en camino'
    },
    2: {
        id: '2',
        data: 'El pedido está entregado'
    },
};

app.get('/pedido/:pedidoid', function(req, res) { // ruta para retornar info del pedido al cliente
    res.send(mensaje[req.params.pedidoid].data);
});

app.get('/', function(req, res) { // ruta default
    res.send("Restaurante Practica 3");
});

app.post('/pedido', function(req, res) { // ruta para recibir pedido de cliente, usando metodo POST
    res.send('Pedido del cliente recibido');
});

app.listen(3000, () => { // levantar microservicio
    console.log("Restaurante Practica 3");
});