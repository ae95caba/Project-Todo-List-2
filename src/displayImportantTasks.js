import makeSingleTask from "./makeSingleTask";

import { projectsObj } from "./projectsObj";

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

export default displayImportantTasks;
