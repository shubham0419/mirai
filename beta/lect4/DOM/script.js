
const ele = document.querySelector(".cl1");    // it will give first matching element
const eles = document.querySelectorAll(".cl1");  // it will return a list of matching elements

console.log(ele);
console.log(eles);

// getters 
console.log(ele.innerText); // it will only return text
console.log(ele.innerHTML); // it will return text, tag along with its structure
console.log(ele.textContent); //it will return text along with its structure

console.log(ele.id);
console.log(ele.className);
console.log(ele.getAttribute("name"));

console.log(ele.classList);

ele.classList.remove("cl2")
console.log(ele.classList);

ele.classList.add("cl5")
console.log(ele.classList);

ele.classList.toggle("cl2");
console.log(ele.classList);

ele.classList.toggle("cl5");
console.log(ele.classList);
