import displayNextSevenDays from "./displayNextSevenDays";

const nextSevenDays = ()=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();
    const content = document.createElement("div");
    content.id = "content";
    const tittle = document.createElement("div");
    tittle.innerText="Siguientes 7 dias";
    tittle.id="tittle";
    content.appendChild(tittle);
    document.body.appendChild(content);
    displayNextSevenDays(content);
}

export default nextSevenDays;