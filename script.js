const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list');
const day = document.querySelector('.day');
const dayN = document.querySelector('.date-n');
const dayName = document.querySelector('.day-name');


addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button>Delete</button>
    `;

    taskList.appendChild(taskItem);

    const deleteButton = taskItem.querySelector('button');
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskInput.value = "";
  }
});

// Date and time 
const now = new Date();

const day1 = now.toLocaleString("default", {"weekday": 'long'});
const dayN1 = now.getDate()
const monthName = now.toLocaleString("default",{'month':'long'});

day.textContent = day1
dayN.textContent = dayN1
dayName.textContent = monthName;


