import { projectsObj } from "./projectsObj";

function displayAll(content){
     //make an array with all the projects
     Object.getOwnPropertyNames(projectsObj).forEach(project=>{
        
        //make an array with all the tasks 
            Object.getOwnPropertyNames(projectsObj[project]).forEach(task=>{
               
                
                    
                    const allP = document.createElement("p");
                    allP.innerHTML=task;
                    content.appendChild(allP); 
                    console.log(projectsObj[project][task]);
                
            })
        })
}

export default displayAll;