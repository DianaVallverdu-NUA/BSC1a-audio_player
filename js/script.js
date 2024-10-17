// create the audio player object
const audioPlayer = new Audio();

// select play pause button element
const playPauseButton = document.getElementById("play-button");

// audioPlayer.src is the first song of the audio player by default
audioPlayer.src = "assets/sound/Sucks.mp3";

let playing = false;

/**
 * if audio player is playing -> do not play sound
 * if audio player is not playing -> play sound
 */
function onPlayPauseClick() {
  if(playing) {
    audioPlayer.pause();
    playPauseButton.innerHTML = "Play";
    playing = false;
  } else {
    audioPlayer.play();
    playPauseButton.innerHTML = "Pause";
    playing = true;
  }
}

/**
 * 
 */
function onLoadedMetadata() {
  console.log(audioPlayer.duration);
}

//link all events to relevant objects
playPauseButton.onclick = onPlayPauseClick;
audioPlayer.onloadedmetadata = onLoadedMetadata;
