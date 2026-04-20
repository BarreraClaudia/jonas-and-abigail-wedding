/* ============================================================
   countdown.js  — live countdown to July 10 2026
   ============================================================ */

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date('July 10 2026 16:00:00').getTime();

function pulse(el) {
  el.classList.remove('tick');
  // Force reflow so the animation restarts
  void el.offsetWidth;
  el.classList.add('tick');
  setTimeout(() => el.classList.remove('tick'), 200);
}

function timer() {
  const distance = targetDate - Date.now();

  if (distance < 0) {
    [Days, Hours, Minutes, Seconds].forEach((el) => (el.innerHTML = '00'));
    return;
  }

  const days = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  const prevSeconds = Seconds.innerHTML;

  Days.innerHTML = String(days).padStart(2, '0');
  Hours.innerHTML = String(hours).padStart(2, '0');
  Minutes.innerHTML = String(minutes).padStart(2, '0');
  Seconds.innerHTML = String(seconds).padStart(2, '0');

  // Pulse seconds every tick, minutes when they change
  pulse(Seconds);
  if (String(minutes).padStart(2, '0') !== Minutes.innerHTML) pulse(Minutes);
}

setInterval(timer, 1000);
timer(); // run immediately on load
