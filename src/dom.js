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

function burgerMenu() {
  const sideBar = document.getElementById("sidebar");
  const burgerMenu = document.getElementById("burger-menu");
  let isOpen = sideBar.style.display === "flex";

  function closeOnClickOut(e) {
    console.log("funcion problema");
    if (isOpen) {
      if (
        e.target.closest("#sidebar") == null &&
        e.target.closest("#burger-menu") == null
      ) {
        closeNav();

        document.removeEventListener("click", closeOnClickOut);
      }
    }
  }

  function openNav() {
    if (!isOpen) {
      if (sideBar.classList.contains("animate__slideOutRight")) {
        sideBar.classList.remove("animate__slideOutRight");
      }
      sideBar.style.display = "flex";
      isOpen = true;
      sideBar.classList.add("animate__slideInRight");
      setTimeout(() => {
        if (isOpen) {
          document.addEventListener("click", closeOnClickOut);
        }
      }, 5);
    }
  }

  function closeNav() {
    if (isOpen) {
      if (sideBar.classList.contains("animate__slideInRight")) {
        sideBar.classList.remove("animate__slideInRight");
      }
      sideBar.classList.add("animate__slideOutRight");
      setTimeout(() => {
        if (isOpen) {
          sideBar.style.display = "none";
          isOpen = false;
        }
      }, 1000);
    }
  }

  function toggleNav() {
    if (!isOpen) {
      openNav();
    } else {
      closeNav();
    }
  }

  burgerMenu.addEventListener("click", () => {
    console.log(isOpen);
    toggleNav();
    console.log(isOpen);
  });
}

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
