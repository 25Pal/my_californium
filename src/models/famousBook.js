const mongoose=require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId;
//BOOKS DATA
const newBook= new mongoose.Schema({
    name:String,
  author:{                  //Refrence
        type:objectId,
        ref:"authordata"
        
    },
   
    publisher:{
        type:objectId,
        ref:"bookpublisher"
       
    },
    price:Number,
    ratings:Number,
    isHardCover:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('authorbook',newBook)