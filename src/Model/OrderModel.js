const mongoose=require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId;
const orderSchema=new mongoose.Schema({
    userId:{
        type:objectId,
        ref:'user'
    },
    productId:{
        type:objectId,
        ref:'product'

    },
    amount:0,
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
    date:String
})
module.exports=mongoose.model('order',orderSchema);

// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }