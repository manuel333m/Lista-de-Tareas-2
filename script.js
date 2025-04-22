const taskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="toggleTask(this)">Completar</button>
            <button onclick="deleteTask(this)">Eliminar</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function toggleTask(button) {
    const listItem = button.parentNode;
    listItem.querySelector('span').classList.toggle('completed');
    button.textContent = listItem.querySelector('span').classList.contains('completed') ? 'Pendiente' : 'Completar';
}

function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}

// Para permitir añadir tareas con la tecla Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});