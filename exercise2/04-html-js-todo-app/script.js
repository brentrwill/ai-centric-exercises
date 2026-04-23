const form = document.querySelector('#taskForm');
const input = document.querySelector('#taskInput');
const list = document.querySelector('#taskList');
const summary = document.querySelector('#summary');
const filterButtons = document.querySelectorAll('[data-filter]');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';
function saveTasks(){ localStorage.setItem('tasks', JSON.stringify(tasks)); }
function visibleTasks(){ if(currentFilter === 'active') return tasks.filter(t => !t.completed); if(currentFilter === 'completed') return tasks.filter(t => t.completed); return tasks; }
function render(){ list.innerHTML = ''; const completed = tasks.filter(t => t.completed).length; summary.textContent = `${completed} of ${tasks.length} tasks complete`; visibleTasks().forEach(task => { const li = document.createElement('li'); li.className = task.completed ? 'completed' : ''; li.innerHTML = `<span>${task.text}</span><div class="task-actions"><button class="complete">${task.completed ? 'Undo' : 'Done'}</button><button class="danger">Delete</button></div>`; li.querySelector('.complete').addEventListener('click', () => toggleTask(task.id)); li.querySelector('.danger').addEventListener('click', () => deleteTask(task.id)); list.appendChild(li); }); }
function addTask(text){ tasks.push({ id: Date.now(), text, completed: false }); saveTasks(); render(); }
function toggleTask(id){ tasks = tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t); saveTasks(); render(); }
function deleteTask(id){ tasks = tasks.filter(t => t.id !== id); saveTasks(); render(); }
form.addEventListener('submit', event => { event.preventDefault(); const text = input.value.trim(); if(!text) return; addTask(text); input.value = ''; input.focus(); });
filterButtons.forEach(button => button.addEventListener('click', () => { currentFilter = button.dataset.filter; filterButtons.forEach(b => b.classList.remove('active')); button.classList.add('active'); render(); }));
render();
