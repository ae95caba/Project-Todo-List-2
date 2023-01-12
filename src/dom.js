function loggingButton(callBack) {
  const loggingButton = document.getElementById("submit-button");
  loggingButton.addEventListener("click", callBack());
}

const loggingForm = {
  element: document.getElementById("logging-form"),
  addCloseEvent: function () {
    const closeLogging = document.getElementById("close-logging");
    closeLogging.addEventListener("click", () => {
      this.element.style.display = "none";
    });
  },
  close: function () {
    this.element.style.display = "none";
  },
  addOpenEvent: function () {
    const openLogging = document.getElementById("open-logging");
    openLogging.addEventListener("click", () => {
      this.element.style.display = "flex";
    });
  },
  open: function () {
    this.element.style.display = "flex";
  },
};

const burgerMenu = () => {
  function openNav() {
    document.getElementById("sidebar").style.display = "flex";
  }

  function closeNav() {
    document.getElementById("sidebar").style.display = "none";
  }

  function toggleNav() {
    if (document.getElementById("sidebar").style.display !== "flex") {
      openNav();
    } else {
      closeNav();
    }
  }

  const burgerMenu = document.getElementById("burger-menu");
  burgerMenu.addEventListener("click", () => toggleNav());
};

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

export { loggingButton, loggingForm, mouseOverOutClick, burgerMenu };
