const navToggleBtn = document.getElementById("mobile-nav-toggle");
const primaryNavElem = document.getElementById("primary-nav");

navToggleBtn.addEventListener("click", () => {
  const isVisible = primaryNavElem.dataset.visible;

  if (isVisible === "false") {
    primaryNavElem.dataset.visible = true;
    navToggleBtn.setAttribute("aria-expanded", true);
  } else {
    primaryNavElem.dataset.visible = false;
    navToggleBtn.setAttribute("aria-expanded", false);
  }
});
