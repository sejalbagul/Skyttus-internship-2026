// Get DOM elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const errorMsg = document.getElementById("error-msg");

function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}


// Handle form submit
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === "") {
    errorMsg.textContent = "Task cannot be empty!";
    return;
  }

  errorMsg.textContent = "";

  const todos = getTodos();

  const newTodo = {
    text: taskText,
    completed: false
  };

  todos.push(newTodo);
  saveTodos(todos);
  renderTodo(newTodo);

  todoInput.value = "";
});



// Handle delete, complete, and edit using event delegation
todoList.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (!li) return;

  const todos = getTodos();
  const index = Array.from(todoList.children).indexOf(li);

  // DELETE
  if (e.target.classList.contains("delete-btn")) {
    todos.splice(index, 1);
    saveTodos(todos);
    li.remove();
  }

  // COMPLETE
  if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("completed");
    todos[index].completed = !todos[index].completed;
    saveTodos(todos);
  }

  // EDIT / SAVE
  if (e.target.classList.contains("edit-btn")) {
    const span = li.querySelector("span");

    if (e.target.textContent === "Save") {
      const input = li.querySelector("input");
      const newText = input.value.trim();
      if (newText === "") return;

      span.textContent = newText;
      span.style.display = "inline";
      input.remove();

      todos[index].text = newText;
      saveTodos(todos);

      e.target.textContent = "Edit";
    } else {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;

      span.style.display = "none";
      li.insertBefore(input, span);
      input.focus();

      e.target.textContent = "Save";
    }
  }
});


function renderTodo(todo) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="${todo.completed ? "completed" : ""}">
      ${todo.text}
    </span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  todoList.appendChild(li);
}

document.addEventListener("DOMContentLoaded", function () {
  const todos = getTodos();
  todos.forEach(renderTodo);
});

