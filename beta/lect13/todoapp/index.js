const express = require("express");
const app = express();
const PORT = 4000;
// to get absolute path of any system upto my server folder
const path = require("path")
const {v4:uuid} = require("uuid")

// absolute path of public folder
// app.use(express.static("/Users/shbha/Desktop/cb/mirai/beta/lect13/todoapp/public"))
app.use(express.static(path.join(__dirname,"public")))

const TODOS = [];
// {
// id:unique id,
// task:"cook food",
// status:  true/false,
// pending -> false , completed -> true
// createdAt: new Date()
// }

app.get("/todo/all",(req,res)=>{
  try {
    res.status(200).json({message:"todos fetched",todos:TODOS})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message})
  }
})

app.post("/todo/create",(req,res)=>{
  try {
    // const body = req.body;
    // const task = body.task;
    const task = req.body.task;
    const todo = {
      id:uuid(),
      task:task,
      status:false,
      createdAt: new Date().toLocaleTimeString()
    }
    TODOS.unshift(todo);
    res.status(201).json({message:"todo created",todos:TODOS})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message})
  }
})

app.listen(PORT,(req,res)=>{
  console.log(`server is live at http://localhost:${PORT}`);
})