'use strict'

const fonts = document.querySelectorAll("[data-font-size]");

class Transition {
  constructor() {
     const config = {}; //Configure intersection observer.
     this.observer = new IntersectionObserver();
  }
}

window.addEventListener("offline",
    (e) => console.log(`Failed to load resources 
    due to poor internet connectivity.`))

function addClass(name) {
  for (let i = 0; i < name.length; ++i) {
    const element = document.querySelectorAll(`.${name[i]}`);
    element.forEach(e => e.classList.add(`loaded-${name[i]}`));
  }
}

function loaded(env) {
  setTimeout(addClass, 400, ["fade-in", "fade-up", "slide"]);
}

window.addEventListener("load", loaded);

for (let i = 0, l = document.images.length; i < l; ++i) {
    document.images[i].setAttribute("draggable", "false");
}

for (let i = 0, l = fonts.length; i < l; ++i) {
    let data = fonts[i].getAttribute("data-font-size");
    fonts[i].setAttribute("style", `font-size: ${data}px;`);
}