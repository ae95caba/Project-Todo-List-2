import { projectsObj } from "./projectsObj";
import mouseOverOutClick from "./mouseOverOutClick";
import webStorageApi from "./webStorageApi";
import {isToday} from "date-fns";
import {isWithinInterval, addDays, parse} from "date-fns";





function newfun(project,tasksUl,task,content,contentAppendChilTasksUl=true,forDisplayImportant=false, forDisplayNextSevenDays=false, forDisplayToday=false){
    
    const taskLi = document.createElement("li");
    const taskP = document.createElement("p");
    taskP.innerText=task;
    taskLi.appendChild(taskP);
    
    const taskDetails = document.createElement("p");
    taskDetails.innerText=projectsObj[project][task].details;
    taskLi.appendChild(taskDetails);
    const taskDate = document.createElement("p");
    const taskDateEdit = document.createElement("input");
    taskDateEdit.type = "date";
    taskDateEdit.style.display = "none";

  taskDate.addEventListener("click",()=>{
    taskDateEdit.style.display = "inline";
    taskDateEdit.value = taskDate.innerText;
    taskDate.style.display = "none";
  })

  taskDateEdit.addEventListener("focusout",()=>{

    taskDateEdit.style.display = "none";
    taskDate.style.display = "inline";
    projectsObj[project][task].date= taskDateEdit.value;
    taskDate.innerText = projectsObj[project][task].date;
    webStorageApi();
    if(forDisplayNextSevenDays){
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

      if (!isInTheNextSevenDays){
        taskLi.remove();
        if (tasksUl.innerHTML == ""){
          tasksUl.remove();
      }
      }
     
    }
    if(forDisplayToday){
      const objDate = parse(
        projectsObj[project][task].date.replaceAll('-', '/'),
        'yyyy/MM/dd',
        new Date()
        );

    if(!isToday(objDate)){
    
      taskLi.remove();
      if (tasksUl.innerHTML == ""){
        tasksUl.remove();
    }
      
    }
    }
 
  })

    taskDate.innerText = projectsObj[project][task].date;
    if (taskDate.innerHTML == ""){taskDate.innerText= "Sin fecha"};
    taskLi.appendChild(taskDate);
    taskLi.appendChild(taskDateEdit);
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText="Borrar";
/////////////////////

const fullStar= `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
</svg>`;


const emptyStar= `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
</svg>`;
 
    const importantButton = document.createElement("button");
    if(projectsObj[project][task].isImportant == false || projectsObj[project][task].isImportant == undefined){
      importantButton.innerHTML=emptyStar;
    }else{  
    importantButton.innerHTML=fullStar;}
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
            if (importantButton.innerHTML == emptyStar) {
              importantButton.innerHTML = fullStar;
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
          
          alert(importantButton.innerHTML == fullStar);
          alert(importantButton.innerHTML);
          alert(emptyStar);
            if (importantButton.innerHTML === `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
        </svg>`) {
                importantButton.innerHTML = fullStar;
                projectsObj[project][task].isImportant=true;
                webStorageApi();
    
            } else {
                importantButton.innerHTML = emptyStar;
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
    taskLi.appendChild(importantButton);

    mouseOverOutClick(markDone,false);
    mouseOverOutClick(deleteButton,false);
    mouseOverOutClick(importantButton,false);

    tasksUl.appendChild(taskLi);
    if(contentAppendChilTasksUl){
    content.appendChild(tasksUl);
    }
    
}

export default newfun;