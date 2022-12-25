const express=require('express');
const router=express.Router();
const controller=require('../Contoller/controller')
const middle=require('../Middlewares/midss')

router.post('/createUser',middle.checkHeader,controller.createUser);
router.post('/createProduct',middle.checkHeader,controller.createProduct);
router.post('/createOrder',middle.checkHeader1,controller.createOrder);
router.get('/getAllOrders',controller.getAllOrders);









module.exports=router;