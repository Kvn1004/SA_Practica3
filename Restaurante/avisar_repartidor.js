// funcion para avisar sobre pedido al repartidor
var http = require("http");

var options = {
    host: 'localhost',
    port: 4000, // puerto 4000 del microservicio del repartidor
    path: '/pedido',
    method: 'POST'
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('BODY:' + chunk);
    });
});

module.exports = function() {
    req.write('data\n');
    req.end();
};

require('make-runnable');