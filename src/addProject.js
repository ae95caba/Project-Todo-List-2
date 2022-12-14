import projectContent from "./projectContent";
import mouseOverOutClick from "./mouseOverOutClick";
import { projectsObj } from "./projectsObj";
import webStorageApi from "./webStorageApi";


const addProject = ()=>{
    
    //searchs for html elements , projectDiv is hidden by default with css display:none
    const projectDiv = document.getElementById("new-project-div");
    const addProjectButton = document.getElementById("add-project-button");
    const addButton = document.getElementById("add");//in projectDiv
    addButton.classList.add("add-button");
    const cancelButton = document.getElementById("cancel");//in projectDiv
    cancelButton.classList.add("cancel-button");
const projectsList = document.getElementById("projects-list");
const input = document.getElementById("input");//in projectDiv

    ////////////////////////////////////////
    
    addProjectButton.addEventListener("click",()=>{
        
        addProjectButton.style.display = "none";
        projectDiv.style.display = "flex"; 
    });

    cancelButton.addEventListener("click",()=>{
        projectDiv.style.display = "none";
        addProjectButton.style.display = "inline"
        input.value = "";
    });

    mouseOverOutClick(cancelButton);
    mouseOverOutClick(addButton);
    addButton.addEventListener("click",()=>{
    
        const newDiv = document.createElement("div");
           const newProjectButton = document.createElement("button");//its the new created project
        newProjectButton.innerText = input.value;

        newDiv.appendChild(newProjectButton);
        newDiv.className= "new-div";

        const deleteNewProject = document.createElement("button");
        deleteNewProject.innerText = "X";
        mouseOverOutClick(deleteNewProject);

        newDiv.appendChild(deleteNewProject);

        projectsList.insertBefore(newDiv, addProjectButton)
        projectDiv.style.display = "none";
        addProjectButton.style.display = "inline" 
        projectsObj[newProjectButton.innerText]={};
        webStorageApi();
        input.value = "";

        //add to the new project created, its own content
        newProjectButton.addEventListener("click",()=> projectContent(newProjectButton.innerText));
        /////////////////////  ADD HIGHLITHED AND SELECTED CSS PROPERTIES ///////////////////////////
        mouseOverOutClick(newProjectButton);
        ////
        deleteNewProject.addEventListener("click",()=>{
            newDiv.remove();
            delete projectsObj[newProjectButton.innerText];
            webStorageApi();
            const currentContent = document.getElementById("content");
            
            currentContent.remove();
            const content = document.createElement("div");
            content.id = "content";
            document.body.appendChild(content);

        });
     
                        
    })
}

export default addProject;