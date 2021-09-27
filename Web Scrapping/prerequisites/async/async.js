let fs=require('fs');
fs.readFile('f1.txt',cb);
function cb(err,content){
    if(err){
        console.log(err);
    }
    else{
        console.log(content+"");
    }
}

console.log("after")