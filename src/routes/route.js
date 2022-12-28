const express=require('express');
const router= express.Router();
const userContoller=require('../controllers/userController');
const middleware=require('../mid/middle');


router.post('/userCreate',userContoller.userCreate);
router.post('/loginuser',userContoller.loginuser);
router.get('/users/:userId',middleware.midd,middleware.authorised,userContoller.getUser);
router.put('/updateUser/:userId',middleware.midd,middleware.authorised,userContoller.updateUser);
router.delete('/deleteUser/:userId',middleware.midd,middleware.authorised,userContoller.deleteUser);
module.exports=router;