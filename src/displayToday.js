import { projectsObj } from "./projectsObj";
import {isToday,parse} from "date-fns";




function displayToday(content){
    let tasksUl = document.createElement("ul");
    tasksUl.id= "tasks-ul";
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
                
                    const taskLi = document.createElement("li");
                const taskP = document.createElement("p");
                taskP.innerText=task;
                taskLi.appendChild(taskP);
                const taskDetails = document.createElement("p");
                taskDetails.innerText=projectsObj[project][task].details;
                taskLi.appendChild(taskDetails);
                const taskDate = document.createElement("p");
                taskDate.innerText = projectsObj[project][task].date;
                taskLi.appendChild(taskDate);
                
                const deleteButton = document.createElement("button");
                deleteButton.innerText="Delete";
      
                const importantButton = document.createElement("button");
      
                if(projectsObj[project][task].isImportant == false || projectsObj[project][task].isImportant == undefined){
                  importantButton.innerText="Not important";
                }else{
                  console.log(projectsObj[project][task].isImportant);
                  importantButton.innerText="Important";}
                //importantButton.innerText="Not important";
                //projectsObj[project][task].isImportant=false;
      
                deleteButton.addEventListener("click",()=>{
                  taskLi.remove();
      
                  delete projectsObj[project][task];
                })
      
                importantButton.addEventListener("click",()=>{  
                  if (importantButton.innerText == "Not important") {
                    importantButton.innerText = "Important";
                    projectsObj[project][task].isImportant=true;
      
                  } else {
                    
                importantButton.innerText ="Not important";
                projectsObj[project][task].isImportant=false;
        
                  }          
                })
      
                taskLi.appendChild(deleteButton);
                taskLi.appendChild(importantButton)
      
                tasksUl.appendChild(taskLi);
                content.appendChild(tasksUl);
                                  
                }
              
            })
        })
}

export default displayToday;