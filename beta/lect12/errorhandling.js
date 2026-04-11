const express = require("express");
const app = express();
const PORT = 4000;

app.get("/info",(req,res)=>{
  try {
    let num = Math.random()*10;
    if(num<5){
      // error generate
      throw new Error("the number is less than 5 so i generated this error")
    }
    res.status(200).json({message:"work done",data:{val:num}})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message})
  }
})

app.listen(PORT, () => console.log("Server running on port " + PORT));