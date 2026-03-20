const form = document.getElementById("search_post");
const postContsiner = document.getElementById("posts");

form.addEventListener("submit",(e)=>{
  e.preventDefault()      // to prevent default functionality(refresh of page)
  // e.target.children[0] -> returns input element
  // to get the value which is entered by the user in input.
  const id = e.target.children[0].value
  createPost(id)
  e.target.children[0].value = ""
})

async function createPost(id){
  let data = await getPost(id);
  let title = data.title;
  let content = data.body;
  const div = document.createElement("div")
  div.innerHTML = `<h2>${title}</h2> <p>${content}</p>`;
  postContsiner.prepend(div);
}

async function getPost(id){
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let data = await res.json();
  return data;
}

