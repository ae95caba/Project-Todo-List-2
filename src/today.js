const today = ()=>{
    const currentContent = document.getElementById("content");
    currentContent.remove();
    const content = document.createElement("div");
    content.id = "content";
    const tittle = document.createElement("div");
    tittle.innerText="Today";
    tittle.id="tittle";
    content.appendChild(tittle);
    document.body.appendChild(content);
}

export default today;