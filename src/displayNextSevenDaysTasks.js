import { projectsObj } from "./projectsObj";
import isInTheNextSevenDays from "./isInNextSevenDays";
import makeSingleTask from "./makeSingleTask";

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

export { displayNextSevenDaysTasks };
