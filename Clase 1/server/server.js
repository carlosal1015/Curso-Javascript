"use-strict";
//Llamamos al módulo express
//const app = require('express');
//En Angular se ve el import.
var express = require("express");
//var router = express.Router();

var app = express();

//var server = http.createServer(app);
var puerto = 3000;
var server = app.listen(puerto, function(){
    console.log("Servidor escuchando en el puerto:" + puerto);
});

/*var rutas = require("./require");
app.use("/", rutas);
*/
