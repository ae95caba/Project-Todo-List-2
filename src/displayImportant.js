import newfun from "./newfun";

import { projectsObj } from "./projectsObj";


function displayImportant (content){
    let tasksUl = document.createElement("ul");
    tasksUl.id= "tasks-ul";
    //make an array with all the projects
    Object.getOwnPropertyNames(projectsObj).forEach(project=>{
      
    //make an array with all the tasks 
        Object.getOwnPropertyNames(projectsObj[project]).forEach(task=>{
           
            if(projectsObj[project][task].isImportant){
                             
              newfun(project,tasksUl,task,content,true,true);  
            }
        })
    })
}

export default displayImportant;