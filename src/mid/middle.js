const jwt=require('jsonwebtoken');

const midd=async function(req,res,next)
{
    const token=req.headers['x-auth-token'];
    if(!token)
    {
       return  res.send("ERROR : Token not found")
    }
    req.token=token;
    next()
}


const authorised= async function(req,res,next)
{
    const a=req.params.userId;
    const token=req.token;
    const x=jwt.verify(token,'myFirstToken');
    if(x.userId != a)
    {
        return res.send("Error 1 : Not Authorised !!");
        
    }
      
    next();
}


module.exports={midd,authorised};