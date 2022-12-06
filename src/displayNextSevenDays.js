import { projectsObj } from "./projectsObj";
import {isWithinInterval, addDays, parse} from "date-fns";




function displayNextSevenDays(content){
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
                
                    const nextSevenDaysP = document.createElement("p");
                    nextSevenDaysP.innerHTML=task;
                    content.appendChild(nextSevenDaysP);                    
                }
              
            })
        })
}

export default displayNextSevenDays;