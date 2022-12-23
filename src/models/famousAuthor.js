const mongoose=require('mongoose')
//authordata
const newAuthor= new mongoose.Schema({
        authorName: String,
        age:Number,
        address:String,
        rating:Number
},{timestamps:true});

module.exports=mongoose.model('authordata',newAuthor);