import { projectsObj } from "./projectsObj";

function showTasksList (content,addTaskButton,tittle){
      
      console.log(tittle);
      console.log(projectsObj);
      console.log(projectsObj[tittle.innerText]);
      let tasksUl = null;
    //check if there is atlesat 1 task
    if (Object.keys(projectsObj[tittle.innerText]).length>0){
        //checks if there is already an ul
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
          tasksUl.appendChild(taskLi);
    
          });
    }
  }

  
  export {showTasksList};

  //make it non dependan on place put the showtasks list function