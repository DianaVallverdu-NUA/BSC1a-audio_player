// song info
const songName = document.getElementById("song_name");
const artistName = document.getElementById("artist_name");
const songCover = document.getElementById("song_cover");

// buttons
const playButton = document.getElementById("play_button");
const nextButton = document.getElementById("next_button");
const previousButton = document.getElementById("previous_button");

// create audio player
const audioPlayer = document.createElement("audio");
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

// restart playing after change of song
function updatePlayingSong() {
  // if beyond array -> reset
  if (songIndex >= songs.length) songIndex = 0;

  // update src + displays
  audioPlayer.src = songs[songIndex].src;
  songName.innerHTML = songs[songIndex].name;
  artistName.innerHTML = songs[songIndex].artist;
  songCover.src = songs[songIndex].cover;

  // reset time
  audioPlayer.currentTime = 0;

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

// event setters
playButton.onclick = onPlayButtonClick;
nextButton.onclick = nextSong;
previousButton.onclick = previousSong;
