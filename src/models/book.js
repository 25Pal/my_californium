const mongoose = require('mongoose');

const bookData = new mongoose.Schema( {
    name:String,
    author_id:Number,
    price:Number,
    ratings:Number
}, { timestamps: true });


module.exports = mongoose.model('Book1', bookData) 
