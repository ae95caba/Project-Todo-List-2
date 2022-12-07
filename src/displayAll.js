import { projectsObj } from "./projectsObj";
import newfun from "./newfun";

function displayAll(content){
        let tasksUl = document.createElement("ul");
        tasksUl.id= "tasks-ul";
     //make an array with all the projects
     Object.getOwnPropertyNames(projectsObj).forEach(project=>{
        
        //make an array with all the tasks 
            Object.getOwnPropertyNames(projectsObj[project]).forEach(task=>{
               
              newfun(project,tasksUl,task,content);
                
            })
        })
}

export default displayAll;