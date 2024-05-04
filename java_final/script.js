const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const link = document.querySelector(".lnk")
console.log(link);

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});


link.addEventListener("click", () => {
  menu.classList.remove("open");
});
