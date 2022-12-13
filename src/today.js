import displayToday from "./displayToday";

const today = ()=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();
    const content = document.createElement("div");
    content.id = "content";
    const tittle = document.createElement("div");
    tittle.innerText="Hoy";
    tittle.id="tittle";
    content.appendChild(tittle);
    document.body.appendChild(content);
    displayToday(content);
}

export default today;