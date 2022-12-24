const mongoose=require('mongoose');
const customer= new mongoose.Schema
({
    firstName:{
        type:String,
        required:true
    },
    lastName:String,
    mobileNo:{
        type:String,
        required:true
    },
    emailId:String,
    DOB:{
        type:Date,
        required:true
    },
    address:String,
   
    status:{
        type:String,
        enum:["Active","Inactive"]
    }
    
},{timestamps:true});
module.exports=mongoose.model('jaikisancustomer',customer)