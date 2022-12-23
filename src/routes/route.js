const express = require('express');
const router = express.Router();
const controller=require('../controllers/publisherContoller');
//all API'S
router.post('/createAuthor',controller.Createauthor)
router.post('/createPublisher',controller.createpublisher)
 router.post('/createBook',controller.createBook)
 router.put('/extradata',controller.extradata)
 router.put('/priceUpdate',controller.priceUpdate);
 router.get('/AllLinked-data',controller.Linkeddata);

module.exports = router;

