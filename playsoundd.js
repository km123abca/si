function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('../techno_bg_music.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}