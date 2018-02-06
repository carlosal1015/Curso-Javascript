const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Book = mongoose.model('Book');

module.exports = (app) => {
  app.get('/', routes.getIndex);
  app.get('/add-book', routes.getAddBook);
  // JSON
  app.get('/api', routes.getApi);
  // POST add book
  app.post('/add-book', routes.postAddBook);
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
  getApi : (req, res, next) => {
	 	Book.find()
	 		.limit()
	 		.sort()
	 		.exec((err, data) => {
	 			res.json(data)
	 		});
	 },
  getAddBook : (req, res, next)=>{
    res.render("add-book", {
        title:'Agregar libro'
    });
  },
  postAddBook : (req, res, next) => {
     Book.find()
       .limit()
       .sort()
       .exec((err, data) => {
         var book = new book({
           title: req.body.title,
           author: req.body.author,
           cicle: req.body.ciclo,
           school: req.body.school
         })
       book.save();
       res.redirect("/api");
       })
    }
}

// var objeto = {
//   property: detalle,
//   propertyTwo: detalle,
//   propertyThree : detalle
// }
