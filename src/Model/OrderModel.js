const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:
    },
    productId:{
        type:ObjectId,
        ref:
    },
    amount:0,
    isFreeAppUser:{
        type:Boolean,

    },
    date:String


})
module.exports=mongoose.model('order',orderSchema);

{
	_id: ObjectId("61951bfa4d9fe0d34da86344"),
	userId: “61951bfa4d9fe0d34da86829”,
	productId: “61951bfa4d9fe0d34da86344”
	amount: 0,
	isFreeAppUser: true, 
	date: “22/11/2021”
}