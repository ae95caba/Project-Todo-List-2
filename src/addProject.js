import contentOfEachProject from "./contentOfEachProject";
import { mouseOverOutClick } from "./dom";
import { projectsObj } from "./projectsObj";
import webStorageApi from "./webStorageApi";

const actuallyAddProject = (notForIndexJs = true, value) => {
  //gets elements
  const projectLi = document.getElementById("new-project-li");
  const addProjectButton = document.getElementById("add-project-button");
  const projectsList = document.getElementById("projects-list");
  const input = document.getElementById("input"); //in projectLi
  ///
  const newLi = document.createElement("li");
  const newProjectButton = document.createElement("button"); //its the new created project

  newLi.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
           <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>`;

  if (notForIndexJs) {
    newProjectButton.appendChild(document.createTextNode(input.value));
  } else {
    newProjectButton.appendChild(document.createTextNode(value));
  }

  newLi.appendChild(newProjectButton);
  newLi.className = "new-li";

  const deleteNewProject = document.createElement("img");
  deleteNewProject.src = "bin.svg";

  newLi.appendChild(deleteNewProject);

  projectsList.insertBefore(newLi, addProjectButton);

  if (notForIndexJs) {
    projectLi.classList.add("hidden"); /// no esta
    addProjectButton.style.display = "flex"; ///no esta
    projectsObj[newProjectButton.innerText] = {}; ///no esta
    webStorageApi(); ///no esta
    input.value = ""; ///no esta
  }
  //add to the new project created, its own content
  newProjectButton.addEventListener("click", () =>
    contentOfEachProject(newProjectButton.innerText)
  );
  /////////////////////  ADD HIGHLITHED AND SELECTED CSS PROPERTIES ///////////////////////////
  mouseOverOutClick(newLi);
  ////
  deleteNewProject.addEventListener("click", () => {
    newLi.remove();
    delete projectsObj[newProjectButton.innerText];
    webStorageApi();
    const currentContent = document.getElementById("content");

    currentContent.remove();
    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
  });
};

const addProject = () => {
  //gets elements
  const projectLi = document.getElementById("new-project-li");
  const addProjectButton = document.getElementById("add-project-button");

  const addButton = document.querySelector(".add"); //in projectLi

  const cancelButton = document.querySelector(".cancel"); //in projectLi

  const input = document.getElementById("input"); //in projectLi
  ///

  addProjectButton.addEventListener("click", () => {
    addProjectButton.style.display = "none";
    projectLi.classList.remove("hidden");
  });

  cancelButton.addEventListener("click", () => {
    projectLi.classList.add("hidden");
    addProjectButton.style.display = "flex";
    input.value = "";
  });

  addButton.addEventListener("click", () => {
    actuallyAddProject();
  });
};

export { addProject, actuallyAddProject };
