const express = require('express');
const router = express.Router();
router.get("/sol1",function(req,res){
    const arr1=[1,2,3,4,6,7];
    let sum =arr1.length+1;//7
    let s=sum*(sum+1)/2;//7*(8)/2== 28
    let a=0;
    for(let i=0;i<arr1.length;i++)
    {
        a+=arr1[i];
    }console.log(s-a);
});
router.get("/sol2",function(req,res){
    const arr=[33,34,35,37,38];
    let sum =(arr.length+1)*(arr[0]+arr[arr.length-1])//logic7*(33)+
    let s=sum/2;
    let a=0;
    for(let i=0;i<arr.length;i++)
    {
        a+=arr[i]
    }console.log(s-a);
})
router.get("/movies",function(req,res){
    const move=["Baghban","Interstealler","Vivah","Border"];
    res.send("Movies ="+move)
})



router.get("/movies/:indexNumber",function(req,res){
    const index = req.params.indexNumber;
    const m=["Baghban","Interstealler","Vivah","Border"];
    //res.send(m[index]);
    if (index> m.length-1 || index<0 )
    {
        res.send("Not defined");
    }
    else
    {
        res.send(m[index]);
    }
});
router.get('/films/:filmId',function(res,req){
const index=res.params.filmId;
    const films = [ {
        'id': 1,
        'name': 'The shining'   
    }, {
        'id': 2,
        'name': 'Incendies' 
    }, {
        'id': 3,
        'name': 'Rang de basanti' 
    }, {
        'id': 202,
        'name': 'Finding Nemo' 
    }];
    //req.send(films);
    
             if(index > 0 && index <=films.length)
             {
                req.send(films[index-1]);
             }
             else{
                req.send("Undefind");
             }
    
})


module.exports = router;