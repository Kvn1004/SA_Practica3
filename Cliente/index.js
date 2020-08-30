const express = require("express"); // se usa el framework express para la creación de la API
const app = express();

app.get('/', function(req, res) {
    res.send("Cliente Practica 3");
});


app.listen(5000, () => { // levantar microservicio
    console.log("Cliente Practica 3");
});