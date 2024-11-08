const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const tasklist = document.getElementById('tasklist');

function addTask() {

    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);

        taskInput.value = '';

    } else {
        alert('please enter a task!')
    }

}

addButton.addEventListener('click', addTask);

function createTaskElement(task){

    const listItem = document.createElement('li');

    listItem.textContent = task;

    tasklist.appendChild(listItem);

}
