const express=require('express');
const router=express.Router();
const controller=require('../controllers/uniqueController')
//***************************CUSTOMER********************* */
//Create customer
router.post('/createCustomer',controller.createCustomer);
router.get('/getAllCustomer',controller.getAllCustomer);
router.delete('/deleteCustomer',controller.deleteCustomer);


//************************CARD*********************/
//Creat card
router.post('/createCard',controller.createCard);
router.get('/getAllCard',controller.getAllCard);
module.exports=router;