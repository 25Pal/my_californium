const famousBook=require('../models/famousBook');
const famousAuthor=require('../models/famousAuthor');//we have linked our data
const famousPublisher=require('../models/famousPublisher');
//all API's Function 

const Createauthor=async function(req,res)
{
    const body=req.body;
    const a=await famousAuthor.create(body);
    //const x=await famousAuthor.find();

    res.send({data:a});
}
const createpublisher=async function(req,res)
{
    const body=req.body;
    const a=await famousPublisher.create(body);
    res.send(a);
}
const createBook=async function(req,res)
{
    const body=req.body;
  
//a.The authorId is present in the request body. If absent send an error message that this detail is required
  
    if(body.author == null )
        {
            return res.send("This detail is required !!")
        }
//b.If present, make sure the authorId is a valid ObjectId in the author collection. 
// A valid ObjectId in author collection means that a document must exist with this id. 
// If not then send an error message that the author is not present.
   let c=body.author;
    let d = await famousAuthor.findOne( { _id : c } );
    if(d==null || d==undefined)
    {
        return res.send("ERROR : Author does not exist !!!")
    }
//c.The publisherId is present in the request body. 
// If absent send an error message that this detail is required
    if(body.publisher == null)
        {
           return res.send("ERROR : This Detail is required !!") 
        }
// d.If present, make sure the publisherId is a valid ObjectId in the publisher collection. 
//  If not then send an error message that the publisher is not present.
    let e = body.publisher;
    let f = await famousPublisher.findOne({_id : e }) ;
    if(f==null || f== undefined)
    {
        return res.send("ERROR : Publisher with ths id does not exist ");
    }
    const a=await famousBook.create(body);
    res.send(a);

}
const Linkeddata=async function(req,res)
{
    let x=await famousBook.find().populate('author').populate('publisher');
    res.send(x);
}
const extradata= async function(req,res)
{
    let z=req.body;//penguine , harpercopis
    let s=await famousPublisher.findOne({name:z.name});
    let f= await famousBook.findOneAndUpdate({publisher:s},{$set:{ isHardCover : true }},{new:true})
   //console.log(req.ip)
    res.send(f);
}
const priceUpdate=async function(req,res)
{
    let s=await famousAuthor.find({rating:{$gt:3.5}});
    let f=await famousBook.updateMany({author_id:s},{$set:{$inc:{price:10}}},{new:true});
    return  res.send(f);
    

}


module.exports={createBook,Createauthor,createpublisher,Linkeddata,extradata,priceUpdate}