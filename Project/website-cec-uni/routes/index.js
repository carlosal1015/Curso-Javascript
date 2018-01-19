var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/contacto", (req, res, next)=>{
  res.render("contacto", {
      title:"Contáctanos"
  });
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
