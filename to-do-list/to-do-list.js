const todoList = [];

function displayItem() {
  todoList.push(document.querySelector(".text-box").value);
  console.log(todoList);
  document.querySelector(".todo-items-display").innerHTML = todoList;
}
