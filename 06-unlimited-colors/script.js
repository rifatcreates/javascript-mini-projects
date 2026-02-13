const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');

let intervalId;

function stopInterval() {
  clearInterval(intervalId);
  intervalId = null;
}

function changingBackgroundColor() {
  if (!intervalId) {
    intervalId = setInterval(function () {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }, 2000);
  }
}

start.addEventListener('click', changingBackgroundColor);
stop.addEventListener('click', stopInterval);
