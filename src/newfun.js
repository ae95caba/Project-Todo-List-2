import { projectsObj } from "./projectsObj";
import mouseOverOutClick from "./mouseOverOutClick";
import webStorageApi from "./webStorageApi";
import {isToday} from "date-fns";
import {isWithinInterval, addDays, parse} from "date-fns";





function newfun(project,tasksUl,task,content,contentAppendChilTasksUl=true,forDisplayImportant=false, forDisplayNextSevenDays=false, forDisplayToday=false){
    
    const taskLi = document.createElement("li");
    const taskP = document.createElement("p");
    taskP.innerText=task;



    

    const markDone = document.createElement("img");
    taskLi.appendChild(markDone);

    taskLi.appendChild(taskP);
    
    

   
    const taskDetails = document.createElement("p");
    if(projectsObj[project][task].details){
      taskDetails.innerText = ": ";
      taskDetails.innerText+=projectsObj[project][task].details;
    }
    taskLi.appendChild(taskDetails);

    

    

    const taskDate = document.createElement("p");
    
    const taskDateEdit = document.createElement("input");
    taskDateEdit.type = "date";
    taskDateEdit.style.display = "none";

  taskDate.addEventListener("click",()=>{
    taskDateEdit.style.display = "inline";
    taskDate.style.display = "none";
    if(taskDate.innerText == "Sin fecha"){

    }else{
      taskDateEdit.value=taskDate.innerText;
    }
    
  })

  taskDateEdit.addEventListener("focusout",()=>{

    taskDateEdit.style.display = "none";
    taskDate.style.display = "inline";
    projectsObj[project][task].date= taskDateEdit.value;
    taskDate.innerText = projectsObj[project][task].date;
    if (taskDate.innerText == ""){taskDate.innerText="Sin fecha";};
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
    deleteButton.innerText="X";
/////////////////////

const fullStar= `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
</svg>`;


const emptyStar= `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
</svg>`;
 
    const importantButton = document.createElement("img");
    if(projectsObj[project][task].isImportant == false || projectsObj[project][task].isImportant == undefined){
     
      importantButton.src="star-outline.svg";
    }else{  
      
    importantButton.src="star.svg";}
///////////////////////////////
   
    
    

    if(projectsObj[project][task].isDone == false || projectsObj[project][task].isDone == undefined){
      markDone.src="circle-outline.svg";
      taskP.style.textDecoration ="none";
      taskP.style.opacity="1";
    taskDetails.style.textDecoration ="none";
    taskDetails.style.opacity="1";
      
    }else{
    markDone.src="check-circle.svg";
    taskP.style.textDecoration ="line-through";
    taskP.style.opacity="0.3";
    taskDetails.style.textDecoration ="line-through";
    taskDetails.style.opacity="0.3";
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
            if (importantButton.getAttribute("src") == "star-outline.svg") {
              importantButton.src = "star.svg";
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
          
       
            if (importantButton.getAttribute("src") == "star-outline.svg") {
                importantButton.src = "star.svg";
                projectsObj[project][task].isImportant=true;
                webStorageApi();
    
            } else {
                importantButton.src = "star-outline.svg";
                projectsObj[project][task].isImportant=false;
                webStorageApi();
    
            }          
            })
    }
/////////////////////////////
    markDone.addEventListener("click",()=>{  
      if (markDone.getAttribute("src") == "circle-outline.svg") {
        markDone.src = "check-circle.svg";
        
        taskP.style.textDecoration ="line-through";
        taskP.style.opacity="0.3";
        taskDetails.style.textDecoration ="line-through";
        taskDetails.style.opacity="0.3";
        projectsObj[project][task].isDone=true;
        webStorageApi();

      } else {
        markDone.src = "circle-outline.svg";
        
        taskP.style.textDecoration ="none";
        taskP.style.opacity="1";
        taskDetails.style.textDecoration ="none";
        taskDetails.style.opacity="1";
        
        projectsObj[project][task].isDone=false;
        webStorageApi();

      }          
    })
/////////////////////////         
    //taskLi.appendChild(markDone);
    
    taskLi.appendChild(importantButton);
    taskLi.appendChild(deleteButton);

    //mouseOverOutClick(markDone,false);
    //mouseOverOutClick(deleteButton,false);
    //mouseOverOutClick(importantButton,false);

    tasksUl.appendChild(taskLi);
    if(contentAppendChilTasksUl){
    content.appendChild(tasksUl);
    }
    
}

export default newfun;