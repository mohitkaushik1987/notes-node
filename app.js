console.log('starting app.js...');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// var res = notes.addNote();
// console.log(res);

// console.log('Result:', notes.add(9,-2));

console.log(_.isString(true));
console.log(_.isString('true'));

var filteredArray = _.uniq(['Mohit','Hello','Mohit',1,3,5,1,2,4,5]);
console.log('filteredArray:', filteredArray);

// var user = os.userInfo();

// fs.writeFileSync('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`);
//console.log(user);
