
import tasksArr from "./projectsArr";
import TaskConstructor from "./TaskConstructor";
import { showTasksList } from "./showTasksList";

const addTask = ()=>{
/// gets addTaskButton and content from project content
    const addTaskButton = document.getElementById("add-task-button");
    const content = document.getElementById("content");

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

    const detailsInput = document.createElement("textarea");
    detailsInput.rows="4";
    detailsInput.cols="50";
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
    
    addButton.addEventListener("click",()=>{ 
        tasksArr.push(new TaskConstructor(tittleInput.value,detailsInput.value));
        addTaskButton.style.display = "inline";
        form.style.display= "none";
        showTasksList(content,addTaskButton);

    });

    cancelButton.addEventListener("click",()=>{
        form.style.display= "none";
        addTaskButton.style.display = "inline";
    })
    
    
}

export default addTask;