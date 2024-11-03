export function loadProject() {
    const addProject = document.querySelector(".add-new-project");
    addProject.addEventListener("click", addNewProject);
}

function addNewProject() {
    const sidebar = document.querySelector(".sidebar");
    const projectInput = document.querySelector("#project");

    if (projectInput.value == ""){
        return;
    }

    const project = document.createElement("button");
    project.textContent = projectInput.value;
    project.classList.add("project-btn");
    project.addEventListener("click", displayProject);
    sidebar.appendChild(project);

    projectInput.value = "";
}

function displayProject(e) {
    const projectH1 = document.querySelector(".project-h1");
    projectH1.textContent = e.target.textContent;
}