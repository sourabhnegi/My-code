let fs=require('fs');
let path=require('path');

function treeFn(srcPath){
    let baseName=path.basename(srcPath);
    console.log(baseName);
    console.log("|--");
    let content = fs.readdirSync(srcPath);
    let allEntities="";
    for(let i=0;i<content.length;i++){
        allEntities +='\n\t'+ "|--" + content[i];
        // console.log(content[i]);
    }
    console.log(allEntities);
}

module.exports={
    treefun:treeFn
};