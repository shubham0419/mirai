// api calling -> fetch -> to send requests to servers.
async function getPosts(){
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
}

getPosts();

fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
  response.json().then((data)=>{
    console.log(data);
  })
})