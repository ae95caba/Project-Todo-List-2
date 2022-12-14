
import addProject from "./addProject";
import projectContent from "./projectContent";
import mouseOverOutClick from "./mouseOverOutClick";
import { projectsObj } from "./projectsObj";
import webStorageApi from "./webStorageApi";
import contentOfTabs from "./contentOfTabs";

console.log(projectsObj);

if(localStorage.getItem("data")){
    projectsObj= JSON.parse(localStorage.getItem("data"));
    console.log(projectsObj);
}


         
if(Object.getOwnPropertyNames(projectsObj).length){
const addProjectButton = document.getElementById("add-project-button");
const projectsList = document.getElementById("projects-list");
Object.getOwnPropertyNames(projectsObj).forEach(project=>{
    if(project !=="Tareas"){

    const newDiv = document.createElement("div");
    newDiv.className= "new-div";

    const newProjectButton = document.createElement("button");//its the new created project
    newProjectButton.innerText = project;
    newDiv.appendChild(newProjectButton);

    const deleteNewProject = document.createElement("button");
    deleteNewProject.innerText = "X";
    newDiv.appendChild(deleteNewProject);

    projectsList.insertBefore(newDiv, addProjectButton);
    //add to the new project created, its own content
    newProjectButton.addEventListener("click",()=> projectContent(newProjectButton.innerText));
   /////
    deleteNewProject.addEventListener("click",()=>{
        newDiv.remove();
        delete projectsObj[project];
        webStorageApi();
    })

}

})
}
       
        


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

mouseOverOutClick(button);

});

const importantButton = document.getElementById("important");
importantButton.addEventListener("click",()=>contentOfTabs(importantButton.innerText,"important"));

const allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click",()=>contentOfTabs(allTasksButton.innerText,"all"));

const todayButton = document.getElementById("today");
todayButton.addEventListener("click",()=>contentOfTabs(todayButton.innerText,"today"));

const nextSevenDaysButton = document.getElementById("next-seven-days");
nextSevenDaysButton.addEventListener("click",()=>contentOfTabs(nextSevenDaysButton.innerText,"seven"));

const todosButton = document.getElementById("todos");
todosButton.addEventListener("click",()=> projectContent(todosButton.innerText));

addProject();





