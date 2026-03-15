function generateTHR(){

const thrList = [
50000,
100000,
150000,
200000,
250000,
300000,
500000
];

const randomTHR = thrList[Math.floor(Math.random() * thrList.length)];

document.getElementById("thrValue").innerText =
"Rp " + randomTHR.toLocaleString("id-ID");

}