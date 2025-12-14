import { home } from "./components/home";
import { menu } from "./components/menu";
import { about } from "./components/about";

const btns = document.querySelectorAll("button");
const content = document.querySelector("#content");

const pages = { home, menu, about };

function loadPage(page) {
  content.innerHTML = "";
  content.innerHTML = page;
}

function handleBtn(btn) {
  const page = pages[btn.value];
  btn.addEventListener("click", () => loadPage(page));
}

btns.forEach(handleBtn);

loadPage();
