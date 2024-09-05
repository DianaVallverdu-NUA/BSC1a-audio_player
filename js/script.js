// song info
const songName = document.getElementById("song_name");
const artistName = document.getElementById("artist_name");
const songCover = document.getElementById("song_cover");

// buttons
const playButton = document.getElementById("play_button");
const nextButton = document.getElementById("next_button");
const previousButton = document.getElementById("previous_button");

// sliders
const volumeSlider = document.getElementById("volume_slider");
const progressSlider = document.getElementById("progress_slider");

// text
const timeDisplayTotal = document.getElementById("time_display_total");
const timeDisplayCurrent = document.getElementById("time_display_current");

// create audio player
const audioPlayer = document.createElement("audio");
audioPlayer.volume = 0.5;
audioPlayer.src = "assets/audio/Me Jode - Las Dianas.mp3";

// playlist
const songs = [
  {
    name: "Me Jode",
    artist: "Las Dianas",
    src: "assets/audio/Me Jode - Las Dianas.mp3",
    cover: "assets/covers/dianas.png",
  },

  {
    name: "Si Quieres",
    artist: "Carino",
    src: "assets/audio/Si Quieres - Carino.mp3",
    cover: "assets/covers/si_quieres.jpeg",
  },
];

// set playing at sond index to 0
let playing = false;
let songIndex = 0;

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

// when a new src is loaded, update timings
function onLoadedMetadata() {
  // reset progress slider
  progressSlider.max = Math.floor(audioPlayer.duration);
  progressSlider.value = 0;

  // reset time display
  const minutesSeconds = secondsToMMSS(Math.floor(audioPlayer.duration));
  timeDisplayTotal.innerHTML = minutesSeconds;
  timeDisplayCurrent.innerHTML = "00:00";
}
audioPlayer.onloadedmetadata = onLoadedMetadata;

// restart playing after change of song
function updatePlayingSong() {
  audioPlayer.pause();

  // if beyond array -> reset
  if (songIndex >= songs.length) songIndex = 0;
  if (songIndex < 0) songIndex = songs.length - 1;

  // update src + displays
  audioPlayer.src = songs[songIndex].src;
  songName.innerHTML = songs[songIndex].name;
  artistName.innerHTML = songs[songIndex].artist;
  songCover.src = songs[songIndex].cover;

  // play if needed
  if (playing) audioPlayer.play();
}

// on press next
function nextSong() {
  // update songindex
  songIndex++;
  updatePlayingSong();
}

// on press previous
function previousSong() {
  // update song index
  songIndex--;
  updatePlayingSong();
}

// slider functionalities

// as the audio progresses, update slider
function onTimeUpdate() {
  // update time display
  const minutesSeconds = secondsToMMSS(Math.floor(audioPlayer.currentTime));
  timeDisplayCurrent.innerHTML = minutesSeconds;

  // update slider (if user is not moving it)
  if (movingSlider) return;
  progressSlider.value = Math.floor(audioPlayer.currentTime);
}

audioPlayer.onended = nextSong;
audioPlayer.ontimeupdate = onTimeUpdate;

// if slider changes, update audio
let movingSlider = false;
function onProgressSliderChange(event) {
  const sliderValue = Number(event.target.value);
  const newAudioTime = sliderValue;
  audioPlayer.currentTime = newAudioTime;
  movingSlider = false;
}

function sliderIsMoving() {
  movingSlider = true;
}

// change of volume
function onVolumeChange(event) {
  const newVolume = event.target.value * 0.01;
  audioPlayer.volume = newVolume;
}

// event setters
playButton.onclick = onPlayButtonClick;
nextButton.onclick = nextSong;
previousButton.onclick = previousSong;
volumeSlider.oninput = onVolumeChange;
progressSlider.onchange = onProgressSliderChange;
progressSlider.onmousedown = sliderIsMoving;

// aux
function secondsToMMSS(seconds) {
  const MM = Math.floor(seconds / 60);
  const SS = seconds % 60;

  let string = "";
  if (MM < 10) string += "0";
  string += MM;

  string += ":";

  if (SS < 10) string += "0";
  string += SS;

  return string;
}
