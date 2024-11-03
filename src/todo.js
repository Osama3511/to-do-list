export function addTodo() {
    const addTodoBtn = document.querySelector(".add-todo");
    addTodoBtn.addEventListener("click", displayTodoForm);    
}

function displayTodoForm() {
    const form = document.querySelector("form");
    const overlay = document.querySelector(".overlay");
    
    form.style.display = "flex";
    overlay.style.display = "flex";
}

function hideForm() {
    const form = document.querySelector("form");
    const overlay = document.querySelector(".overlay");

    form.reset();

    form.style.display = "none";
    overlay.style.display = "none";
}

function Todo(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
}

function createTodo() {
    
}