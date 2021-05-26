#!/usr/bin/env node
let helpfn = require('./commands/help');
let organizefn = require('./commands/organize');
let treefn = require('./commands/tree');
let InputArr = process.argv.slice(2);

function cmdfn() {
    const cmd = InputArr[0];
    switch (cmd) {
        case 'tree':
            treefn(InputArr[1]);
            break;
        case 'organize':
            organizefn(InputArr[1]);
            break;
        case 'help':
            helpfn();
            break;
        default:
            console.log('Please enter a valid command');
            break;
    }
}
module.exports = cmdfn();
