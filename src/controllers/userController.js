const usermodel=require('../models/userModel')
const jwt=require('jsonwebtoken');

const userCreate= async function(req,res)
{
    try{const body=req.body;
        const a=await usermodel.create(body);
        return res.send(a);
        }catch(error)
            {
                res.status(500).send(error.message);
            }
}


const loginuser=async function(req,res)
{
    try{const body =req.body;
    const checkuser= await usermodel.findOne({emailId:body.emailId,password:body.password});
    //console.log(checkuser);
    if(!checkuser)
    {
        res.send("ERROR : Invalid userId or Password ");
    }
    const paylod={userId: checkuser._id.toString()};
    const token= await jwt.sign(paylod,'myFirstToken');
   // req.header['x-auth-token']=token; \\ res.setHeader('x-auth-token',token);
    res.send({status: "Sucessfully Logged in" ,token :token});
}catch(error)
{
    res.send(error.message);
}


}
//************************************************************ */
// Write a **GET api /users/:userId** to fetch user
// details. Pass the userId as path param in the url. 
//Check that request must contain **x-auth-token** header. 
//If absent, return a suitable error.
// If present, check that the token is valid.
const getUser=async function(req,res)
{
    try{const a= req.params.userId;
    const user=await usermodel.findOne({_id:a});
    const token = req.token;
    res.send(user);
}catch(error)
{
    res.status(200).send(error.message)
}

}

//*************************************************************************************** */
// Write a **PUT api /users/:userId** to update user details.
// Pass the userId as path param in the url and update the attributes
// received in the request body. Check that request 
// must contain **x-auth-token** header. If absent, return a suitable 
// error.
const updateUser=async function(req,res)
{
    try{const a=req.params.userId;
    const body=req.body;
    const update=await usermodel.findOneAndUpdate({_id:a},{$set:{age:body.age}},{new:true});
    return res.send(update);}
    catch(error)
    {
        res.send(error.message)
    }
}

//************************************************************************************** */
//- Write a **DELETE api /users/:userId** that 
//takes the userId in the path params and marks the isDeleted attribute 
//for a user as true. Check that request must contain **x-auth-token** header.
// If absent, return a suitable error.

const deleteUser=async function(req,res)
{
   try{const a=req.params.userId;
    
    const oldStatus=await usermodel.findOne({_id:a}).select({isDeleted:1});
    const deleteStatus=await usermodel.findOneAndUpdate({_id:a},{$set:{isDeleted:true}},{new:true});
    res.send({oldStatus:oldStatus,deleteStatus:deleteStatus})}
    catch(error)
    {
        res.status(400).send(error.message)
    }
    
}
module.exports={userCreate,loginuser,getUser,updateUser,deleteUser}