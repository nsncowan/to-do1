
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
function Task (taskName, taskPlace, priority, completed) {
  this.taskName = taskName;
  this.taskPlace = taskPlace;
  this.priority = priority;
  this.completed = completed;
}