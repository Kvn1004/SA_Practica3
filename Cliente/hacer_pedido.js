// funcion para hacer pedido al restaurante
var http = require("http");

var options = {
    host: 'localhost',
    headers: { 'servicio': 'cliente' },
    port: 6000, //redirigimos al puerto 6000 del orquestador ESB
    path: '/pedido',
    method: 'POST'
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY: ' + chunk);
    });
});

module.exports = function() {
    req.write('data\n');
    req.end();
};

require('make-runnable');