// Variables
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedCount = document.getElementById('completedCount');
const incompleteCount = document.getElementById('incompleteCount');

let tasks = [];

// Función para actualizar los contadores
function updateTaskCount() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const incompleteTasks = tasks.length - completedTasks;
    completedCount.textContent = completedTasks;
    incompleteCount.textContent = incompleteTasks;
}

// Función para renderizar las tareas
function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = `<p>No tienes tareas por hacer. ¡Agrega una!</p>`;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        li.innerHTML = `
            <span>${task.name}</span>
            <div>
                <button onclick="toggleTaskCompletion(${index})">Marcar como ${task.completed ? 'incompleta' : 'completa'}</button>
                <button onclick="deleteTask(${index})">Eliminar</button>
            </div>
        `;
        
        taskList.appendChild(li);
    });

    updateTaskCount();
}

// Función para agregar una nueva tarea
function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName) {
        const newTask = {
            name: taskName,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    } else {
        alert("¡Oops! Por favor, escribe una tarea antes de agregarla.");
    }
}

// Función para actualizar el estado de completada de una tarea
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Función para eliminar una tarea
function deleteTask(index) {
    if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Agregar tarea al hacer clic en el botón
addTaskButton.addEventListener('click', addTask);

// Permitir agregar tarea presionando Enter
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
