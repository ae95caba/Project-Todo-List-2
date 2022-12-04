const mouseOverOutClick = (button)=>{

    button.addEventListener('mouseover',  ()=> {
        
        if(button.className !=="clicked"){
        button.setAttribute('class', 'hovered');
        }
    });

    button.addEventListener('mouseout',  ()=> {
        
        if(button.className !=="clicked"){
        button.removeAttribute('class');}

    });

    button.addEventListener('click',  ()=> {
        
        let previuslyClicked = document.querySelector(".clicked");
        if (previuslyClicked==null){}else{
            previuslyClicked.removeAttribute('class');
        }
        
        button.setAttribute('class', 'clicked');   
    });

}

export default mouseOverOutClick;