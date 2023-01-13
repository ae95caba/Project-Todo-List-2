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
  const sideBar = document.getElementById("sidebar");
  let isOpen = sideBar.style.display === "flex";

  function closeOnClickOut(e) {
    if (e.target.closest("#sidebar") == null) {
      closeNav();

      document.removeEventListener("click", closeOnClickOut);
    }
  }

  function openNav() {
    if (sideBar.classList.contains("animate__slideOutRight")) {
      sideBar.classList.remove("animate__slideOutRight");
    }
    sideBar.style.display = "flex";
    sideBar.classList.add("animate__slideInRight");
    setTimeout(() => {
      document.addEventListener("click", closeOnClickOut);
    }, 5);

    isOpen = true;
  }

  function closeNav() {
    if (sideBar.classList.contains("animate__slideinRight")) {
      sideBar.classList.remove("animate__slideinRight");
    }
    sideBar.classList.add("animate__slideOutRight");
    setTimeout(() => {
      sideBar.style.display = "none";
    }, 1000);
    isOpen = false;
  }

  function toggleNav() {
    if (!isOpen) {
      openNav();
    } else {
      closeNav();
    }
  }

  const burgerMenu = document.getElementById("burger-menu");
  burgerMenu.addEventListener("click", () => {
    /*  burgerMenu.classList.add("animate__pulse");
    burgerMenu.classList.remove("animate__pulse"); */
    toggleNav();
  });
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
