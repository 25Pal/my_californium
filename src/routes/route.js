const express=require('express');
const router=express.Router();
const middle=require('../middlewaress/middle')
const controller=require('../controllers/uniqueController')
//***************************CUSTOMER********************* */
//Create customer
router.post('/createCustomer',middle.phone,controller.createCustomer);
router.get('/getAllCustomer',controller.getAllCustomer);
router.delete('/deleteCustomer',controller.deleteCustomer);


//************************CARD*********************/
//Creat card
router.post('/createCard',middle.cardid,controller.createCard);
router.get('/getAllCard',controller.getAllCard);

module.exports=router;