
const playbtn=document.body.querySelector("#playbtn")
const pausebtn=document.body.querySelector("#pausebtn")
function pushPlayPause(){
    playbtn.classList.toggle("hidden")
    pausebtn.classList.toggle("hidden")
}
playbtn.addEventListener("click",pushPlayPause)
pausebtn.addEventListener("click",pushPlayPause)