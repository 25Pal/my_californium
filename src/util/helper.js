// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
const printDate=function()
{
   const date= console.log(new Date());
}

//************************** */

module.exports.printDate1=printDate;
const monthsarr=['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
const printMonth=function()
{
    const date1=new Date();
    const month=monthsarr[date1.getMonth()];
    console.log(month);
}
module.exports.monthsarr1=monthsarr;
//module.exports.month1=month;
module.exports.printMonth1=printMonth;


//********************** */
const getBatchInfo=function(batchname , week ,day )
{
    console.log(batchname+", "+week+", the topic for "+day+" is Nodejs module system");
}
const batchname="Californium";
const week="W2D5";
const day="today"
module.exports.getBatchInfo1=getBatchInfo;
module.exports.batchname1=batchname;
module.exports.week1=week;
module.exports.day1=day;