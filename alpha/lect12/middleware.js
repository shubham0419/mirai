const express = require("express")    //import express from node_modules
const app = express()
const PORT=4000;
// inbuild middleware
app.use(express.json())

// custom middleware -> it will run for every request
app.use((req,res,next)=>{
  console.log("custom middleware");
  next()
  // it will pass the "req" to next middleware.
})

// path specific middleware
// it will only run if the req path starts with "/user"
app.use("/user",(req,res,next)=>{
  console.log("user middleware");
  next();
})

app.use("/product",(req,res,next)=>{
  console.log("product middleware");
  next();
})

app.get("/user/all",(req,res)=>{
  res.json({users:["user 1","user 2"]})
})

app.get("/product/all",(req,res)=>{
  res.json({users:["product 1","product 2"]})
})

app.listen(PORT,()=>{
  console.log("server is started at" ,`http://localhost:${PORT}`);
})