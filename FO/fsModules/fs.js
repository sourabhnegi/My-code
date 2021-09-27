let fs=require('fs');
let path=require('path');

// let content = fs.readFileSync('f1.txt');
// console.log(content);
// console.log(content + "");
// fs.writeFileSync('f1.txt',"i am sourabh");
//fs.appendFileSync('f1.txt',"\r\ni am 20");
// let content2 = fs.readFileSync('f1.txt');
// console.log(content2+"");
// fs.unlinkSync('f2.txt')

//directories
// fs.mkdirSync('f2.txt');
// fs.rmdirSync('f2.txt')

//file exists

// let file=fs.existsSync('f1.txt');
// console.log(file);

// let statusObj = fs.lstatSync('f1.txt'); 
// console.log(statusObj);
// console.log(statusObj.isFile());
// console.log(statusObj.isDirectory());

// let FileArr = fs.readdirSync('E:\\PP14\\WEB-DEV\\FO\\dir');
// console.log(FileArr);

// let srcPath='./f1.txt';
// let destPath='./f2.txt';
// let toBeCopiedFileName = path.basename(srcPath);
// let dest = path.join('E:\\PP14\\WEB-DEV\\FO\\dir',toBeCopiedFileName);
// fs.copyFileSync(srcPath,dest); //copy srcPath file data on dest file and if there no file name as dest file then fs.copyFileSync() create a file of name dest file and copy data of srcPath file in that new file.

fs.unlinkSync('E:\\PP14\\WEB-DEV\\FO\\dir\\f1.txt'); //delete file from another directories