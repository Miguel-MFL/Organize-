const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  
  todoLane.appendChild(newTask);

  // Attach drag listeners for delete functionality
  if (typeof window.attachDragListeners === "function") {
    window.attachDragListeners(newTask);
  }

  input.value = "";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  todoLane.appendChild(newTask);

  // Sempre aplica os listeners atualizados
  attachDragListeners(newTask);

  input.value = "";
});
