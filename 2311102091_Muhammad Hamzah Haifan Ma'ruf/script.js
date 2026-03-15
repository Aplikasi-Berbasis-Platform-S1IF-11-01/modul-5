const greetingElement = document.getElementById("dynamicGreeting");
const prayerButton = document.getElementById("prayButton");
const prayerBox = document.getElementById("prayerBox");
const thrModal = document.getElementById("thrModal");
const thrResult = document.getElementById("thrResult");
const thrMessage = document.getElementById("thrMessage");

const hour = new Date().getHours();
let greeting = "Selamat Datang ✨";

if (hour >= 4 && hour < 11) {
  greeting = "Selamat Pagi 🌤️";
} else if (hour >= 11 && hour < 15) {
  greeting = "Selamat Siang ☀️";
} else if (hour >= 15 && hour < 18) {
  greeting = "Selamat Sore 🌆";
} else {
  greeting = "Selamat Malam 🌙";
}

greetingElement.textContent = greeting;

prayerButton.addEventListener("click", () => {
  if (prayerBox.style.display === "block") {
    prayerBox.style.display = "none";
    prayerButton.textContent = "Tampilkan Doa";
  } else {
    prayerBox.style.display = "block";
    prayerButton.textContent = "Sembunyikan Doa";
  }
});

const thrList = [
  "Rp 50.000",
  "Rp 100.000",
  "Rp 200.000",
  "Rp 500.000",
  "Rp 1.000.000",
  "Pahala Berlimpah 🤲",
  "Bonus Senyum Hari Ini 😄"
];

function createConfetti() {
  const colors = ["#9effbc", "#63ee93", "#ffffff", "#d7ffe6"];

  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.opacity = Math.random();
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

thrModal.addEventListener("show.bs.modal", () => {
  thrResult.textContent = "Membuka...";
  thrMessage.textContent = "Sedang menyiapkan kejutan Ramadhan untukmu.";

  setTimeout(() => {
    const result = thrList[Math.floor(Math.random() * thrList.length)];
    thrResult.textContent = result;

    if (result.includes("Rp")) {
      thrMessage.textContent =
        "Alhamdulillah, semoga rezekinya berkah dan membawa kebahagiaan.";
    } else {
      thrMessage.textContent =
        "Hadiah terbaik bukan hanya nominal, tapi juga hati yang penuh syukur.";
    }

    createConfetti();
  }, 900);
});

thrModal.addEventListener("hidden.bs.modal", () => {
  thrResult.textContent = "Rp 0";
  thrMessage.textContent = "Sedang menyiapkan kejutan terbaik untukmu...";
});