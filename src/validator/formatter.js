// - trim() - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

const trim=function (str)
{
       return str.trim();
}
const str="   functionUp     "
//making public
module.exports.str1=str;
module.exports.trim1=trim;
//to lowercase
const string="PallaviUtekar"
module.exports.string1=string;