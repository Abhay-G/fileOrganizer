const utility = require('../utility');
const fs = require('fs');
let path = require('path');
let types = utility.types;
function organizefn(dirPath) {
    //1. input-> directory path given
    let desPath;
    if (dirPath == undefined) {
        dirPath = process.cwd();
    }
    let exist = fs.existsSync(dirPath);
    if (exist) {
        //2. create -> organized_files-> directory
        desPath = path.join(dirPath, 'organized_files');
        if (fs.existsSync(desPath) === false) {
            fs.mkdirSync(desPath);
        }
    } else {
        console.log('Kindly enter a correct path');
        return;
    }
    organizeHelper(dirPath, desPath);
}
function organizeHelper(src, des) {
    //3. identify categories of all the files present in that input directory
    let childNames = fs.readdirSync(src);
    childNames.forEach((child) => {
        let childAddress = path.join(src, child);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            let category = getCategory(child);
            console.log(child + '--->' + category);
            //4. copy/cut files to organized_files directory
            sendFiles(childAddress, des, category);
        }
    });
}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let currTypeArr = types[type];
        if (currTypeArr.includes(ext)) {
            return type;
        }
    }
    return 'others';
}
function sendFiles(src, des, category) {
    let categoryPath = path.join(des, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(src);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(src, destFilePath);
    fs.unlinkSync(src);
    console.log(fileName, 'transfered to', category);
}
module.exports = organizefn;
