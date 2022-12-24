const mongoose=require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId;

const card= new mongoose.Schema
({
    cardNumber:String,
    cardType:{
        type:String,
        enum:["Regular","Special"]
    },
    customerName:String,
    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    },
    vision:String,

    customerId:{
    type:objectId,
    ref:'jaikisancustomer'
    }//refer

},{timestamps:true});
module.exports=mongoose.model('jaikisancard',card)