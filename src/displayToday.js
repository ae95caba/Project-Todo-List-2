import { projectsObj } from "./projectsObj";
import {isToday,parse} from "date-fns";




function displayToday(content){
     //make an array with all the projects
     Object.getOwnPropertyNames(projectsObj).forEach(project=>{
        
        //make an array with all the tasks 
            Object.getOwnPropertyNames(projectsObj[project]).forEach(task=>{
                
                const objDate = parse(
                    projectsObj[project][task].date.replaceAll('-', '/'),
                    'yyyy/MM/dd',
                    new Date()
                    );

                if(isToday(objDate)){
                
                    const todayP = document.createElement("p");
                    todayP.innerHTML=task;
                    content.appendChild(todayP);                    
                }
              
            })
        })
}

export default displayToday;