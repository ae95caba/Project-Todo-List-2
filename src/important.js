import displayImportant from "./new";

const important = ()=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();

    const content = document.createElement("div");
    content.id = "content";

    const tittle = document.createElement("div");
    tittle.innerText="Important";
    tittle.id="tittle";

    content.appendChild(tittle);
    document.body.appendChild(content);
    displayImportant(content);
}

export default important;