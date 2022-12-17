import { projectsObj } from "./projectsObj";
import isInToday from "./isInToday";
import makeSingleTask from "./makeSingleTask";

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

export default displayTodayTasks;
