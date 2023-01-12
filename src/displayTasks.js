import { projectsObj } from "./projectsObj";
import makeSingleTask from "./makeSingleTask";
import isInToday from "./isInToday";
import isInTheNextSevenDays from "./isInNextSevenDays";

function displayAllTasks(content) {
  let tasksUl = document.createElement("ul");
  tasksUl.id = "tasks-ul";
  //make an array with all the projects
  Object.getOwnPropertyNames(projectsObj).forEach((project) => {
    //make an array with all the tasks
    Object.getOwnPropertyNames(projectsObj[project]).forEach((task) => {
      makeSingleTask(project, tasksUl, task, content);
    });
  });
}

function displayTasksOfEachProject(content, addTaskButton, tittle) {
  //i put this variable here to avoid scope conflict further down this code
  let tasksUl = null;
  //check if there is atlesat 1 task

  if (Object.keys(projectsObj[tittle.innerText]).length > 0) {
    //checks if there is already an ul made by this function y there is , removes it and makes another
    //because otherwise there will be more than 1 ul
    if (document.getElementById("tasks-ul") == null) {
      tasksUl = document.createElement("ul");
      tasksUl.id = "tasks-ul";
      content.insertBefore(tasksUl, addTaskButton);
    } else {
      document.getElementById("tasks-ul").remove();
      tasksUl = document.createElement("ul");
      tasksUl.id = "tasks-ul";
      content.insertBefore(tasksUl, addTaskButton);
    }
    //////////////////////////////
    Object.getOwnPropertyNames(projectsObj[tittle.innerText]).forEach(
      (task) => {
        makeSingleTask(tittle.innerText, tasksUl, task, content, false);
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
        makeSingleTask(project, tasksUl, task, content, true, false, true);
      }
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
        makeSingleTask(
          project,
          tasksUl,
          task,
          content,
          true,
          false,
          false,
          true
        );
      }
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
        makeSingleTask(project, tasksUl, task, content, true, true);
      }
    });
  });
}

export {
  displayImportantTasks,
  displayTasksOfEachProject,
  displayNextSevenDaysTasks,
  displayAllTasks,
  displayTodayTasks,
};
