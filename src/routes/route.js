const express = require('express');
const router = express.Router();
const controller=require('../controllers/bookANDauthorcontroller')
//All api's
router.post('/addAuthorData',controller.addAuthorData)
router.post('/addBookData',controller.addBookData);
router.post('/findauthor',controller.listAuthor)
router.post('/findbookName',controller.bookName)
router.post('/searchcostFilter',controller.costFilter)
module.exports = router;