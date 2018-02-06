'use-strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newBook = new Schema({
    title: String,
    ciclo: String,
    author: String,
    school: String
},{
    collection: 'books'
});

mongoose.model('book',newBook)
