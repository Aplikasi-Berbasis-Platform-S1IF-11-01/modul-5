const thrButton = document.getElementById("thrButton");
const thrAmount = document.getElementById("thrAmount");
const thrModal = document.getElementById("thrModal");

const nominalTHR = [
  50000, 100000, 150000, 200000, 250000, 300000, 500000, 750000, 1000000,
];

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function createConfetti() {
  const colors = ["#facc15", "#22c55e", "#ffffff", "#86efac", "#f59e0b"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    confetti.style.width = Math.random() * 8 + 6 + "px";
    confetti.style.height = Math.random() * 14 + 10 + "px";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4500);
  }
}

thrButton.addEventListener("click", function () {
  const randomTHR = nominalTHR[Math.floor(Math.random() * nominalTHR.length)];
  thrAmount.textContent = "Total THR: " + formatRupiah(randomTHR);
});

thrModal.addEventListener("shown.bs.modal", function () {
  createConfetti();
});
