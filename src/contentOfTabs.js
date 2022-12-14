import displayImportant from "./displayImportant";
import displayAll from "./displayAll";
import displayNextSevenDays from "./displayNextSevenDays";
import displayToday from "./displayToday";

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
    
    switch(type){
        case "important":
            displayImportant(content); 
            break;
        case "all": 
            displayAll(content);
            break;
        case "seven":
            displayNextSevenDays(content);
            break;
        case "today":
            displayToday(content);
            break;
    }
}

export default contentOfTabs;