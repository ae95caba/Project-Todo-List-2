import important from "./important";
import allTasks from "./allTasks";
import nextSevenDays from "./nextSevenDays";
import today from "./today";
import addProject from "./addProject";
import projectContent from "./projectContent";
import mouseOverOutClick from "./mouseOverOutClick";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

mouseOverOutClick(button);

});

const importantButton = document.getElementById("important");
importantButton.addEventListener("click",important);

const allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click",allTasks);

const todayButton = document.getElementById("today");
todayButton.addEventListener("click",today);

const nextSevenDaysButton = document.getElementById("next-seven-days");
nextSevenDaysButton.addEventListener("click",nextSevenDays);

const todosButton = document.getElementById("todos");
todosButton.addEventListener("click",()=> projectContent(todosButton.innerText));

addProject();





