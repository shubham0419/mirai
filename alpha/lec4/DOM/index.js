console.log(document);

// selectors
const ele = document.querySelector(".cl1");
console.log(ele);       // span

const eles = document.querySelectorAll(".cl1");
console.log(eles);      //nodelist

// value getter
console.log(ele.innerHTML); 
console.log(ele.innerText); 
console.log(ele.textContent); 

console.log(ele.id);
console.log(ele.className);
console.log(ele.classList);       
console.log(ele.getAttribute("name"));

ele.classList.remove("cl2");
console.log(ele.className);

ele.classList.add("cl5");
console.log(ele.className);

ele.classList.toggle("cl2");
console.log(ele.className);
//
console.log(ele.parentElement.parentElement);
console.log(ele.previousElementSibling);
console.log(ele.nextElementSibling);
