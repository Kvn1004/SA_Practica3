const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.send("Cliente Practica 3");
});


app.listen(5000, () => {
    console.log("Cliente Practica 3");
});