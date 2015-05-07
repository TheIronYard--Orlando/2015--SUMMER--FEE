// var chai = require('chai'),
//     expect = chai.expect;

var expect = require('chai').expect;

var taskList = [ ];

// I can list my tasks...
function listTasks(){
}

// I can add a task to my list...
function addTaskToList(task, list){
    // What is the task? @param task
    // Where is the task going? @param list
    // What order / priority? lowest, on the bottom
    return list.push(task);
    // add task to list somehow on the bottom
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

// expect what?
addTaskToList("Take out the trash", taskList);
// expect what now?
