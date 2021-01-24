const clockContainer = document.querySelector(".js-clock");
const clockContainerRect = clockContainer.getBoundingClientRect();
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  // 초단위
  //:${seconds < 10 ? `0${seconds}` : seconds}
}

// function getPosition() {
//   clockContainer.style.position = "absolute";
//   clockContainer.style.top = `50%`;
//   clockContainer.style.left = `50%`;
// }

function init() {
  // getPosition();
  getTime();
  setInterval(getTime, 1000);
}

init();
