// api calling -> fetch -> to send requests to servers.

fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
  // console.log(res);
  res.json().then((data)=>{
    console.log(data);
  })
}).catch((err)=>{
  console.log(err);
})

async function getPost() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json()
  console.log(data);
}


// async function getPosts(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// }

// getPosts();

// fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
//   response.json().then((data)=>{
//     console.log(data);
//   })
// })