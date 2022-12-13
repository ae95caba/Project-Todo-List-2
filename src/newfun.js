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
    deleteButton.innerText="Delete";
/////////////////////
    const importantButton = document.createElement("button");
    if(projectsObj[project][task].isImportant == false || projectsObj[project][task].isImportant == undefined){
      importantButton.innerText="Not important";
    }else{  
    importantButton.innerText="Important";}
///////////////////////////////
    const markDone = document.createElement("button");
    markDone.type="button";
    markDone.innerText="Done";

    if(projectsObj[project][task].isDone == false || projectsObj[project][task].isDone == undefined){
      markDone.innerText="Not done";
      taskP.style.textDecoration ="none";
    taskDetails.style.textDecoration ="none";
      
    }else{
    markDone.innerText="Done";
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
            if (importantButton.innerText == "Not important") {
              importantButton.innerText = "Important";
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
            if (importantButton.innerText == "Not important") {
                importantButton.innerText = "Important";
                projectsObj[project][task].isImportant=true;
                webStorageApi();
    
            } else {
                importantButton.innerText = "Not important";
                projectsObj[project][task].isImportant=false;
                webStorageApi();
    
            }          
            })
    }
/////////////////////////////
    markDone.addEventListener("click",()=>{  
      if (markDone.innerText == "Not done") {
        markDone.innerText = "Done";
        
        taskP.style.textDecoration ="line-through";
        taskDetails.style.textDecoration ="line-through";
        projectsObj[project][task].isDone=true;
        webStorageApi();

      } else {
        markDone.innerText = "Not done";
        
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