import { projectsObj } from "./projectsObj";
import makeSingleTask from "./makeSingleTask";

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

export default displayAllTasks;
