const express = require("express"); // se usa el framework express para la creación de la API
const app = express();

app.get('/pedido', function(req, res) { // ruta para entregar pedido al cliente
    res.send("Su pedido está entregado");
});

app.get('/', function(req, res) { // ruta default
    res.send("Repartidor Practica 3");
});

app.post('/pedido', function(req, res) { // ruta para ruta para recibir pedido del restaurante, usando metodo POST
    res.send('Pedido del restaurante recibido');
});

app.listen(4000, () => { // levantar microservicio
    console.log("Repartidor Practica 3");
})