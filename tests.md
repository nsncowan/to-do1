task to do;
1 - sleep
2 - eat
3 - poop
4 - smile

describe: 

test:Should be able to put this in a order
code: let nuTask = new taskToDo("sleep", "eat", "poop", "smile")
expected output: 

test: should assign an id to each task, incrementing by 1
code: function () {
  this.currentId +=1;
  return this.currentId;
}
expected output: taskId[id]+1

test: should be able to identify each task as "done" or "not done"
code: function(id)
if (this.taskDone[id] !== undefined) {
  return this.taskDone[id];
  }
  return false;
}
expected output: taskDone = a number

test: should be able to remove task from list
code: function (id)
if (this.taskGone[id] === undefined) {
  return false;
  }
  deletet this.taskGone[id];
  return true;
};
expected output: taskGone(); NaN/0

test:
code: 
expected output:

test:
code: 
expected output:

test:
code: 
expected output:

test:
code: 
expected output:

test:
code: 
expected output:

