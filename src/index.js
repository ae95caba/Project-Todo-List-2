
import addProject from "./addProject";
import projectContent from "./projectContent";
import mouseOverOutClick from "./mouseOverOutClick";
import { projectsObj } from "./projectsObj";
import webStorageApi from "./webStorageApi";
import contentOfTabs from "./contentOfTabs";



if(localStorage.getItem("data")){
    projectsObj= JSON.parse(localStorage.getItem("data"));
    
}
         
if(Object.getOwnPropertyNames(projectsObj).length){
const addProjectButton = document.getElementById("add-project-button");
const projectsList = document.getElementById("projects-list");
Object.getOwnPropertyNames(projectsObj).forEach(project=>{
    if(project !=="Tareas"){

    const newLi = document.createElement("li");
    newLi.className= "new-li";
    mouseOverOutClick(newLi);

    const newProjectButton = document.createElement("button");//its the new created project
    
    newLi.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
           <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>`;
        newProjectButton.appendChild(document.createTextNode(project));
    newLi.appendChild(newProjectButton);

    const deleteNewProject = document.createElement("button");
    deleteNewProject.innerText = "X";
    newLi.appendChild(deleteNewProject);

    projectsList.insertBefore(newLi, addProjectButton);
    //add to the new project created, its own content
    newProjectButton.addEventListener("click",()=> projectContent(newProjectButton.innerText));
   /////
   

    deleteNewProject.addEventListener("click",()=>{
        newLi.remove();
        delete projectsObj[newProjectButton.innerText];
        webStorageApi();
        const currentContent = document.getElementById("content");
        
        currentContent.remove();
        const content = document.createElement("div");
        content.id = "content";
        document.body.appendChild(content);

    });

}

})
}
       




const importantButton = document.getElementById("important");
importantButton.addEventListener("click",()=>contentOfTabs(importantButton.innerText,"important"));

const allTasksButton = document.getElementById("all-tasks");
allTasksButton.addEventListener("click",()=>contentOfTabs(allTasksButton.innerText,"all"));

const todayButton = document.getElementById("today");
todayButton.addEventListener("click",()=>contentOfTabs(todayButton.innerText,"today"));

const nextSevenDaysButton = document.getElementById("next-seven-days");
nextSevenDaysButton.addEventListener("click",()=>contentOfTabs(nextSevenDaysButton.innerText,"seven"));

//const seven =contentOfTabs(nextSevenDaysButton.innerText,"seven");

const todosButton = document.getElementById("todos");
todosButton.addEventListener("click",()=> projectContent(todosButton.innerText));
const todosLi = document.getElementById("todos-li");
mouseOverOutClick(todosLi);

const allHomeLis = document.querySelectorAll(".home-li");
allHomeLis.forEach(li =>{
    mouseOverOutClick(li);
    
})

const addProjectLi= document.getElementById("add-project-button");
mouseOverOutClick(addProjectLi,false);

addProject();







