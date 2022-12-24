const phone=function(req,res,next)
{
    let body =req.body;
    let a=body.mobileNo;
    if(a==null || a== undefined)
    {
        return res.send("ERROR : Number is Required !");
    }
    if(body.mobileNo.length ==10 && body.mobileNo == parseInt(body.mobileNo))
    {
        next();
    }
    else{
        res.send("ERROR :Enter valid Number");
    }
};

const cardid=function(req,res,next)
{
    let body = req.body;
    if(body.cardNumber ==null|| body.cardNumber==undefined)
    {
        res.send("ERROR : Card Number ids required !");
    }
    next();
}

module.exports={phone,cardid}