const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
//const moment =require('moment');
//const today =moment();
const { default: mongoose } = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Pal25:Pallavi2552@cluster0.hihf8kq.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
 
app.use(
    function (req,res,next)
    {
        console.log("inside Global mid")
        console.log(new Date());
        console.log(req.ip);
        console.log(req.path);
        next();
    }
)

app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
