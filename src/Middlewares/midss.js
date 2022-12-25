const checkHeader= function(req,res,next)
{
    let body=req.body;
    let header=req.headers;
    if(!header["isfreeappuser"])
    {
        return res.send("ERROR : Header is absent ");
    }
    body.isFreeAppUser=header["isfreeappuser"];
    next();
}
const checkHeader1= function(req,res,next)
{
    let body=req.body;
    let header=req.headers;
    if(!header["isfreeappuser"])
    {
        return res.send("ERROR : Header is absent ");
    }
    next();  
}
module.exports.checkHeader=checkHeader;
module.exports.checkHeader1=checkHeader1;