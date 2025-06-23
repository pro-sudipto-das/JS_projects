function addTask() {
  const taskInput = document.getElementById('task_input');
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById('taskList');
  if (taskText === '') {
    alert('Write Something!');
    return;
  }

  const li = document.createElement('li');
  taskList.appendChild(li);

  li.innerHTML = `${taskText}<button onclick="deleteTask(this)">Delete</button><button onclick="doneTask(this)">Done</button>`;
    taskInput.value = '';
    updateCount();
}
function updateCount() {
  const taskCounter = document.getElementById('taskCounter');
  const allTask = document.querySelectorAll('#taskList li');
  taskCounter.innerText = allTask.length;
}

function deleteTask(btn) {
  btn.parentElement.remove();
  updateCount();
}
function doneTask(btn) {
    btn.parentElement.classList.toggle('done');
  updateCount();
}

