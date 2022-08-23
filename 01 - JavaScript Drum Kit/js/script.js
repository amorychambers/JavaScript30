const keys = document.querySelectorAll(".key");

/* window.addEventListener("keyup", function(e){
    const input = (e.key).toLowerCase();
    const div = document.querySelector(`.key[data-key=${input}]`);
    div.classList.remove("playing");
});*/

function playSound(e){
    const input = (e.key).toLowerCase();
    const audio = document.querySelector(`audio[data-key=${input}]`);
    if (!audio) return; // Stops function if no matching audio
    audio.currentTime = 0; // Rewinds to start of audio
    audio.play();
    const div = document.querySelector(`.key[data-key=${input}]`);
    div.classList.add("playing");
};

function removeTransition(){
    this.classList.remove("playing");
};


window.addEventListener("keydown", playSound);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
