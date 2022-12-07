import mouseOverOutClick from "./mouseOverOutClick";
import { projectsObj } from "./projectsObj";
import newfun from "./newfun";

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
       //////////////////////////////
        Object.getOwnPropertyNames(projectsObj[tittle.innerText]).forEach(task => {
         
          newfun(tittle.innerText,tasksUl,task,content,false);
    
          });
    }
  }

  
  export {showTasksList};

  //make it non dependan on place put the showtasks list function