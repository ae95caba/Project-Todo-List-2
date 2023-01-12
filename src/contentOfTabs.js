import {
  displayImportantTasks,
  displayNextSevenDaysTasks,
  displayTodayTasks,
  displayAllTasks,
} from "./displayTasks";

const contentOfTabs = (name, type) => {
  const currentContent = document.getElementById("content");
  currentContent.remove();

  const content = document.createElement("div");
  content.id = "content";

  const tittle = document.createElement("div");
  tittle.innerText = name;
  tittle.id = "tittle";

  content.appendChild(tittle);
  document.body.appendChild(content);

  switch (type) {
    case "important":
      displayImportantTasks(content);
      break;
    case "all":
      displayAllTasks(content);
      break;
    case "seven":
      displayNextSevenDaysTasks(content);
      break;
    case "today":
      displayTodayTasks(content);
      break;
  }
};

export default contentOfTabs;
