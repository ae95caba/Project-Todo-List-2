import { projectsObj } from "./projectsObj";

function showTasksList (content,addTaskButton,tittle){
      
    
      let tasksUl = null;
    //check if there is atlesat 1 task
    if (Object.keys(projectsObj[tittle.innerText]).length>0){
        //checks if there is already an ul made by this function
        if(document.getElementById("tasks-ul")==null){
        tasksUl = document.createElement("ul");
        tasksUl.id= "tasks-ul";
       content.insertBefore(tasksUl,addTaskButton);
        }else{
            document.getElementById("tasks-ul").remove();
            tasksUl = document.createElement("ul");
            tasksUl.id= "tasks-ul";
            content.insertBefore(tasksUl,addTaskButton);
        };
       
        Object.getOwnPropertyNames(projectsObj[tittle.innerText]).forEach(task => {
          const taskLi = document.createElement("li");
          taskLi.innerText= task;
          
          const deleteButton = document.createElement("button");
          deleteButton.innerText="Delete";

          const importantButton = document.createElement("button");
          importantButton.innerText="Not important";
          projectsObj[tittle.innerText][task].isImportant=false;

          deleteButton.addEventListener("click",()=>{
            taskLi.remove();
            console.log(projectsObj);
            console.log(projectsObj[tittle.innerText]);
            console.log(projectsObj[tittle.innerText][task]);
            delete projectsObj[tittle.innerText][task];
          })

          importantButton.addEventListener("click",()=>{  
            if (importantButton.innerText == "Not important") {
              importantButton.innerText = "Important";
              projectsObj[tittle.innerText][task].isImportant=true;

            } else {
              importantButton.innerText = "Not important";
              projectsObj[tittle.innerText][task].isImportant=false;
  
            }          
          })

          taskLi.appendChild(deleteButton);
          taskLi.appendChild(importantButton)

          tasksUl.appendChild(taskLi);
    
          });
    }
  }

  
  export {showTasksList};

  //make it non dependan on place put the showtasks list function