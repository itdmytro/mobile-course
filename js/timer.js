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

// const countdownElement = document.getElementById("countdown");

// function updateCountdown() {
//   const now = new Date();
//   const diff = targetDate - now;

//   if (diff <= 0) {
//     countdownElement.textContent = "Час настав!";
//     clearInterval(timer);
//     return;
//   }

//   const hours = Math.floor(diff / 1000 / 60 / 60);
//   const minutes = Math.floor((diff / 1000 / 60) % 60);
//   const seconds = Math.floor((diff / 1000) % 60);

//   countdownElement.textContent = `${hours} год ${minutes} хв ${seconds} с`;
// }

// updateCountdown(); // перший виклик одразу
// const timer = setInterval(updateCountdown, 1000);
