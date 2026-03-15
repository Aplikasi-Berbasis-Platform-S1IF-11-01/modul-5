function klaimTHR(){

let sudahKlaim = localStorage.getItem("thrClaimed");

if(sudahKlaim){
document.getElementById("hasil").innerHTML =
"⚠️ THR sudah pernah diklaim. Hanya bisa 1 kali.";
return;
}

let nama = document.getElementById("nama").value;
let nim = document.getElementById("nim").value;

if(nama=="" || nim==""){
alert("Silakan isi Nama dan NIM terlebih dahulu");
return;
}

let thrList = [
"Rp 10.000",
"Rp 20.000",
"Rp 50.000",
"Rp 100.000",
"Rp 500.000"
];

let random = Math.floor(Math.random()*thrList.length);

document.getElementById("hasil").innerHTML =
"🎉 Selamat "+nama+" ("+nim+")! Kamu mendapatkan THR sebesar "+thrList[random];

localStorage.setItem("thrClaimed", true);

/* animasi uang */

for(let i=0;i<15;i++){

let uang=document.createElement("div");

uang.innerHTML="💸";

uang.classList.add("money");

uang.style.left=Math.random()*100+"vw";

uang.style.animationDuration=2+Math.random()*2+"s";

document.body.appendChild(uang);

setTimeout(()=>{
uang.remove();
},3000);

}

}