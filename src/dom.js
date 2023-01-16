import enquire from "enquire.js";
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
  const sidebar = document.getElementById("sidebar");
  const burgerMenu = document.getElementById("burger-menu");
  let isOpen = sidebar.style.display === "flex";

  function closeSidebarOnClickOut(e) {
    if (isOpen) {
      if (
        e.target.closest("#sidebar") == null &&
        e.target.closest("#burger-menu") == null
      ) {
        closeNav();

        document.removeEventListener("click", (e) => {
          closeSidebarOnClickOut(e);
        });
      }
    }
  }

  function upTo768Res(closeSidebarOnClickOut) {}

  function openNav() {
    if (!isOpen) {
      if (sidebar.classList.contains("animate__slideOutRight")) {
        sidebar.classList.remove("animate__slideOutRight");
      }
      sidebar.style.display = "flex";
      isOpen = true;
      sidebar.classList.add("animate__slideInRight");
      setTimeout(() => {
        if (isOpen) {
          document.addEventListener("click", (e) => {
            closeSidebarOnClickOut(e);
          });
        }
      }, 5);
    }
  }

  function closeNav() {
    if (isOpen) {
      if (sidebar.classList.contains("animate__slideInRight")) {
        sidebar.classList.remove("animate__slideInRight");
      }
      sidebar.classList.add("animate__slideOutRight");
      setTimeout(() => {
        if (isOpen) {
          sidebar.style.display = "none";
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
    toggleNav();
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
