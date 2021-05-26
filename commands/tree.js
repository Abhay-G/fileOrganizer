const fs = require('fs');
let path = require('path');
function treefn(dirPath) {
    if (dirPath == undefined) {
        treeHelper(process.cwd(), '');
        return;
    } else {
        let exist = fs.existsSync(dirPath);
        if (exist) {
            treeHelper(dirPath, '');
        } else {
            console.log('Kindly enter a correct path');
            return;
        }
    }
}
function treeHelper(dirPath, indent) {
    //is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        let fileName = path.basename(dirPath);
        console.log(indent + '|-----' + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + '|___' + dirName);
        let children = fs.readdirSync(dirPath);
        children.forEach((child) => {
            let childPath = path.join(dirPath, child);
            treeHelper(childPath, indent + '\t');
        });
    }
}
module.exports = treefn;
