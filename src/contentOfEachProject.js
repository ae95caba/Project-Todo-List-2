import addTask from "./addTask";
import { noTasksMessage } from "./messages";
import { displayTasksOfEachProject } from "./displayTasks";

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
  addTaskButton.classList.add(
    "animate__animated",
    "animate__pulse",
    "animate__infinite",
    "animate__slower"
  );

  content.appendChild(tittle);

  displayTasksOfEachProject(content, tittle);

  content.appendChild(addTaskButton);

  document.body.appendChild(content);

  addTaskButton.addEventListener("click", () => {
    if (document.getElementById("message-container")) {
      document.getElementById("message-container").remove();
    }
    addTask();
  });
};

export default contentOfEachProject;
