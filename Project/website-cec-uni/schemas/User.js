var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
   title:  String,
   author: String,
   year: Number,
   date: { type: Date, default: Date.now }
},{
    collection:"users"
 });

 moongose.model("users", newSchema);
