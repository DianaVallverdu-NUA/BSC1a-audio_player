// create the audio player object
const audioPlayer = new Audio();

// select play pause button element
const playPauseButton = document.getElementById("play-button");

// select progress slider
const progressSlider = document.getElementById("progress-slider");

// audioPlayer.src is the first song of the audio player by default
audioPlayer.src = "assets/sound/Sucks.mp3";

let playing = false;

/**
 * if audio player is playing -> do not play sound
 * if audio player is not playing -> play sound
 */
function onPlayPauseClick() {
  if (playing) {
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
  progressSlider.max = audioPlayer.duration;
}

/**
 * 
 */
function onTimeUpdate() {
  progressSlider.value = audioPlayer.currentTime;
}

function onEnd() {
  progressSlider.value = 0;
  playPauseButton.innerHTML = "Play";
  playing = false;
}

//link all events to relevant objects
playPauseButton.onclick = onPlayPauseClick;
audioPlayer.onloadedmetadata = onLoadedMetadata;
audioPlayer.ontimeupdate = onTimeUpdate;
audioPlayer.onended = onEnd;