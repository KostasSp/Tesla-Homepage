const openMenu = () => {
  document.querySelector(".backdrop").classList = "backdrop active";
  document.querySelector("aside").classList = "active";
};

const closeMenu = () => {
  document.querySelector(".backdrop").classList = "backdrop";
  document.querySelector("aside").classList = "";
};

document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};

document.querySelector("aside button.close-button").onclick = () => {
  closeMenu();
};

document.querySelector(".backdrop").onclick = () => {
  closeMenu();
};
