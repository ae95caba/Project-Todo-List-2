import projectContent from "./projectContent";
import mouseOverOutClick from "./mouseOverOutClick";
import { projectsObj } from "./projectsObj";
import webStorageApi from "./webStorageApi";


const addProject = ()=>{
    
    //searchs for html elements , projectLi is hidden by default with css display:none
    const projectLi = document.getElementById("new-project-li");
    const addProjectButton = document.getElementById("add-project-button");
    const addButton = document.querySelector(".add");//in projectLi
    
    const cancelButton = document.querySelector(".cancel");//in projectLi
   
const projectsList = document.getElementById("projects-list");
const input = document.getElementById("input");//in projectLi

    ////////////////////////////////////////
    
    addProjectButton.addEventListener("click",()=>{
       
        addProjectButton.style.display = "none";
        projectLi.classList.remove('hidden'); 
    });

    cancelButton.addEventListener("click",()=>{
        projectLi.classList.add ('hidden');
        addProjectButton.style.display = "flex"
        input.value = "";
    });

    mouseOverOutClick(cancelButton);
    mouseOverOutClick(addButton);
    addButton.addEventListener("click",()=>{
    
        const newLi = document.createElement("li");
        const newProjectButton = document.createElement("button");//its the new created project
          
         
           
           newLi.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
           <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>`;
        newProjectButton.appendChild(document.createTextNode(input.value));
           

        newLi.appendChild(newProjectButton);
        newLi.className= "new-li";

        const deleteNewProject = document.createElement("button");
        deleteNewProject.innerText = "X";
        mouseOverOutClick(deleteNewProject);

        newLi.appendChild(deleteNewProject);

        projectsList.insertBefore(newLi, addProjectButton)
        projectLi.classList.add('hidden');
        addProjectButton.style.display = "flex" 
        projectsObj[newProjectButton.innerText]={};
        webStorageApi();
        input.value = "";

        //add to the new project created, its own content
        newProjectButton.addEventListener("click",()=> projectContent(newProjectButton.innerText));
        /////////////////////  ADD HIGHLITHED AND SELECTED CSS PROPERTIES ///////////////////////////
        mouseOverOutClick(newLi);
        ////
        deleteNewProject.addEventListener("click",()=>{
            newLi.remove();
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