//const { default: mongoose } = require('mongoose');
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
        name:String,
        balance:{
            type:Number,
            default:100
        },
        address:String,

        age:Number,
        gender:{
            type:String,
            enum:["Male","Female","Other"]
        },
        isFreeAppUser:{
            type:Boolean,
            default:false
        }


},{tmestamps:true})

module.exports=mongoose.model('user',userSchema);

// { 
// 	_id: ObjectId("61951bfa4d9fe0d34da86829"),
// 	name: "Sabiha Khan",
// 	balance:100, // Default balance at user registration is 100
// 	address:"New delhi",
// 	age: 90,
//  	gender: “female” // Allowed values are - “male”, “female”, “other”
// 	isFreeAppUser: false // Default false value.
// }