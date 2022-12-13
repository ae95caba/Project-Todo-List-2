import { projectsObj } from "./projectsObj";

function webStorageApi(){
   let projectsObjStorage = JSON.stringify(projectsObj);
    localStorage.setItem("data",projectsObjStorage);
    
}

export default webStorageApi;