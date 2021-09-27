let fs=require('fs');
let path=require('path');

let inputArr = process.argv.slice(2);
let inputDir=inputArr[0];
let AllEntities = fs.readdirSync(inputDir);
let content=""
for(let i=0;i<AllEntities.length;i++){
    let entityName = AllEntities[i];
    let ename = path.join(inputDir,entityName);
    let status = fs.lstatSync(ename);
    let isFile=status.isFile();
    if(isFile){
        let extname=path.extname(ename);
        if(extname=='.txt'){
            content+=fs.readFileSync(ename);
        }
    }
}
let summaryFile="E:\\PP14\\WEB-DEV\\FO\\summary.txt";
fs.writeFileSync(summaryFile,content);