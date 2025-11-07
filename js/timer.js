const months = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

const now = new Date();
const targetDate = new Date(now);
targetDate.setDate(now.getDate() + 1);
targetDate.setHours(0, 0, 0, 0);

const timeOfStart = document.getElementById("timeOfStart");
if (timeOfStart) {
  const day = targetDate.getDate();
  const monthName = months[targetDate.getMonth()];

  timeOfStart.textContent = `${day} ${monthName}`;
}

const countdownHour = document.getElementById("countdownHours");
const countdownMinutes = document.getElementById("countdownMinutes");
const countdownSeconds = document.getElementById("countdownSeconds");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownHour.textContent = "00";
    countdownMinutes.textContent = "00";
    countdownSeconds.textContent = "00";
    clearInterval(timerInterval);
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownHour.textContent = String(hours).padStart(2, "0");
  countdownMinutes.textContent = String(minutes).padStart(2, "0");
  countdownSeconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
