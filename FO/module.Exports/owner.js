let str='Hakuna mtata';
let a = 20;
function foo(msg){
   return "hi i made in owner.js"+ " " + msg;
}

console.log("hello this console is from owner.js");
console.log(" this owner.js log run because u require this file u run currently ");
console.log("due to require it compile first and print all log data it get");

//console.log(module); //property of this module file

// module.exports = str; //it module.exports str in other files
//or
//module.exports={str,a,foo};// exporing as object
//or
module.exports={
    var: a,
    String:str,
    funfoo:foo,
};