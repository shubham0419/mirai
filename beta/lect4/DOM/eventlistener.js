const btn = document.getElementById("btn")

btn.addEventListener("click",(e)=>{
  console.log(e.target);
})

// const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
body.style.height = "100vh"
body.addEventListener("dblclick",(e)=>{
  console.log(e.clientX,e.clientY);
  const circle = createCircle();
  console.log(circle);
  circle.style.position = "absolute";
  circle.style.left = e.clientX;
  circle.style.top = e.clientY;
  body.appendChild(circle);
})

// create a function -> createCircle
function createCircle(){
  // formula -> (Math.random()*[max-min]+min)
  const radius = ((Math.random()*300)+ 50);
  const div = document.createElement("div");
  div.style.height = radius*2;
  div.style.width = radius*2;
  div.classList.add("circle");
  return div;
}
