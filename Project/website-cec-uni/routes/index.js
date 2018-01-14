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
module.exports = router;
