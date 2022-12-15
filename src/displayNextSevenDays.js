import { projectsObj } from "./projectsObj";
import {isWithinInterval, addDays, parse} from "date-fns";
import newfun from "./newfun";



function displayNextSevenDays(content){
    let tasksUl = document.createElement("ul");
    tasksUl.id= "tasks-ul";
     //make an array with all the projects
     Object.getOwnPropertyNames(projectsObj).forEach(project=>{
        
        //make an array with all the tasks 
            Object.getOwnPropertyNames(projectsObj[project]).forEach(task=>{
                
                const end = Date.now();
                const start = addDays(end,7);
                const objDate = parse(
                    projectsObj[project][task].date.replaceAll('-', '/'),
                    'yyyy/MM/dd',
                    new Date()
                );
      
                const isInTheNextSevenDays=isWithinInterval(objDate,{
                    start: end,
                    end: start
                })

               


                if(isInTheNextSevenDays){
                    
                  newfun(project,tasksUl,task,content,true,false,true);                
                }
              
            })
        })
}

export {displayNextSevenDays};
