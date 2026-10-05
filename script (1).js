document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".primary-btn, .secondary-btn, .nav-button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-1px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
    });
  });
});