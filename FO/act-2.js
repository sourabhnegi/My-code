let fs = require('fs');
let path = require('path');

let inputArr=process.argv.slice(2);
let mainDir = inputArr[0];
let subDir = inputArr.slice(1); 

// console.log(mainDir);
// console.log(subDir);

let mainDirPath=path.join(process.cwd(),mainDir);
if(!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);
}
for(let i=0;i<subDir.length;i++){
    // console.log(subDir[i]);
    let folderPath = path.join(mainDirPath,subDir[i]);
    console.log('folderPath', folderPath);
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
    for(let j=1;j<=3;j++){
        let modulePath=path.join(folderPath,`Module${j}`);// we can use `Module${j}` or "Module"+j Both work same.
        console.log('Module name', modulePath);
        if(!fs.existsSync(modulePath)){
            fs.mkdirSync(modulePath);
        }
        if(!fs.existsSync(fileName)){
            let fileName = path.join(modulePath,'content.md');
            fs.writeFileSync(fileName,'#Hello Everyone Its me Sourabh')
        }
    }
}