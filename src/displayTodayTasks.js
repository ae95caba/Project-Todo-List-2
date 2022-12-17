import { projectsObj } from "./projectsObj";
import { isToday, parse } from "date-fns";
import makeSingleTask from "./makeSingleTask";

function displayTodayTasks(content) {
  let tasksUl = document.createElement("ul");
  tasksUl.id = "tasks-ul";
  //make an array with all the projects
  Object.getOwnPropertyNames(projectsObj).forEach((project) => {
    //make an array with all the tasks
    Object.getOwnPropertyNames(projectsObj[project]).forEach((task) => {
      const objDate = parse(
        projectsObj[project][task].date.replaceAll("-", "/"),
        "yyyy/MM/dd",
        new Date()
      );

      if (isToday(objDate)) {
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
