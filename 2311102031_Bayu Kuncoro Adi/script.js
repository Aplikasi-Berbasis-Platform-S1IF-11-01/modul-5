const thrButton = document.getElementById("thrButton");

const thrModal = new bootstrap.Modal(
document.getElementById("thrModal")
);

const thrAmount = document.getElementById("thrAmount");

thrButton.addEventListener("click", function(){

// daftar nominal THR
const thrList = [
"Rp 50.000",
"Rp 100.000",
"Rp 250.000",
"Rp 500.000",
"Rp 1.000.000"
];

// random THR
const randomThr = thrList[Math.floor(Math.random()*thrList.length)];

thrAmount.innerText = randomThr;

thrModal.show();

});