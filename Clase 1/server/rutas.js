var express = require("express");
var app = express();
var router = express.Router();

// Rutas
router.get("/", function(peticion, respuesta, siguiente){
  respuesta.send("Mi ruta principal");
});

module.exports = router;
