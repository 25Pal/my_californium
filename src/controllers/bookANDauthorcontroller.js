const book=require('../models/book')
const author=require('../models/authors');

//ALL API'S function
const addAuthorData=async function(req,res){
        const authorbody = req.body;
        const authorbody1 = await author.create(authorbody);
        res.send(authorbody1);
}
const addBookData=async function(req ,res){
        const bookbody=req.body;
        const bookbody1 = await book.create(bookbody)
        res.send(bookbody1);
}
const listAuthor=async function(req,res)
{
    const listt = await author.findOne({author_name:"Chetan Bhagat"});
    const id = listt.author_id;
    const listid= await book.find({author_id:id})
    res.send(listid)
}
const bookName=async function(req,res)
{
   const authorOf= await book.findOne({name:"Two states"})
   const idOf= authorOf.author_id;
   const update=await book.findOneAndUpdate({authorOf},{$set:{price:80}})
   const a=update.price;
   const authorname=await author.findOne({author_id:idOf})
   const b=authorname.author_name;
   res.send({updatedprice:a ,authorName:b})
}

const costFilter=async function(req,res)
{
    let bookdata = await book.find({ price: {$gte:50 , $lte:100} })
    let y=bookdata.map(z => z.author_id);//
    const p=[];
    for(let i=0;i<=y.length-1;i++)
    {
        const a=await author.findOne({authar_id:y[i]})
        p.push(a.author_name);
    }
    res.send(p);
 
}
module.exports={addAuthorData,addBookData,listAuthor,bookName,costFilter}