const express = require('express');
const router = express.Router();
// const movies=require('../movie/movies');
// const logger =require('../logger/logger');
// const helper=require('../util/helper');
const formatter=require('../validator/formatter')
const lodash =require('lodash')
router.get('/test-me', function (req, res) {
   //  helper.printDate1();
   //  helper.printMonth1();
   //  helper.getBatchInfo1(helper.batchname1,helper.week1,helper.day1);
   //  logger.welcome1("pallavi");
   //  res.send("assignment1");
   //  res.send("assignment2");

   //PROBLEM 3
   // formatter.trim1(formatter.str1);
   // console.log("Problem 3rd Run sucesfully");
   // res.send("Problem 3rd Run sucesfully "+formatter.trim1(formatter.str1));

   //PROBLEM 3.1 toLowerCase
   // console.log("changed to LowerCase")
   // res.send("Problem 3rd Run sucesfully..Chaged to LowerCase :- "+formatter.string1.toLowerCase());
   
   //PROBLEM 3.2 toUpperCase
   // console.log("changed to UpperrCase")
   // res.send("Problem 3rd Run sucesfully..Chaged to UpperCase = "+formatter.string1.toUpperCase());


   //PROBLEM 4
   const arr =['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   //console.log(lodash.chunk(arr,3))
   
   // const arr1=[1,3,5,7,9,11,13,15,17,19];
   // const arr2=[2,3,45,6,3,2,1,14,5,6,2,5];
   // const arr3=[1,2,4,5]
   // const arr4=[1,2,4,3,5]
   // const arr5=[1,2,4,5,0]
   const arr6=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
   //console.log(lodash.tail(arr1))
   //console.log(lodash.union(arr1,arr2,arr3,arr4,arr5));
   console.log(lodash.fromPairs(arr6));
   res.send("The subarray is = ");

   });
   router.get('/test-you', function (req, res) {
    //console.log(movies.move1(movies.moviearr1));
    console.log(movies.move1(movies.moviearr1))
    res.send("Movies are : ");
   });
module.exports = router;