const express = require("express"); // se usa el framework express para la creación de la API
const app = express();
var http = require("http");

app.get('/pedido', function(req, res) {
    var options = {
        host: 'localhost',
        port: 4000, // contactamos a servicio de repartidor
        path: '/pedido',
        method: 'GET'
    };
    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    res.send(req.body);
});



app.listen(6000, () => { // servicio de ESB
    console.log("Orquestador de servicios");
});