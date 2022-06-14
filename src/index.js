document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //FORM
  const newTask = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //new tasks list
  const newTaskList = document.getElementById("tasks");

  //event listener
  newTaskList.addEventListener("submit", createNewTask);
});

//new task
const createNewTask = e => {
  e.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.getElementById("li");
  newTask.innerHTML = newTaskDescription.nodeValue;

  appendNewTask(newTask);
  e.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
