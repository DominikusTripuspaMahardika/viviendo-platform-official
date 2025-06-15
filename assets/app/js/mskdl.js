//musik autoplay
const musicList = [
  "../audio/Plants_vs_Zombies_Soundtrack_1.mp3",
  "../audio/Plants_vs_Zombies_Soundtrack_2.mp3",
  "../audio/Plants_vs_Zombies_Soundtrack_3.mp3",
  "../audio/Plants_vs_Zombies_Soundtrack_4.mp3",
  "../audio/Plants_vs_Zombies_Soundtrack_5.mp3",
  "../audio/Plants_vs_Zombies_Soundtrack_6.mp3"
];

let currentTrack = Math.floor(Math.random() * musicList.length);
const audio = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = playPauseBtn.querySelector("i");

function loadTrack(index) {
  audio.src = musicList[index];
  audio.load();
}

function playTrack() {
  audio.play();
  playPauseIcon.classList.replace("fa-play", "fa-pause");
  playPauseIcon.classList.add("fa-animated"); // Optional: custom animation class
}

function pauseTrack() {
  audio.pause();
  playPauseIcon.classList.replace("fa-pause", "fa-play");
  playPauseIcon.classList.add("fa-animated"); // Optional: custom animation class
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + musicList.length) % musicList.length;
  loadTrack(currentTrack);
  playTrack();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % musicList.length;
  loadTrack(currentTrack);
  playTrack();
});

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    playTrack();
  } else {
    pauseTrack();
  }
});

// Auto-load musik random pertama
loadTrack(currentTrack);