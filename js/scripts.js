
function TaskList() {
  this.tasks = {};
  this.currentId = 0
}

TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

TaskList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
}


// Task Logic
function TaskOn (taskName, taskPlace, priority, completed) {
  this.taskName = taskName;
  this.taskPlace = taskPlace;
  this.priority = priority;
  this.completed = completed;
}

// UI //
let taskList = new TaskList();

function formSubmission(event) {
  event.preventDefault();
  const inputName = document.querySelector("input#newTaskName").value;
  const inputPlace = document.querySelector("input#newTaskPlace").value;
  const priority = document.querySelector("input#newTaskPriority").value;
  const done = document.querySelector("input#newTaskCompleted").value;
  let newArr = new TaskOn(inputName, inputPlace, priority, done);
  taskList.addTask(newArr);
  TaskOn(taskList);
  console.log(taskList.tasks);

};

window.addEventListener("load", function() {
  document.querySelector("form#newTask").addEventListener("submit", formSubmission);
})