const productModel=require('../Model/ProductModel');
const userModel=require('../Model/UserModel');
const orderModel=require('../Model/OrderModel');

const createUser=async function(req,res)
{
    let body = req.body;
    let user=await userModel.create(body);
    res.send(user)
} 

const createProduct=async function(req,res)
{
    let body = req.body;
    let product = await productModel.create(body);
    res.send(product)
}

const createOrder=async function(req,res)
{
    const body = req.body;
   // console.log(body);
    const a=await userModel.findOne({_id : body.userId});
    if(a==null || a== undefined)
    {
        return res.send("ERROR : No user exist with such Id ...!!");
    };

    const b=await productModel.findOne({_id:body.productId});
   // console.log(b);
    if(b==null || b == undefined)
    {
        return res.send("ERROR : No product exist with such Id..!!");
    };
    if(body.isFreeAppUser == 'true')
    {
       // let body = req.body;
        const order= await orderModel.create(body);
        return res.send(order);
    };
    if(a.balance < b.price  )
    {
        return res.send("Error : You Have insuficient balance...");
    };

    const v=a.balance;
    const z=b.price;
    const x=v-z;
    body.amount=z;
    const order= await orderModel.create(body);
     const updatedUserBalance = await userModel.findOneAndUpdate({_id : body.userId},{$set:{balance : x}},{new:true});
     return res.send({DATA: order ,UpdationInPrice : updatedUserBalance});
    
}

const getAllOrders=async function(req,res)
{
    const a=await orderModel.find();
    res.send(a);
}
module.exports={createProduct,createUser,createOrder,getAllOrders}