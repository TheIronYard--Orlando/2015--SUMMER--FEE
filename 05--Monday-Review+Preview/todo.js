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
    return list.push({
        text: task, completed: false
    });
    // add task to list somehow on the bottom
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList.length).to.equal(1);
expect(taskList[0].text)
    .to.equal("Remember the milk");

expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
expect(taskList.length).to.equal(2);
expect(taskList[1].text)
    .to.equal("Take out the trash");

// expect(taskList[1]).to.not.be.completed?
