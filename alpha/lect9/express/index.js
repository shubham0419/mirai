const express = require("express")    //import express from node_modules
const app = express()
const PORT=4000;

app.get("/",(req,res)=>{
  console.log(req);
  console.log("hello");
  res.send("hello , the server is live and method is get")
})

app.post("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is post")
})

app.put("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is put")
})

app.patch("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is patch")
})

app.delete("/",(req,res)=>{
  console.log(req);
  res.send("hello , the server is live and method is delete")
})


app.listen(PORT,()=>{
  console.log("server is started at" ,`http://localhost:${PORT}`);
})