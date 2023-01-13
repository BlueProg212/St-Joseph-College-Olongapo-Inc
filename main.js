const fade = document.querySelectorAll(".fade-up");

window.onload = (env) => {
    setTimeout(() => {
        fade.forEach(e => e.classList.add("loaded"))
    }, 400);  
};