// const themeButton = document.querySelector('.menu__link-one')
// themeButton.addEventListener ('click', () => {themeButton.classList.toggle('_active')})

const cursor = document.querySelector(".custom-cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
