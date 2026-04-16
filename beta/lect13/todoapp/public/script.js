const form = document.getElementsByTagName("form")[0];


const getAllTodos = async ()=>{
  const res = await axios.get("http://localhost:4000/todo/all");
  renderTodos(res.data.todos)
}

getAllTodos()

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  // const input = form.children[0];
  // const task = input.value;
  const task = form.children[0].value;
  createTodo(task)
  form.children[0].value = ""
})

const createTodo = async (task)=>{
  let res = await axios.post("http://localhost:4000/todo/create",{task:task});
  console.log(res.data);
  renderTodos(res.data.todos)
}

const todoContainer = document.getElementById("todo-container");

const renderTodos = (todos)=>{
  todoContainer.innerHTML = "";
  todos.forEach(todo => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${todo.task}</h3>
    <div id=${todo.id}>
      <button onClick='updateTodo("${todo.id}")'>${todo.status?"Undo":"Complete"}</button>
      <button onClick='deleteTodo("${todo.id}")'>Delete</button>
    </div>`
    todoContainer.append(div);
  });
}


async function updateTodo(id){
  const res = await axios.put(`http://localhost:4000/todo/${id}/update`);
  renderTodos(res.data.todos)
}

async function deleteTodo(id){
  const res = await axios.delete(`http://localhost:4000/todo/${id}/delete`);
  renderTodos(res.data.todos)
}