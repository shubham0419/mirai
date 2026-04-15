const express = require("express");
const app = express();
const PORT = 4000;
// to get absolute path of any system upto my server folder
const path = require("path")

// absolute path of public folder
// app.use(express.static("/Users/shbha/Desktop/cb/mirai/beta/lect13/todoapp/public"))
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
  res.send("server is live")
})

app.listen(PORT,(req,res)=>{
  console.log(`server is live at http://localhost:${PORT}`);
})