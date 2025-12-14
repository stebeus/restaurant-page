import { createNewElement } from "./util";

const content = document.querySelector("#content");

const heading = createNewElement("h1", {}, "Mario's Ristorante");

content.append(heading);
