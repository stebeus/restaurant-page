import { createNewElement } from "./util";
import pizzaImg from "./assets/fabrizio-pullara.jpg";

const content = document.querySelector("#content");

const heading = createNewElement("h1", {}, "Mario's Ristorante");
const subheading = createNewElement("h2", {}, "Ciao, cliente!");
const bodyText = createNewElement(
  "p",
  {},
  "Welcome to Mario's Ristorante, where classic Italian flavors meet a warm, family-run atmosphere. Inspired by traditional recipes and simple, honest ingredients, our kitchen serves timeless dishes crafted with care!"
);
const picture = createNewElement("img", {
  src: pizzaImg,
  alt: "Italian pizza getting removed from the wood-fired oven",
  width: "640",
  height: "426",
});

content.append(heading, subheading, bodyText, picture);
