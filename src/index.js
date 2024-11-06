import "./styles.css";
import { loadProject } from "./loadProject.js";
function UpdateScreen() {
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = sidebar.style.display == "none" ? "flex": "none";
        const content = document.querySelector(".content");

        if(sidebar.style.display == "none"){
            content.style.gridArea = "2 / 1 / 3 / 3";
        }
        else{
            content.style.gridArea = "2 / 2 / 3 / 3";
        }
    });

    loadProject();

    
}
UpdateScreen();