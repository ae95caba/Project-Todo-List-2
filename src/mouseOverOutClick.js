const mouseOverOutClick = (button, clickedClass = true) => {
  //the clickedclass=true is for setting it false on buttons that i dont want to have the clicked class
  button.addEventListener("mouseover", () => {
    if (!button.classList.contains("clicked")) {
      button.classList.add("hovered");
    }
  });

  button.addEventListener("mouseout", () => {
    button.classList.remove("hovered");
  });

  if (clickedClass) {
    button.addEventListener("click", () => {
      let previuslyClicked = document.querySelector(".clicked");
      if (previuslyClicked == null) {
      } else {
        previuslyClicked.classList.remove("clicked");
      }

      button.classList.add("clicked");
      button.classList.remove("hovered");
    });
  }
};

export default mouseOverOutClick;
