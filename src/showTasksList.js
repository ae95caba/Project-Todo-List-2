import { projectsObj } from "./projectsObj";

function showTasksList (content,addTaskButton,tittle){
      
      //i put this variable here to avoid scope conflict further down this code
      let tasksUl = null;
    //check if there is atlesat 1 task
    if (Object.keys(projectsObj[tittle.innerText]).length>0){
        //checks if there is already an ul made by this function y there is , removes it and makes anoda
        //because otherwise there will be more than 1 ul
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
       //
        Object.getOwnPropertyNames(projectsObj[tittle.innerText]).forEach(task => {
          const taskLi = document.createElement("li");
          const taskP = document.createElement("p");
          taskP.innerText=task;
          taskLi.appendChild(taskP);
          const taskDetails = document.createElement("p");
          taskDetails.innerText=projectsObj[tittle.innerText][task].details;
          taskLi.appendChild(taskDetails);
          const taskDate = document.createElement("p");
          taskDate.innerText = projectsObj[tittle.innerText][task].date;
          taskLi.appendChild(taskDate);
          
          const deleteButton = document.createElement("button");
          deleteButton.innerText="Delete";

          const importantButton = document.createElement("button");

          if(projectsObj[tittle.innerText][task].isImportant == false || projectsObj[tittle.innerText][task].isImportant == undefined){
            importantButton.innerText="Not important";
          }else{
            console.log(projectsObj[tittle.innerText][task].isImportant);
            importantButton.innerText="Important";}
          //importantButton.innerText="Not important";
          //projectsObj[tittle.innerText][task].isImportant=false;

          deleteButton.addEventListener("click",()=>{
            taskLi.remove();

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