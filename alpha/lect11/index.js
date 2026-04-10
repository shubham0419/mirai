const express = require("express")    //import express from node_modules
const app = express()
const PORT=4000;

// query params
app.get("/search",(req,res)=>{
  const query = req.query;
  console.log(query);
  res.send("query received",query)
})

// start server , port -> mapping of process in system
app.listen(PORT,()=>{
  console.log("server is started at" ,`http://localhost:${PORT}`);
})