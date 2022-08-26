const panels = document.querySelectorAll(".panel");
const panelsArray = [...panels];

function toggleOpen(){
    this.classList.toggle("open");
}

function toggleActive(e){
    if (e.propertyName.includes('flex')){
    this.classList.toggle("open-active");
}}


panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

/* Function for animation on click */


// panels.forEach(function (panel){
// panel.addEventListener("mouseover", function(){
//     this.classList.add("open", "open-active");
// });
// panel.addEventListener("mouseout", function(){
//     this.classList.remove("open", "open-active");
// });
// });


/* Function for animation on mouseover */