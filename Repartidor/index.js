const express = require("express");
const app = express();

app.get('/pedido', function(req, res) {
    res.send("Llevo su pedido en camino");
});

app.post('/pedido', function(req, res) {
    res.send('Pedido del restaurante recibido');
});

app.listen(4000, () => {
    console.log("Repartidor Practica 3");
})