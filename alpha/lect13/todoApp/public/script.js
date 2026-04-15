

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const task = form.children[0].value;
  createTodo(task)
})

const createTodo = async (task)=>{
  const res = await axios.post("http://localhost:4000/todo/create",{task:task})
  const data = res.data;
  renderTodos(data.todos);
}
const container = document.getElementById("todo-container")
const renderTodos = (todos)=>{
  todos.forEach(todo => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${todo.task}</h3>
    <div id=${todo.id}>
      <button>Complete</button>
      <button>Delete</button>
    </div>`
    console.log(div);
    container.append(div);
  });
  
}