import { home } from "./components/home";
import { menu } from "./components/menu";
import { about } from "./components/about";

const btn = document.querySelector("button");
const content = document.querySelector("#content");

function loadPage(page) {
  content.innerHTML = "";
  content.innerHTML = page;
}

loadPage();
