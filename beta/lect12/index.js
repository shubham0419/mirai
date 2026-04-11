const express = require("express");
const app = express();
const PORT = 4000;
// inbuild middleware
app.use(express.json());
// custom middleware
app.use((req,res,next)=>{
  console.log(req.path);
  console.log(("custom middleware"));
  next();
// its works is to pass the req to next middleware
})
app.get("/", (req, res) => {
  res.send("hello from server")
});

// path specific middlewares
// this will run for the API's which starts with "/user"
app.use("/user",(req,res,next)=>{
  console.log("user middleware");
  next()
})
// this will run for the API's which starts with "/product"
app.use("/product",(req,res,next)=>{
  console.log("product middleware");
  next()
})
app.get("/user/:id/data",(req,res)=>{
  const params = req.params
  const id = params.id
  console.log("user",id);
  res.send(id)
})

app.get("/product/:id/data",(req,res)=>{
  const params = req.params
  const id = params.id
  console.log("product",id);
  res.send(id)
})

app.listen(PORT, () => console.log("Server running on port " + PORT));