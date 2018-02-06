const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Book = mongoose.model('Book');

module.exports = (app) => {
  app.get('/', routes.getIndex);
  app.get('/add-book', routes.getAddBook)
};



/*router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
*/

let routes = {
  getIndex : (req, res, next) =>{
    res.render("index", {
      title:"Website cec uni"
    });
  },//no va ;
  getAddBook : (req, res, next)=>{
    res.render("add-book", {
        title:'Agregar libro'
    });
  }
}

// var objeto = {
//   property: detalle,
//   propertyTwo: detalle,
//   propertyThree : detalle
// }
