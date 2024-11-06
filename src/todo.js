
function Todo(title, description, priority, due) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.due = due;
}

export function displayForm() {
    document.querySelector("form").style.display = "flex";
    document.querySelector(".overlay").style.display = "flex";
}

export function hideForm() {
    document.querySelector("form").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("form").reset();
}

export function addNewTodo() {
    const todo = new Todo(document.querySelector("#title").value, 
                        document.querySelector("#description").value,
                        document.querySelector("#priority").value, 
                        document.querySelector("#due").value);
    createTodo(todo);
}

export function createTodo(todo) {
    const titleP = document.createElement("p");    
    const description = document.createElement("p");    
    const priority = document.createElement("p");    
    const due = document.createElement("p");

    titleP.textContent = `Title: ${todo.title}`;
    description.textContent = `Description: ${todo.description}`;
    priority.textContent = `Priority: ${todo.priority}`;
    due.textContent = `Due: ${todo.due}`;

    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(titleP);
    card.appendChild(description);
    card.appendChild(priority);
    card.appendChild(due);

    const content = document.querySelector(".card-container");
    content.appendChild(card);

    const project = document.querySelector(".project-h1").textContent;

    const todoArr = JSON.parse(localStorage.getItem(project)) || [];

    const oldTodos = todoArr.some(
        oldTodo => oldTodo.name === todo.name && 
        oldTodo.description === todo.description && 
        oldTodo.priority === todo.priority &&
        oldTodo.due === todo.due
    );
    
    if(!oldTodos){ 
        todoArr.push(todo);    
        localStorage.setItem(project, JSON.stringify(todoArr));
    }
}
