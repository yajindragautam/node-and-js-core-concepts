const fs  = require('fs');

// Create file SYNC
fs.writeFileSync("yaji.txt","Hi Yajindra.");
// fs.writeFileSync("yaji.txt","I am a Software Developer");
// append file
fs.appendFileSync("yaji.txt"," I am a Software Developer");
// read file
let data = fs.readFileSync("yaji.txt",'utf-8');
console.log(data);
// rename file
fs.renameSync("yaji.txt","read.txt")
//delete file
fs.unlinkSync("read.txt")