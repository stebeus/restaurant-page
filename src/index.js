import { createNewElement } from "./util";

const content = document.querySelector("#content");

const heading = createNewElement("h1", {}, "Mario's Ristorante");
const subheading = createNewElement("h2", {}, "Ciao, cliente!");

content.append(heading, subheading);
