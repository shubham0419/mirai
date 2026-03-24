const fs = require("fs");

// fs.writeFile("beta/lect7/nodejsbasics/index.js")      //relative path -> current directory path
// fs.writeFile("/Users/shbha/Desktop/cb/mirai/beta/lect7/nodejsbasics/index.js")
// path(absolute path)
console.log("start");
// to write in file -> this overwites the data
fs.writeFile("beta/lect7/nodejsbasics/first.txt","hello this is line 1","utf-8",(err)=>{
  console.log(err);
})
fs.writeFileSync("beta/lect7/nodejsbasics/first.txt","hello this is line 1","utf-8")

fs.readFile("beta/lect7/nodejsbasics/first.txt","utf-8",(err,data)=>{
  console.log(data);
})

const data = fs.readFileSync("beta/lect7/nodejsbasics/first.txt","utf-8")
console.log(data);
// to write in file -> this adds the data at last position
fs.appendFile("beta/lect7/nodejsbasics/first.txt","\nhello this is line 2","utf-8",(err)=>{
  console.log(err);
})

console.log("end");