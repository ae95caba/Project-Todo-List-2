import displayImportant from "./displayImportant";

const contentOfTabs = (name, type)=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();

    const content = document.createElement("div");
    content.id = "content";

    const tittle = document.createElement("div");
    tittle.innerText=name;
    tittle.id="tittle";

    content.appendChild(tittle);
    document.body.appendChild(content);
    displayImportant(content);
}

export default important;