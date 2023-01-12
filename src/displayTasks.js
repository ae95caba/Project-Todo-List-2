import { projectsObj } from "./projectsObj";
import webStorageApi from "./webStorageApi";
import isInToday from "./isInToday";
import isInTheNextSevenDays from "./isInNextSevenDays";

function displayAllTasks(content) {
  let tasksUl = document.createElement("ul");
  tasksUl.id = "tasks-ul";
  //make an array with all the projects
  Object.getOwnPropertyNames(projectsObj).forEach((project) => {
    //make an array with all the tasks
    Object.getOwnPropertyNames(projectsObj[project]).forEach((task) => {
      displaySingleTask(project, tasksUl, task, content, "displayAllTasks");
    });
    content.appendChild(tasksUl);
  });
}

/// ul part
function displayTasksOfEachProject(content, tittle) {
  //i put this variable here to avoid scope conflict further down this code
  let tasksUl = null;

  //check if there is at least 1 task if there isnt any, this function doesnt do anything
  if (Object.keys(projectsObj[tittle.innerText]).length > 0) {
    if (document.getElementById("tasks-ul") == null) {
      //if there is not already an ul makes one
      tasksUl = document.createElement("ul");
      tasksUl.id = "tasks-ul";

      tittle.after(tasksUl);
    } else {
      //if there is already an ul made by this function ,
      // removes it and makes another because otherwise there will be more than 1 ul
      document.getElementById("tasks-ul").remove();
      tasksUl = document.createElement("ul");
      tasksUl.id = "tasks-ul";
      tittle.after(tasksUl);
    }
    //////////////////////////////

    //this  will append a li task to the previously created ul FOR EACH TASK
    Object.getOwnPropertyNames(projectsObj[tittle.innerText]).forEach(
      (task) => {
        //li part
        displaySingleTask(
          tittle.innerText,
          tasksUl,
          task,
          content,
          "displayTasksOfEachProject"
        );
      }
    );
  }
}

function displayNextSevenDaysTasks(content) {
  let tasksUl = document.createElement("ul");
  tasksUl.id = "tasks-ul";
  //make an array with all the projects
  Object.getOwnPropertyNames(projectsObj).forEach((project) => {
    //make an array with all the tasks
    Object.getOwnPropertyNames(projectsObj[project]).forEach((task) => {
      if (isInTheNextSevenDays(projectsObj[project][task].date)) {
        displaySingleTask(
          project,
          tasksUl,
          task,
          content,
          "displayNextSevenDaysTasks"
        );
      }
      content.appendChild(tasksUl);
    });
  });
}

function displayTodayTasks(content) {
  let tasksUl = document.createElement("ul");
  tasksUl.id = "tasks-ul";
  //make an array with all the projects
  Object.getOwnPropertyNames(projectsObj).forEach((project) => {
    //make an array with all the tasks
    Object.getOwnPropertyNames(projectsObj[project]).forEach((task) => {
      if (isInToday(projectsObj[project][task].date)) {
        displaySingleTask(project, tasksUl, task, content, "displayTodayTasks");
      }
      content.appendChild(tasksUl);
    });
  });
}

function displayImportantTasks(content) {
  let tasksUl = document.createElement("ul");
  tasksUl.id = "tasks-ul";
  //make an array with all the projects
  Object.getOwnPropertyNames(projectsObj).forEach((project) => {
    //make an array with all the tasks
    Object.getOwnPropertyNames(projectsObj[project]).forEach((task) => {
      if (projectsObj[project][task].isImportant) {
        displaySingleTask(
          project,
          tasksUl,
          task,
          content,
          "displayImportantTasks"
        );
      }
      content.appendChild(tasksUl);
    });
  });
}

function displaySingleTask(project, tasksUl, task, content, container2) {
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
    if (container2 == displayNextSevenDaysTasks) {
      if (!isInTheNextSevenDays(projectsObj[project][task].date)) {
        taskLi.remove();
        if (tasksUl.innerHTML == "") {
          tasksUl.remove();
        }
      }
    }
    if (container2 == "displayTodayTasks") {
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
      if (container2 === "displayImportantTasks") {
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
  /* if (container2 !== "displayTasksOfEachProject") {
    console.log("hola hijoeputa");
    content.appendChild(tasksUl);
  }*/
}

export {
  displayImportantTasks,
  displayTasksOfEachProject,
  displayNextSevenDaysTasks,
  displayAllTasks,
  displayTodayTasks,
};
