const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  // const input = form.children[0];
  // const task = input.value;
  const task = form.children[0].value;
  createTodo(task)
})

const createTodo = async (task)=>{
  let res = await axios.post("http://localhost:4000/todo/create");
  console.log(res.data);
}