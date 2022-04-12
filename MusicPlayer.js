//import DOM elements 
const musicContainer = document.querySelector(".music-container");
const progressContainer = document.querySelector(".progress-container")
const progress = document.querySelector(".progress")
const audio = document.querySelector("#audio")
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const playBtn = document.getElementById("play")
const title = document.getElementById("title")
const cover = document.getElementById("cover") 

//Get songs into an Array
const songs = ["one", "two", "three"]

//keep track of songs
let songIndex = 1

//initialize songs
loadSong(songs[songIndex])

//update song details(three things we want to update is src, img src, title, song)
function loadSong(song) {
    title.innerText = song;
    audio.src = `./music/${song}.mp3`;
    cover.src = `./pictures/${song}.jpg`

}

function playSong() {
    musicContainer.classList.toggle("play");
}

function pauseSong() {

}

//declare events
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.toggle("play")

    if(isPlaying) {
        pauseSong()
    }else {
        playSong
    }
})
