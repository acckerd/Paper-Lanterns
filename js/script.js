const cursor = document.querySelector(".custom-cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const links = document.querySelectorAll(".menu__link")
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
  cursor.classList.add("_hovered")
  })
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("_hovered")
  })
})
