const linkJaiKisanData2=require('../models/cardModel')
const linkJaiKisanData1=require('../models/customerModel')
//functions
//******************Customer*************************************8*/
const createCustomer=async function(req,res)
{
    let body=req.body;
//checknumber
    let a=body.mobileNo;
    if(a==null || a== undefined)
    {
        return res.send("ERROR : Number is Required !");
    }
//check email
let b=body.emailId
    if(b==null || b==undefined)
    {
        return res.send("ERROR : EmailID is Required !")
    }  
// DOB
let c=body.DOB
    if(c==null || c==undefined)
    {
        return res.send("ERROR : DOB is Required !")
    }  
let d=body.status
    if(d==null)
    {
        return res.send("ERROR : Status is Required !")
    }
 let e=await linkJaiKisanData1.create(body);
 res.send(e);

}
const getAllCustomer=async function(req,res)
{
    let get=await linkJaiKisanData1.find();
    res.send(get);
}
const deleteCustomer=async function(req,res)
{
    const body=req.body;
    let deleted=await linkJaiKisanData1.findOneAndDelete(body);
    res.send(deleted);

}
//******************************Card**********************************8 */
const createCard=async function (req,res)
{
    let body=(req.body);
    let a=body.customerId
    if(linkJaiKisanData1._id != a)
    {
        return res.send("Error : No such customer is available with this ID !!");
    }
    let card=await linkJaiKisanData2.create(body);
    res.send(card);
}
const getAllCard=async function(req,res)
{
    let get=await linkJaiKisanData2.find();
    res.send(get);
}

module.exports={createCustomer,createCard,deleteCustomer,getAllCustomer,getAllCard};