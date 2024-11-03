import "./styles.css";
import { loadProject } from "./sidebar";
function UpdateScreen() {
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = sidebar.style.display == "none" ? "flex": "none";
    });

    loadProject();

}

UpdateScreen();