
function Todo(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
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
                        document.querySelector("#priority").value);
    createTodo(todo);
}

export function createTodo(todo) {
    const titleP = document.createElement("p");    
    const description = document.createElement("p");    
    const priority = document.createElement("p");    
    
    titleP.textContent = `Title \n ${todo.title}`;
    description.textContent = `Description \n ${todo.description}`;
    priority.textContent = `Priority \n ${todo.priority}`;

    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(titleP);
    card.appendChild(description);
    card.appendChild(priority);

    const content = document.querySelector(".card-container");

    content.appendChild(card);

    const project = document.querySelector(".project-h1").textContent;

    const todoArr = JSON.parse(localStorage.getItem(project)) || [];

    const oldTodos = todoArr.some(
        oldTodo => oldTodo.name === todo.name && oldTodo.description === todo.description && oldTodo.priority === todo.priority
    );
    
    if(!oldTodos){ 
        todoArr.push(todo);    
        localStorage.setItem(project, JSON.stringify(todoArr));
    }
}