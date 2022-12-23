const mongoose=require('mongoose');
//PUBLISHER DATA
const newBook= new mongoose.Schema({
    name:String,
    headQuarters:String

});
module.exports=mongoose.model('bookpublisher',newBook)