document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        document.getElementById('task-list').appendChild(li);
        taskInput.value = "";
    }
}

document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('edit')) {
        const li = event.target.parentElement.parentElement;
        const taskText = prompt("Edit the task:", li.firstElementChild.textContent);
        if (taskText !== null && taskText.trim() !== "") {
            li.firstElementChild.textContent = taskText.trim();
        }
    } else if (event.target.classList.contains('delete')) {
        event.target.parentElement.parentElement.remove();
    } else if (event.target.tagName === 'SPAN') {
        event.target.classList.toggle('completed');
    }
});