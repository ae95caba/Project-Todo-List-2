import { projectsObj } from "./projectsObj";
import mouseOverOutClick from "./mouseOverOutClick";
import webStorageApi from "./webStorageApi";


function newfun(project,tasksUl,task,content,contentAppendChilTasksUl=true,forDisplayImportant=false){
    
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
    deleteButton.innerText="Borrar";
/////////////////////
    const importantButton = document.createElement("button");
    if(projectsObj[project][task].isImportant == false || projectsObj[project][task].isImportant == undefined){
      importantButton.innerText="No importante";
    }else{  
    importantButton.innerText="Importante";}
///////////////////////////////
    const markDone = document.createElement("button");
    markDone.type="button";
    markDone.innerText="Echa";

    if(projectsObj[project][task].isDone == false || projectsObj[project][task].isDone == undefined){
      markDone.innerText="Sin hacer";
      taskP.style.textDecoration ="none";
    taskDetails.style.textDecoration ="none";
      
    }else{
    markDone.innerText="Echa";
    taskP.style.textDecoration ="line-through";
        taskDetails.style.textDecoration ="line-through";
}

/////////////////////////////////       

    deleteButton.addEventListener("click",()=>{
      taskLi.remove();

      delete projectsObj[project][task];
      webStorageApi();
    })
//////////////////////////////////////
    
    if(forDisplayImportant){
        importantButton.addEventListener("click",()=>{  
            if (importantButton.innerText == "No importante") {
              importantButton.innerText = "Importante";
              projectsObj[project][task].isImportant=true;
              webStorageApi();

            } else {
              taskLi.remove();
              
              if (tasksUl.innerHTML == ""){
                  tasksUl.remove();
              }
              
              projectsObj[project][task].isImportant=false;
              webStorageApi();
  
            }          
          })
    }else{
        importantButton.addEventListener("click",()=>{  
            if (importantButton.innerText == "No importante") {
                importantButton.innerText = "Importante";
                projectsObj[project][task].isImportant=true;
                webStorageApi();
    
            } else {
                importantButton.innerText = "No importante";
                projectsObj[project][task].isImportant=false;
                webStorageApi();
    
            }          
            })
    }
/////////////////////////////
    markDone.addEventListener("click",()=>{  
      if (markDone.innerText == "Sin hacer") {
        markDone.innerText = "Echa";
        
        taskP.style.textDecoration ="line-through";
        taskDetails.style.textDecoration ="line-through";
        projectsObj[project][task].isDone=true;
        webStorageApi();

      } else {
        markDone.innerText = "Sin hacer";
        
        taskP.style.textDecoration ="none";
        taskDetails.style.textDecoration ="none";
        
        projectsObj[project][task].isDone=false;
        webStorageApi();

      }          
    })
/////////////////////////         
    taskLi.appendChild(markDone);
    taskLi.appendChild(deleteButton);
    taskLi.appendChild(importantButton)

    mouseOverOutClick(markDone,false);
    mouseOverOutClick(deleteButton,false);
    mouseOverOutClick(importantButton,false);

    tasksUl.appendChild(taskLi);
    if(contentAppendChilTasksUl){
    content.appendChild(tasksUl);
    }
    
}

export default newfun;