const burger = document.querySelector("#berger");
const menu = document.querySelector("#menu");

berger.addEventListener("click", (e) => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});