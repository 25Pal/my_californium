
const bookModels=require('../models/bookModels');
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModels.create(data)
    res.send({BookData: savedData})
}

const getBookData= async function (req, res) {
    let allBooks= await bookModels.find()
    res.send({BookData: allBooks})
}

module.exports.createBook= createBook
module.exports.getBook= getBookData