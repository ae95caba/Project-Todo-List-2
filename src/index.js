import { actuallyAddProject, addProject } from "./addProject";
import contentOfEachProject from "./contentOfEachProject";

import { projectsObj } from "./projectsObj";
import initFirebase from "./login";
import contentOfTabsFilters from "./contentOfTabsFilters";

import { loggingForm, burgerMenu, mouseOverOutClick } from "./dom";

///////////// service worker

/////////////
loggingForm.addCloseEvent();
loggingForm.addOpenEvent();

initFirebase();
burgerMenu();

if (localStorage.getItem("data")) {
  projectsObj = JSON.parse(localStorage.getItem("data"));
}

Object.getOwnPropertyNames(projectsObj).forEach((project) => {
  if (project !== "Tareas") {
    //// aniadir funciton from import
    actuallyAddProject(false, project);
  }
});

const importantButton = document.getElementById("important");
importantButton.addEventListener("click", () =>
  contentOfTabsFilters(importantButton.innerText, "important")
);

const allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click", () =>
  contentOfTabsFilters(allTasksButton.innerText, "all")
);

const todayButton = document.getElementById("today");
todayButton.addEventListener("click", () =>
  contentOfTabsFilters(todayButton.innerText, "today")
);

const nextSevenDaysButton = document.getElementById("next-seven-days");
nextSevenDaysButton.addEventListener("click", () =>
  contentOfTabsFilters(nextSevenDaysButton.innerText, "seven")
);

/* const todosButton = document.getElementById("todos");
todosButton.addEventListener("click", () =>
  contentOfEachProject(todosButton.innerText)
);
const todosLi = document.getElementById("todos-li");
mouseOverOutClick(todosLi); */

const allHomeLis = document.querySelectorAll(".home-li");
allHomeLis.forEach((li) => {
  mouseOverOutClick(li);
});

const addProjectLi = document.getElementById("add-project-button");
mouseOverOutClick(addProjectLi, false);

addProject();
contentOfTabsFilters(allTasksButton.innerText, "all");
/* contentOfEachProject(todosButton.innerText); */
