var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
require("../schemas/User");
var User = mongoose.model("users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET contacto
router.get("/contacto", (req, res, next)=>{
  res.render("contacto", {
      title:"Contáctanos"
  });
});
// POST contacto
router.post("/contacto", (req, res, next)=>{
  var user = new User({
    title:req.body.title,
    author: req.body.author,
    year: req.body.year
  });

  user.save();
  res.send("Tu dato fue guardado");
});


//Práctica. Ecma Script 6. Typpescript OPP y Javascript es a Programación Funcional
router.get("/nueva-ruta", (req, res, next)=>{
  res.redirect("/contacto");
})
//get conseguir informacion
//post enviar informacion
//delete borrar
//put editar
module.exports = router;
