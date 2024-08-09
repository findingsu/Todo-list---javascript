// Initialize variables
const tasksToComplete = document.getElementById("tasks-todo");
const taskInput = document.getElementById("task-input");
const completedTasks = document.getElementById("checked-tasks");

// Adds tasks to list
const addTask = () => {
  let newTask = taskInput.value;
  let task = `
      <li class="task-item" id="task-item">
      <input type="checkbox" id="checkbox" class="checkbox" onclick="checkTask(this)"/>
      <span id="task">${newTask}</span>
      <button id="removeBtn" onclick="removeTask(this)">x</button>
      </li>
      `;
  if (newTask !== "") {
    tasksToComplete.insertAdjacentHTML("beforeend", task);
  }
  taskInput.value = "";
};

// Check tasks & move to bottom while maintaining checked state
const checkTask = (checkbox) => {
  const taskItem = checkbox.parentElement;
  const taskText = checkbox.nextElementSibling;

  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "red";
  } else {
    taskText.style.textDecoration = "none";
    taskText.style.color = "black";
  }

  tasksToComplete.removeChild(taskItem);
  completedTasks.insertAdjacentHTML("afterbegin", taskItem.outerHTML);

  const allCheckboxes = completedTasks.querySelectorAll(".checkbox");
  allCheckboxes.forEach((box) => {
    box.checked = "checked";
  });
};

// Remove tasks from list
const removeTask = (removeBtn) => {
  const taskItem = removeBtn.parentElement;
  return taskItem.remove();
};
