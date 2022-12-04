
import { projectsObj } from "./projectsObj";

import { showTasksList } from "./showTasksList";


const addTask = ()=>{
/// gets elements 
    const addTaskButton = document.getElementById("add-task-button");
    const content = document.getElementById("content");
    const tittle = document.getElementById("tittle");
    ////

    addTaskButton.style.display = "none";

/// creates form
    const form = document.createElement("form");
    form.id="form";

    const tittleLabel = document.createElement("label");
    tittleLabel.for="tittle-input"
    tittleLabel.innerText = "Tittle:"

    const tittleInput = document.createElement("input");
    tittleInput.type = "text";
    tittleInput.id = "tittle-input";

    const detailsLabel = document.createElement("label");
    detailsLabel.for="details-input"
    detailsLabel.innerText = "Details(Optional):"

    const detailsInput = document.createElement("input");
    
    detailsInput.id = "details-input";

    const addButton=document.createElement("button");
    addButton.type = "button";
    addButton.innerText="Add";

    const cancelButton=document.createElement("button");
    cancelButton.type = "button";
    cancelButton.innerText="Cancel";

    form.appendChild(tittleLabel);
    form.appendChild(tittleInput);
    form.appendChild(detailsLabel);
    form.appendChild(detailsInput);
    form.appendChild(addButton);
    
    form.appendChild(cancelButton);

    content.appendChild(form);
// ends form creation //

    
    addButton.addEventListener("click",()=>{ 
        projectsObj[tittle.innerText][tittleInput.value]={};
        projectsObj[tittle.innerText][tittleInput.value]={details: detailsInput.value, test: "hola"};
        
        addTaskButton.style.display = "inline";
        form.style.display= "none";
        showTasksList(content,addTaskButton,tittle);

    });

    cancelButton.addEventListener("click",()=>{
        form.style.display= "none";
        addTaskButton.style.display = "inline";
    })
    
    
}

export default addTask;