import { addTodo } from "./todo.js";

export function loadProject() {
    const addProject = document.querySelector(".add-new-project");
    addProject.addEventListener("click", addNewProject);
    
    function addNewProject() {
        const projectInput = document.querySelector("#project");
        if (projectInput.value == ""){
            return;
        }
        createProjectBtn(projectInput.value);
        projectInput.value = "";
    }
    
    function createProjectBtn(name) {
        const projectConatiner = document.querySelector(".project-container")
        
        const project = document.createElement("button");
        project.textContent = `# ${name}`;
        project.classList.add("project-btn");
        project.addEventListener("click", displayProject);
        localStorage.setItem(name, "");

        projectConatiner.appendChild(project);
    }
    
    function displayProject(e) {
        const projectH1 = document.querySelector(".project-h1");
        projectH1.textContent = e.target.textContent;
    }
    
    function loadExistingProjects() {
        for (let i = 0 ; i < localStorage.length ; i++) {
            const projectName = localStorage.key(i);
            createProjectBtn(projectName);
        }
    }

    loadExistingProjects();
    addTodo();
}