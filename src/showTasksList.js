import { projectsObj } from "./projectsObj";

function showTasksList (content,addTaskButton,project){
      console.log(projectsArr[project]);
      let tasksUl = null;
    //check if there is atlesat 1 task
    if (tasksArr.length){
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
       
       tasksArr.forEach(task => {
          const taskLi = document.createElement("li");
          taskLi.innerText= task.tittle;
          tasksUl.appendChild(taskLi);
    
          });
    }
  }

  
  export {showTasksList};

  //make it non dependan on place put the showtasks list function