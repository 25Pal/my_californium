const { count } = require("console")
const bookCollections= require("../models/bookCollections")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookCollections.create(data)
    res.send({Collections: savedData})
}
const bookList= async function (req, res) {
    let bookList =await bookCollections.find().select({bookName:0,  authorName:1, _id:0})
    res.send({list: bookList})
    // let users=await bookCollections.find();
    // res.send({list: users})
}
const getBooksInYear =async function (req, res){
    //let data =req.body
    let getBooksInYear =await bookCollections.find(
        
    )
    res.send({ data: getBooksInYear })
}
const getParticularBooks = async function(req, res){
   // let data=req.body
    let getParticularBooks = await bookCollections.find({bookName:"Book3"})
    res.send({ data: getParticularBooks})
}
const getXINRBooks = async function(req, res){
    let getXINRBooks= await bookCollections.find({"prices.indianPrice": {$in :["10INR","50INR","49INR"]}})
    res.send({data: getXINRBooks})
}
const getRandomBooks = async function(req, res){
    let getRandomBooks =await bookCollections.find({$or:[ {stockAvailable:true, totalPages: {$gt: 500}}]})
    res.send({data: getRandomBooks})
}
module.exports.createBook= createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks =getXINRBooks 
module.exports.getRandomBooks=getRandomBooks