import { displayForm,createTodo,hideForm,addNewTodo } from "./todo";

export function loadProject() {
    const addProject = document.querySelector(".add-new-project");
    addProject.addEventListener("click", addNewProject);

    const addTodoBtn = document.querySelector(".add-todo");
    addTodoBtn.addEventListener("click",displayForm);

    const formBtn = document.querySelector(".create-todo");
    formBtn.addEventListener("click", () => {
        addNewTodo();
        hideForm();
    })
    loadExistingProjects();
}

function addNewProject() {
    const projectInput = document.querySelector("#project");
    if (projectInput.value == ""){
        return;
    }

    createProjectBtn(projectInput.value);
    projectInput.value = "";
}

function createProjectBtn(project) {
    const projectConatiner = document.querySelector(".project-container")
    const projectBtn = document.createElement("button");

    projectBtn.textContent = project;
    projectBtn.classList.add("project-btn");
    projectBtn.addEventListener("click", displayProject);

    // checks if its a new project
    if(localStorage.getItem(project) == null) localStorage.setItem(project, JSON.stringify([]));

    projectConatiner.appendChild(projectBtn);
}

function resetCards() {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.textContent = "";
}

function displayProject(e) {
    resetCards();
    const projectH1 = document.querySelector(".project-h1");
    projectH1.textContent = e.target.textContent;

    const todos = JSON.parse(localStorage.getItem(e.target.textContent)) || [];

    todos.forEach(todo => {
        createTodo(todo);
    });
}
    
function loadExistingProjects() {
    for (let i = 0 ; i < localStorage.length ; i++) {
        const projectName = localStorage.key(i);
        createProjectBtn(projectName);
    }
}
