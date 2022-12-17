import { projectsObj } from "./projectsObj";
import isInTheNextSevenDays from "./isInNextSevenDays";
import webStorageApi from "./webStorageApi";

import isInToday from "./isInToday";

function makeSingleTask(
  project,
  tasksUl,
  task,
  content,
  notForDisplayTasksOfEachProject = true,
  fordisplayImportantTasks = false,
  fordisplayNextSevenDaysTasks = false,
  fordisplayTodayTasks = false
) {
  const divForTaskAndDetails = document.createElement("div");

  const taskLi = document.createElement("li");
  const taskP = document.createElement("p");
  taskP.innerText = task;

  const markDone = document.createElement("img");
  taskLi.appendChild(markDone);

  const taskDetails = document.createElement("p");
  divForTaskAndDetails.appendChild(taskP);
  divForTaskAndDetails.appendChild(taskDetails);
  if (projectsObj[project][task].details) {
    taskP.innerText += ":";
    taskDetails.innerText += projectsObj[project][task].details;
  }
  taskLi.appendChild(divForTaskAndDetails);
  /////////////////////////////////////////////
  const taskDate = document.createElement("p");

  const taskDateEdit = document.createElement("input");
  taskDateEdit.type = "date";
  taskDateEdit.style.display = "none";

  taskDate.addEventListener("click", () => {
    taskDateEdit.style.display = "inline";
    taskDate.style.display = "none";
    if (taskDate.innerText == "Sin fecha") {
    } else {
      taskDateEdit.value = taskDate.innerText;
    }
  });

  taskDateEdit.addEventListener("focusout", () => {
    taskDateEdit.style.display = "none";
    taskDate.style.display = "inline";
    projectsObj[project][task].date = taskDateEdit.value;
    taskDate.innerText = projectsObj[project][task].date;
    if (taskDate.innerText == "") {
      taskDate.innerText = "Sin fecha";
    }
    webStorageApi();
    if (fordisplayNextSevenDaysTasks) {
      if (!isInTheNextSevenDays(projectsObj[project][task].date)) {
        taskLi.remove();
        if (tasksUl.innerHTML == "") {
          tasksUl.remove();
        }
      }
    }
    if (fordisplayTodayTasks) {
      if (!isInToday(projectsObj[project][task].date)) {
        taskLi.remove();
        if (tasksUl.innerHTML == "") {
          tasksUl.remove();
        }
      }
    }
  });

  taskDate.innerText = projectsObj[project][task].date;
  if (taskDate.innerHTML == "") {
    taskDate.innerText = "Sin fecha";
  }
  taskLi.appendChild(taskDate);
  taskLi.appendChild(taskDateEdit);
  ////////////////////////////////////
  const deleteButton = document.createElement("img");
  deleteButton.src = "bin.svg";
  /////////////////////

  const importantButton = document.createElement("img");
  if (
    projectsObj[project][task].isImportant == false ||
    projectsObj[project][task].isImportant == undefined
  ) {
    importantButton.src = "star-outline.svg";
  } else {
    importantButton.src = "star.svg";
  }
  ///////////////////////////////

  if (
    projectsObj[project][task].isDone == false ||
    projectsObj[project][task].isDone == undefined
  ) {
    markDone.src = "circle-outline.svg";
    taskP.style.textDecoration = "none";
    taskP.style.opacity = "1";
    taskDetails.style.textDecoration = "none";
    taskDetails.style.opacity = "1";
  } else {
    markDone.src = "check-circle.svg";
    taskP.style.textDecoration = "line-through";
    taskP.style.opacity = "0.3";
    taskDetails.style.textDecoration = "line-through";
    taskDetails.style.opacity = "0.3";
  }

  /////////////////////////////////

  deleteButton.addEventListener("click", () => {
    taskLi.remove();

    delete projectsObj[project][task];
    webStorageApi();
  });
  //////////////////////////////////////

  importantButton.addEventListener("click", () => {
    if (importantButton.getAttribute("src") == "star-outline.svg") {
      importantButton.src = "star.svg";
      projectsObj[project][task].isImportant = true;
      webStorageApi();
    } else {
      if (fordisplayImportantTasks) {
        taskLi.remove();

        if (tasksUl.innerHTML == "") {
          tasksUl.remove();
        }
      } else {
        importantButton.src = "star-outline.svg";
      }
      projectsObj[project][task].isImportant = false;
      webStorageApi();
    }
  });

  /////////////////////////////
  markDone.addEventListener("click", () => {
    if (markDone.getAttribute("src") == "circle-outline.svg") {
      markDone.src = "check-circle.svg";

      taskP.style.textDecoration = "line-through";
      taskP.style.opacity = "0.3";
      taskDetails.style.textDecoration = "line-through";
      taskDetails.style.opacity = "0.3";
      projectsObj[project][task].isDone = true;
      webStorageApi();
    } else {
      markDone.src = "circle-outline.svg";

      taskP.style.textDecoration = "none";
      taskP.style.opacity = "1";
      taskDetails.style.textDecoration = "none";
      taskDetails.style.opacity = "1";

      projectsObj[project][task].isDone = false;
      webStorageApi();
    }
  });

  taskLi.appendChild(importantButton);
  taskLi.appendChild(deleteButton);

  tasksUl.appendChild(taskLi);
  if (notForDisplayTasksOfEachProject) {
    content.appendChild(tasksUl);
  }
}

export default makeSingleTask;
