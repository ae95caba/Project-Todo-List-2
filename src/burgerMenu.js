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

export default burgerMenu;
