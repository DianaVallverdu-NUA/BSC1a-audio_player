const playButton = document.getElementById("play_button");

const audioPlayer = document.createElement("audio");
audioPlayer.src = "assets/audio/Me Jode - Las Dianas.mp3";

let playing = false;

function playAudio() {
  audioPlayer.play();
  playButton.src = "assets/icons/pause.svg";
}

function pauseAudio() {
  audioPlayer.pause();
  playButton.src = "assets/icons/play.svg";
}

function onPlayButtonClick() {
  if (!playing) playAudio();
  else pauseAudio();
  playing = !playing;
}

playButton.onclick = onPlayButtonClick;
