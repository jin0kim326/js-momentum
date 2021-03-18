const body = document.querySelector("body");

const IMG_NUMBER = 8;

function paintImage(imgNumber) {
  const image = new Image();
  body.style.background = `rgba(255,255,255,0.1) url(./imgs/${
    imgNumber + 1
  }bg.jpg) no-repeat center center/cover`;
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
