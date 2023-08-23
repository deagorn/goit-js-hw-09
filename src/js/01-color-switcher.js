const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', onStartClick)
refs.stopBtn.addEventListener('click', onStopClick)

let timerId = null;


function onStartClick() {
    timerId = setInterval(ChangingColorPage, 1000);
}

function ChangingColorPage() {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = `${color}`;
    refs.startBtn.disabled = true;
}

function onStopClick() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}