// create the audio player object
const audioPlayer = new Audio();

// select play pause button element
const playPauseButton = document.getElementById("play-button");

// select progress slider
const progressSlider = document.getElementById("progress-slider");

// select volume slider
const volumeSlider = document.getElementById("volume-slider");

// select progress text spans
const progressText = document.getElementById("progress-text");
const durationText = document.getElementById("duration-text");

// audioPlayer.src is the first song of the audio player by default
audioPlayer.src = "assets/sound/Sucks.mp3";

let playing = false;
let updatingProgress = false;

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

  durationText.innerHTML = secondsToMMSS(audioPlayer.duration);
}

/**
 *
 */
function onTimeUpdate() {
  if (!updatingProgress) {
    progressSlider.value = audioPlayer.currentTime;
  }

  progressText.innerHTML = secondsToMMSS(audioPlayer.currentTime);
}

function onEnd() {
  progressSlider.value = 0;
  playPauseButton.innerHTML = "Play";
  playing = false;
  progressText.innerHTML = "00:00";
}

/**
 * take value of the volumeSlider and update audioPlayer.volume
 */
function onVolumeSliderChange() {
  audioPlayer.volume = volumeSlider.value * 0.01;
}

function onProgressMouseDown() {
  updatingProgress = true;
}

function onProgressSliderChange() {
  audioPlayer.currentTime = progressSlider.value;
  updatingProgress = false;
}

function secondsToMMSS(seconds) {
  const integerSeconds = parseInt(seconds);

  //calculate seconds
  let MM = parseInt(integerSeconds / 60);
  if (MM < 10) MM = "0" + MM;

  //calculate minutes
  let SS = integerSeconds % 60;
  if (SS < 10) SS = "0" + SS;

  return MM + ":" + SS;
}

//link all events to relevant objects
playPauseButton.onclick = onPlayPauseClick;
audioPlayer.onloadedmetadata = onLoadedMetadata;
audioPlayer.ontimeupdate = onTimeUpdate;
audioPlayer.onended = onEnd;
volumeSlider.onchange = onVolumeSliderChange;
progressSlider.onchange = onProgressSliderChange;
progressSlider.onmousedown = onProgressMouseDown;
