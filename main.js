'use strict'

const fade = document.querySelectorAll(".fade-up");
const register_btn = document.getElementById("register");

const play_button = document.querySelectorAll(".playpause");
const videos = document.getElementsByTagName("video");

//Create hash database
let hash_tag_map = new Map();

function initVideos()
{
    //Play the video after the interaction
    for (let i = 0, l = videos.length; i < l; ++i) {
        const video = videos[i];
        
        video.addEventListener("click", e => {
            //Get pause button
            const pause_button = video.nextElementSibling;

            if (!video.paused) {
                pause_button.classList.remove("invisible");
                video.pause();
            } else {
                pause_button.classList.add("invisible");
                video.play();
            }
        });
    }
    
    for (let i = 0, l = play_button.length; i < l; ++i) {
        play_button[i].addEventListener("click", (env) => {
            //Get the video
            const parent_video = play_button[i].previousElementSibling;
            
            //Break play button
            play_button[i].classList.add("invisible");
            
            parent_video.paused ? parent_video.play() : parent_video.pause();
        })
    }
}

function main() {
    initVideos();

    register_btn.addEventListener("click", (event) => {
        window.location.hash = '#enroll'
    })
    
    window.addEventListener("load", (env) => {
        setTimeout(() => {
            fade.forEach(e => e.classList.add("loaded"))
        }, 400);  
    })
    
    for (let i = 0; i < document.images.length; ++i) {
        document.images[i].setAttribute("draggable", "false");
    }
}

main();