// HTML elements ko select karna
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task function
function addTask() {
    const taskText = taskInput.value.trim();

    // Agar input empty hai
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // New list item create karna
    const li = document.createElement("li");

    // Task ka text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Complete karne ke liye click event
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Elements ko li ke andar add karna
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // li ko task list mein add karna
    taskList.appendChild(li);

    // Input ko empty karna
    taskInput.value = "";
}

// Add button par click
addBtn.addEventListener("click", addTask);

// Enter key se task add
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});