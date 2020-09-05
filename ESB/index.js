const express = require("express"); // se usa el framework express para la creación de la API
const app = express();
var http = require("http");

/*
 * funcion que manejará la comunicación entre los servicios de cliente y repartidor cuando el cliente solicite el estado del pedido al repartidor
 */
app.get('/pedido', function(req, res) {
    var options = {
        host: 'localhost',
        port: 4000, // contactamos a servicio de repartidor
        path: '/pedido',
        method: 'GET'
    };
    var req2 = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    req2.write('data\n');
    req2.end();
    res.send("Su pedido está entregado");
});

/*
 * funcion que manejará la comunicación entre los servicios de cliente y restaurante cuando el cliente solicite el estado del pedido al restaurante
 */
app.get('/pedido/:pedidoid', function(req, res) {
    var options = {
        host: 'localhost',
        port: 3000, // contactamos a servicio de restaurante
        path: '/pedido/1',
        method: 'GET'
    };
    var req2 = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    req2.write('data\n');
    req2.end();
    res.send("El pedido está en camino");
});


/*
 * funcion que manejará la comunicación entre los servicios de cliente y restaurante cuando el cliente solicite el estado del pedido al restaurante 
 * y la comunicación entre los servicios de restaurante y repartidor cuando el restaurante avise al repartidor sobre el pedido cuando esté listo
 */

app.post('/pedido', function(req, res) {
    if (req.headers['servicio'] == 'cliente') { // si el request viene del servicio de Cliente
        var options = {
            host: 'localhost',
            port: 3000, // contactamos a servicio de restaurante
            path: '/pedido',
            method: 'POST'
        };
        var req2 = http.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                console.log('BODY: ' + chunk);
            });
        });
        res.send('Pedido del cliente recibido');
    } else { // si el request viene del servicio de Restaurante
        var options = {
            host: 'localhost',
            port: 4000, // contactamos a servicio de repartidor
            path: '/pedido',
            method: 'POST'
        };
        var req2 = http.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                console.log('BODY: ' + chunk);
            });
        });
        res.send('Pedido del restaurante recibido');
    }
});

app.listen(6000, () => { // servicio de ESB
    console.log("Orquestador de servicios");
});