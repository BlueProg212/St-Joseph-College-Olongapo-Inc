'use strict'

const fade_up = document.querySelectorAll(".fade-up");
const slide = document.querySelectorAll(".slide-right");
const fade_in = document.querySelectorAll(".fade-in");

const fonts = document.querySelectorAll("[data-font-size]");

window.addEventListener("load", (env) => {
    setTimeout(() => {
        fade_up.forEach(e => e.classList.add("loaded-fade-up"));
        slide.forEach(e => e.classList.add("loaded-slide"));
        fade_in.forEach(e => e.classList.add("loaded-fade-in"));
    }, 400);
})

for (let i = 0, l = document.images.length; i < l; ++i) {
    document.images[i].setAttribute("draggable", "false");
}

for (let i = 0, l = fonts.length; i < l; ++i) {
    let data = fonts[i].getAttribute("data-font-size");
    fonts[i].style = `font-size: ${data}px`;
}