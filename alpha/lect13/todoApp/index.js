const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path")
const {v4 : uuidv4} = require("uuid")
let TODOS = [];
// {
//    id:
//    task:"cooking at 4pm"
//    status: true/false
//    // true -> active , false -> completed
//    createdAt: Date.now()
// }
app.use(express.static(path.join(__dirname,"public")))

app.get("/todo/all",(req,res)=>{
  try {
    res.status(200).json({todos:TODOS})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message})
  }
})

app.post("/todo/create",(req,res)=>{
  try {
    const task = req.body.task;
    const todo = {
      id:uuidv4(),
      task:task,
      status:true,
      createdAt:new Date().toLocaleDateString()
    }
    TODOS.unshift(todo);
    res.status(201).json({message:"Todo Created",todos:TODOS})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message})
  }
})

app.delete("/todo/:id/delete",(req,res)=>{
  try {
    const id = req.params.id;
    TODOS = TODOS.filter((todo)=>{
      return todo.id !== id;
    })
    res.status(202).json({message:"Todo Deleted",todos:TODOS})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message})
  }
})

app.listen(PORT,()=>{
  console.log(`server is live at http://localhost:${PORT}`);
})