// get elements from page
const playButton = document.getElementById("play_button");

// create audio player
const audioPlayer = document.createElement("audio");
audioPlayer.src = "assets/audio/Me Jode - Las Dianas.mp3";

let playing = false;

// everything that needs to  happen when audio is played
function playAudio() {
  audioPlayer.play();
  playButton.src = "assets/icons/pause.svg";
}

// everything that needs to happen when audio is paused
function pauseAudio() {
  audioPlayer.pause();
  playButton.src = "assets/icons/play.svg";
}

// everything that needs to happen when button is clicked
function onPlayButtonClick() {
  if (!playing) playAudio();
  else pauseAudio();
  playing = !playing;
}

// set the onclick event of playButton to onPlayButtonClick function
playButton.onclick = onPlayButtonClick;
