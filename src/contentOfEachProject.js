import addTask from "./addTask";

import { displayTasksOfEachProject } from "./displayTasksOfEachProject";

import mouseOverOutClick from "./mouseOverOutClick";

//shows the content of each individual project
const contentOfEachProject = (name) => {
  const currentContent = document.getElementById("content");
  currentContent.remove();

  const content = document.createElement("div");
  content.id = "content";

  const tittle = document.createElement("p");
  tittle.innerText = name;
  tittle.id = "tittle";

  const addTaskButton = document.createElement("button");
  addTaskButton.id = "add-task-button";
  addTaskButton.innerText = "Añadir tarea";
  addTaskButton.className = "add";

  content.appendChild(tittle);

  content.appendChild(addTaskButton);

  displayTasksOfEachProject(content, addTaskButton, tittle);

  document.body.appendChild(content);

  addTaskButton.addEventListener("click", addTask);
};

export default contentOfEachProject;
