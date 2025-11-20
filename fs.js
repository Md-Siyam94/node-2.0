const fs = require("node:fs");

console.log('task 1');

const text = 'learning node js'

fs.writeFileSync('./hello.txt', text)

console.log("task 3");
const data = fs.readFileSync("./hello.txt",{encoding: "utf-8"})
console.log('task 4');

console.log(data);
// console.log('hello world');