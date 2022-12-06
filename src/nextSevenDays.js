import displayNextSevenDays from "./displayNextSevenDays";

const nextSevenDays = ()=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();
    const content = document.createElement("div");
    content.id = "content";
    const tittle = document.createElement("div");
    tittle.innerText="Next seven days";
    tittle.id="tittle";
    content.appendChild(tittle);
    document.body.appendChild(content);
    displayNextSevenDays(content);
}

export default nextSevenDays;