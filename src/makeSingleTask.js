import { projectsObj } from "./projectsObj";
import isInTheNextSevenDays from "./isInNextSevenDays";
import webStorageApi from "./webStorageApi";
import { isToday } from "date-fns";
import { isWithinInterval, addDays, parse } from "date-fns";

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
  const taskLi = document.createElement("li");
  const taskP = document.createElement("p");
  taskP.innerText = task;

  const markDone = document.createElement("img");
  taskLi.appendChild(markDone);

  taskLi.appendChild(taskP);

  const taskDetails = document.createElement("p");
  if (projectsObj[project][task].details) {
    taskDetails.innerText = ": ";
    taskDetails.innerText += projectsObj[project][task].details;
  }
  taskLi.appendChild(taskDetails);

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
      const objDate = parse(
        projectsObj[project][task].date.replaceAll("-", "/"),
        "yyyy/MM/dd",
        new Date()
      );

      if (!isToday(objDate)) {
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

  if (fordisplayImportantTasks) {
    importantButton.addEventListener("click", () => {
      if (importantButton.getAttribute("src") == "star-outline.svg") {
        importantButton.src = "star.svg";
        projectsObj[project][task].isImportant = true;
        webStorageApi();
      } else {
        taskLi.remove();

        if (tasksUl.innerHTML == "") {
          tasksUl.remove();
        }

        projectsObj[project][task].isImportant = false;
        webStorageApi();
      }
    });
  } else {
    importantButton.addEventListener("click", () => {
      if (importantButton.getAttribute("src") == "star-outline.svg") {
        importantButton.src = "star.svg";
        projectsObj[project][task].isImportant = true;
        webStorageApi();
      } else {
        importantButton.src = "star-outline.svg";
        projectsObj[project][task].isImportant = false;
        webStorageApi();
      }
    });
  }
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
