// scroll timer
let scrollTimer;

export const playAnimation = (greenLetters, pinkLetters) => {
  for (let greenLetter of greenLetters) {
    if (greenLetter) {
      greenLetter.classList.remove('paused');
    }
  }

  for (let pinkLetter of pinkLetters) {
    if (pinkLetter) {
      pinkLetter.classList.remove('paused');
    }
  }
};

export const pauseAnimation = (greenLetters, pinkLetters) => {
  for (let greenLetter of greenLetters) {
    if (greenLetter) {
      greenLetter.classList.add('paused');
    }
  }

  for (let pinkLetter of pinkLetters) {
    if (pinkLetter) {
      pinkLetter.classList.add('paused');
    }
  }
};

// SCROLL
export const bodyScroll = (greenLetters, pinkLetters) => {
  playAnimation(greenLetters, pinkLetters);

  if (scrollTimer) {
    clearTimeout(scrollTimer);
  }
  scrollTimer = window.setTimeout(() => {
    bodyScrollFinished(greenLetters, pinkLetters);
  }, 500);
};

export const bodyScrollFinished = (greenLetters, pinkLetters) => {
  pauseAnimation(greenLetters, pinkLetters);
};
