// Selectors
const taskInput = document.querySelector("#inputBox");
const taskBtn = document.querySelector(".addBtn");
const tasks = document.querySelector(".taskList");

// Event listeners
taskBtn.addEventListener("click", addTask);

//Functions
function addTask (event) {
    // Prevent form from submitting
    event.preventDefault();

    // Create task div box
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Create checkbox
    const markBtn = document.createElement("input");
    markBtn.type = "checkbox";
    markBtn.classList.add("markButton");
    taskDiv.appendChild(markBtn);

    // Create li
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    newTask.classList.add("taskItem");
    taskDiv.appendChild(newTask);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteButton");
    taskDiv.appendChild(deleteBtn);

    // Append to list
    tasks.appendChild(taskDiv);

    // Clear task input value
    taskInput.value = "";
    
    // Remove task from ToDo list
    deleteBtn.addEventListener("click", function() {
        tasks.removeChild(taskDiv);
        taskInput.focus();
    })

}