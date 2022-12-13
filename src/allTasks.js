import displayAll from "./displayAll";
import newfun from "./newfun";

const allTasks = ()=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();
    const content = document.createElement("div");
    content.id = "content";
    const tittle = document.createElement("div");
    tittle.innerText="Todas las tareas";
    tittle.id="tittle";
    content.appendChild(tittle);
    document.body.appendChild(content);
    displayAll(content);
   
}

export default allTasks;