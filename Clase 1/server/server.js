"use-strict";
//var a = 12;

//Llamamos al módulo express
//const app = require('express');
//En Angular se ve el import.
var express = require('express');
var router = express.Router();

var app = express();

//var server = http.createServer(app);
var server = app.listen(3000);

console.log(server);
