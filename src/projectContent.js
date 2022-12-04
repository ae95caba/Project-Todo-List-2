 import addTask from "./addTask";
 
import { showTasksList } from "./showTasksList";



 const projectContent = (name)=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();

    const content = document.createElement("div");
    content.id = "content";

    const tittle = document.createElement("p");
    tittle.innerText = name;
    tittle.id="tittle";

    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task-button";
    addTaskButton.innerText="Add Task";

    content.appendChild(tittle);
      
    content.appendChild(addTaskButton);
    showTasksList(content,addTaskButton);
    document.body.appendChild(content);

    addTaskButton.addEventListener("click",addTask);

 }

 export default projectContent;
