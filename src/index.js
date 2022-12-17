import { actuallyAddProject, addProject } from "./addProject";
import contentOfEachProject from "./contentOfEachProject";
import mouseOverOutClick from "./mouseOverOutClick";
import { projectsObj } from "./projectsObj";

import contentOfTabs from "./contentOfTabs";
import burgerMenu from "./burgerMenu";

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
  contentOfTabs(importantButton.innerText, "important")
);

const allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click", () =>
  contentOfTabs(allTasksButton.innerText, "all")
);

const todayButton = document.getElementById("today");
todayButton.addEventListener("click", () =>
  contentOfTabs(todayButton.innerText, "today")
);

const nextSevenDaysButton = document.getElementById("next-seven-days");
nextSevenDaysButton.addEventListener("click", () =>
  contentOfTabs(nextSevenDaysButton.innerText, "seven")
);

const todosButton = document.getElementById("todos");
todosButton.addEventListener("click", () =>
  contentOfEachProject(todosButton.innerText)
);
const todosLi = document.getElementById("todos-li");
mouseOverOutClick(todosLi);

const allHomeLis = document.querySelectorAll(".home-li");
allHomeLis.forEach((li) => {
  mouseOverOutClick(li);
});

const addProjectLi = document.getElementById("add-project-button");
mouseOverOutClick(addProjectLi, false);

addProject();
contentOfEachProject(todosButton.innerText);
