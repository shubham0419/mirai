const btn = document.getElementById("btn")

btn.addEventListener("click",(e)=>{
  console.log(e.target);
})

// const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
body.style.height = "100vh"
body.addEventListener("dblclick",(e)=>{
  console.log(e.clientX,e.clientY);
  const obj = createCircle();
  obj.circle.style.position = "absolute";
  obj.circle.style.left = `${e.clientX-obj.radius}px`;
  obj.circle.style.top = `${e.clientY-obj.radius}px`;
  body.appendChild(obj.circle);
})

// create a function -> createCircle
function createCircle(){
  // formula -> (Math.random()*[max-min]+min)
  const radius = (Math.round(Math.random()*100)+ 50);
  const div = document.createElement("div");
  console.log(radius);
  div.style.height = `${radius*2}px`;
  div.style.width = `${radius*2}px`;
  div.classList.add("circle");
  return {circle:div,radius};
}
