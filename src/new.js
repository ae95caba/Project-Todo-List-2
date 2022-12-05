import { projectsObj } from "./projectsObj";

function displayImportant (content){
    
    //make an array with all the projects
    Object.getOwnPropertyNames(projectsObj).forEach(project=>{
        
    //make an array with all the tasks 
        Object.getOwnPropertyNames(projectsObj[project]).forEach(task=>{
           
            if(projectsObj[project][task].isImportant){
                
                const importantP = document.createElement("p");
                importantP.innerHTML=task;
                content.appendChild(importantP); 
                console.log(projectsObj[project][task]);
            }
        })
    })
}

export default displayImportant;