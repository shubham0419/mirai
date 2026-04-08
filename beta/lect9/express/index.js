const express = require("express")    //importing external package
const app = express();
const PORT = 4000;

app.get("/",(req,res)=>{
  res.send("hello my server is live, method = get")
})

app.post("/",(req,res)=>{
  res.send("hello my server is live, method = post")
})

// start server
app.listen(PORT,()=>{
  console.log(`server is live at http://localhost:${PORT}`);
})