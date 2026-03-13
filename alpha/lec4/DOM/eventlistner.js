

const h1 = document.getElementById("heading");

// h1.addEventListener("mouseover",(e)=>{
//   console.log(e);
//   console.log(e.target);
// })


// h1.addEventListener("click",(e)=>{
//   console.log(e);
//   console.log(e.target);
// })

const html = document.getElementsByTagName("html")
const body = document.getElementsByTagName("body")[0];
body.style.height = "100vh"
body.addEventListener("dblclick",(e)=>{
  console.log(e.clientX,e.clientY);
})

