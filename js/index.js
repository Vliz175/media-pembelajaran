const burger = document.getElementById("burger");
const sidebar = document.getElementById("menu");
const btnClose = document.getElementById("close");

burger.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});
