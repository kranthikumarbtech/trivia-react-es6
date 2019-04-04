let sounds = {};
sounds.flip = new Audio('base/images/audio/card-flip.mp3');
sounds.flipBack = new Audio('base/images/audio/card-flip-back.mp3');
sounds.countdown = new Audio('base/images/audio/countdown.wav');

export let play = sound => {
  if (sounds[sound]) {
    sounds[sound].currentTime = 0;
    sounds[sound].play();
  }
};

export let stop = sound => {
  if (sounds[sound]) {
    sounds[sound].pause();
  }
};
