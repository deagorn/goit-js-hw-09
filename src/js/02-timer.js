// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let dateNow = new Date().getTime();
let dataUser = null;
let timerId = null;

// Calendar
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        dataUser = selectedDates[0].getTime();

        if (dataUser < dateNow) {
            Notiflix.Notify.failure('Please choose a date in the future');
            // window.alert("Please choose a date in the future");
            return;
        }
    startBtn.disabled = false;
  },
};
const calendars = flatpickr("#datetime-picker", options);

// function
startBtn.addEventListener('click', onStartClick);

function onStartClick() {
    timerId = setInterval(interfaceUpdate, 1000);
    startBtn.disabled = true;
}

function interfaceUpdate() {
    dateNow = new Date().getTime();
    if (dataUser - dateNow < 100) {
        clearInterval(timerId);
        return;
    }
    const times = convertMs(dataUser - dateNow);
    days.textContent = times.days;
    hours.textContent = times.hours;
    minutes.textContent = times.minutes;
    seconds.textContent = times.seconds;

}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}