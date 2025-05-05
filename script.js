const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
        updateEmptyListMessage();
    } else {
        alert('Por favor, introduce una tarea.');
    }
}

function toggleComplete() {
    this.nextElementSibling.classList.toggle('completed');
}

function deleteTask() {
    this.parentNode.remove();
    updateEmptyListMessage();
}

function updateEmptyListMessage() {
    if (taskList.children.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.classList.add('empty-list');
        emptyMessage.textContent = 'No hay tareas pendientes.';
        taskList.appendChild(emptyMessage);
    } else if (taskList.querySelector('.empty-list')) {
        taskList.querySelector('.empty-list').remove();
    }
}

// Inicializar el mensaje de lista vacía al cargar la página
updateEmptyListMessage();