function createNewElement(tag, attributes, ...children) {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  children.forEach(child => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}

export { createNewElement };
