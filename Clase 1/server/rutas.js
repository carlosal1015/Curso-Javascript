var express = require("express");
var router = express.Router();

var app = express();

// Rutas
router.get("/", function(peticion, respuesta, siguiente){
  respuesta,send("Mi ruta principal");
});

module.exports = router;
