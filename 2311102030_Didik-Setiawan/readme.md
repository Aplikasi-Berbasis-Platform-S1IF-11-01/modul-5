

<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br>APLIKASI BERBASIS PLATFORM</h1>
  <br />
  <h3>MODUL 5 <br> JAVASCRIPT & JQUERY</h3>
  <br />
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-vb7jyBjK-sM%2FXXfKp51LrjI%2FAAAAAAAACts%2FEjcXzlgZwSswNWXsBHMyX-6aav1mjA77QCPcBGAYYCw%2Fs1600%2FLogo_Telkom_University_potrait.png&f=1&nofb=1&ipt=9d030d54102ea96369d39fe491220e0536195abc8ee443279c1a420302206400" alt="Logo Telkom" width="300"> 
  <br /><br /><br />
  
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Didik Setiawan</strong><br>
    <strong>2311102030</strong><br>
    <strong>IF-11-REG-01</strong>
  </p>
  <br />
  
  <h3>Dosen Pengampu :</h3>
  <p><strong>Dimas Fanny Hebrasianto Permadi, S.ST., M.Kom</strong></p>
  <br />
  
  <h4>Asisten Praktikum :</h4>
  <strong>Apri Pandu Wicaksono</strong> <br>
  <strong>Rangga Pradarrell Fathi</strong>
  <br />
  
  <h3>LABORATORIUM HIGH PERFORMANCE<br>FAKULTAS INFORMATIKA<br>UNIVERSITAS TELKOM PURWOKERTO<br>2026</h3>
</div>

---

## DASAR TEORI

JavaScript adalah bahasa pemrograman tingkat tinggi yang digunakan untuk membuat halaman web menjadi lebih interaktif dan dinamis. Bahasa ini dikembangkan oleh Brendan Eich pada tahun 1995 di perusahaan Netscape. JavaScript biasanya dijalankan di browser seperti Google Chrome atau Mozilla Firefox untuk mengontrol dan memanipulasi elemen halaman web melalui Document Object Model (DOM). Dengan JavaScript, pengembang dapat menambahkan berbagai fitur seperti validasi form, animasi, serta pembaruan konten halaman tanpa harus memuat ulang halaman web.



## UNGUIDED

### kode html



```bash 
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ramadan 1447 H</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-light">

<nav class="navbar navbar-dark bg-success border-bottom border-warning px-3">
  <span class="navbar-brand fw-bold text-warning">🌙 Ramadan 1447 H — Banjarnegara</span>
  <span class="badge bg-warning text-dark">Hari ke-24</span>
</nav>

<div class="container py-4">

  <!-- THR BUTTON -->
  <div class="text-center mb-4">
    <button id="btnBukaThr" class="btn btn-warning fw-bold px-4 py-2">
      🎁 Klaim THR Ramadanmu!
    </button>
  </div>

  <div class="row g-4">

    <!-- JADWAL -->
    <div class="col-md-5">
      <h6 class="text-warning fw-bold mb-3">📅 Jadwal Sholat</h6>
      <div class="row g-2 mb-3">
        <div class="col-6 border border-warning rounded-3 text-center py-2">
          <div class="small text-secondary">🌙 Imsak</div><div class="fw-bold text-warning">04:21</div>
        </div>
        <div class="col-6 border border-success rounded-3 text-center py-2">
          <div class="small text-secondary">🌇 Buka</div><div class="fw-bold text-success">17:58</div>
        </div>
      </div>
      <ul class="list-group">
        <li class="list-group-item bg-dark text-light border-secondary d-flex justify-content-between"><span>🌄 Subuh</span><strong class="text-warning">04:31</strong></li>
        <li class="list-group-item bg-dark text-light border-secondary d-flex justify-content-between"><span>🌤️ Dzuhur</span><strong class="text-warning">11:54</strong></li>
        <li class="list-group-item bg-dark text-light border-secondary d-flex justify-content-between"><span>🌅 Ashar</span><strong class="text-warning">15:02</strong></li>
        <li class="list-group-item bg-success bg-opacity-25 border-warning d-flex justify-content-between"><span>🌇 Maghrib <span class="badge bg-warning text-dark">Buka</span></span><strong class="text-warning">17:58</strong></li>
        <li class="list-group-item bg-dark text-light border-secondary d-flex justify-content-between"><span>🌃 Isya</span><strong class="text-warning">19:07</strong></li>
        <li class="list-group-item bg-dark text-light border-secondary d-flex justify-content-between"><span>🕌 Tarawih</span><strong class="text-warning">±19:30</strong></li>
      </ul>
    </div>

    <!-- DOA + PROGRESS -->
    <div class="col-md-7">
      <h6 class="text-warning fw-bold mb-3">🤲 Doa Berbuka</h6>
      <div class="card bg-dark border-success mb-3">
        <div class="card-body">
          <p class="text-warning text-end fs-5 mb-1" dir="rtl">اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ</p>
          <p class="small fst-italic text-secondary mb-1">"Allahumma laka shumtu wa bika aamantu wa 'ala rizqika afthartu"</p>
          <p class="small text-light mb-0">Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka.</p>
        </div>
      </div>

      <h6 class="text-warning fw-bold mb-2">📊 Progress Ibadah</h6>
      <div class="small d-flex justify-content-between mb-1"><span>🌙 Puasa</span><span class="text-warning">24/30</span></div>
      <div class="progress mb-2" style="height:8px"><div class="progress-bar bg-success" style="width:80%"></div></div>
      <div class="small d-flex justify-content-between mb-1"><span>📖 Tadarus</span><span class="text-warning">24/30</span></div>
      <div class="progress mb-2" style="height:8px"><div class="progress-bar bg-warning" style="width:80%"></div></div>
      <div class="small d-flex justify-content-between mb-1"><span>🕌 Tarawih</span><span class="text-warning">22/30</span></div>
      <div class="progress mb-3" style="height:8px"><div class="progress-bar bg-info" style="width:73%"></div></div>

      <div class="alert alert-warning bg-warning bg-opacity-10 border-warning text-light py-2">
        <strong class="text-warning">⭐ 10 Malam Terakhir!</strong><br>
        <small>Malam ke-4 dari 10 malam terakhir. Cari Lailatul Qadar di malam ganjil! 🌙</small>
      </div>
    </div>
  </div>
</div>

<footer class="bg-success border-top border-warning text-center py-3">
  <p class="text-warning mb-1">✨ تَقَبَّلَ اللهُ مِنَّا وَمِنْكُم ✨</p>
  <small class="text-light">© 2026 Ramadan Kareem · Banjarnegara · Made with ❤️ for the Ummah</small>
</footer>

<!-- Partikel latar belakang -->
<div id="particle-container" style="position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden"></div>

<!-- THR Modal -->
<div class="modal fade" id="thrModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-dark border-warning text-center">
      <div class="modal-body py-4 px-4">
        <div class="fs-1 mb-2">🎁</div>
        <h4 class="text-warning fw-bold mb-1">Selamat!</h4>
        <p class="text-light mb-3">Anda mendapatkan <strong class="text-warning">THR</strong> Ramadan 1447 H 🎉</p>
        <div class="bg-warning text-dark rounded-3 py-3 mb-3">
          <div class="small fw-bold text-uppercase" style="letter-spacing:1px">Tunjangan Hari Raya</div>
          <div class="fs-3 fw-bold" id="nominalThr">Rp ???</div>
        </div>
        <p class="small text-secondary fst-italic mb-4">Minal 'Aidin wal Faizin 🤲</p>
        <button class="btn btn-warning fw-bold px-4" data-bs-dismiss="modal">Alhamdulillah! 🙏</button>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="thr.js"></script>
</body>
</html>
  ```

##### penjelasan
dibuat menggunakan Bootstrap 5.3.2. Halaman terdiri dari navbar yang menampilkan judul Ramadan dan badge hari ke-24, lalu container utama dengan dua kolom menggunakan grid Bootstrap. Kolom kiri menampilkan jadwal sholat dalam list-group dengan highlight pada waktu Maghrib sebagai waktu berbuka, sedangkan kolom kanan berisi doa berbuka dalam card, progress ibadah (Puasa, Tadarus, Tarawih) dengan progress-bar, serta alert pengingat 10 malam terakhir Ramadan.Selain itu terdapat tombol untuk mengklaim THR Ramadan yang akan menampilkan modal berisi nominal THR ketika ditekan.


### kode JS

```bash 

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // BAGIAN 1 — THR MODAL + NOMINAL ACAK
  // =============================================

  const btnBuka   = document.getElementById('btnBukaThr');
  const nominalEl = document.getElementById('nominalThr');
  const thrModal  = new bootstrap.Modal(document.getElementById('thrModal'));

  const daftarNominal = [
    'Rp 100.000',
    'Rp 250.000',
    'Rp 500.000',
    'Rp 750.000',
    'Rp 1.000.000',
    'Rp 1.500.000',
    'Rp 5.000.000',
  ];

  btnBuka.addEventListener('click', () => {
    const acak = daftarNominal[Math.floor(Math.random() * daftarNominal.length)];
    nominalEl.innerText = acak;
    thrModal.show();
  });


  // =============================================
  // BAGIAN 2 — PARTIKEL CAHAYA LATAR BELAKANG
  // =============================================

  const particleContainer = document.getElementById('particle-container');

  function createBackgroundParticles() {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1 + 'px';
      particle.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: #ffd700;
        width: ${size};
        height: ${size};
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        opacity: ${(Math.random() * 0.5 + 0.2).toFixed(2)};
        animation: twinkleParticle ${(Math.random() * 3 + 2).toFixed(1)}s ease-in-out infinite;
        animation-delay: ${(Math.random() * 5).toFixed(1)}s;
      `;
      particleContainer.appendChild(particle);
    }

    if (!document.getElementById('particle-style')) {
      const style = document.createElement('style');
      style.id = 'particle-style';
      style.textContent = `
        @keyframes twinkleParticle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.6); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  createBackgroundParticles();

});
  ```

##### penjelasan
Memiliki dua fungsi utama. Pertama, mengatur tombol Klaim THR yang ketika diklik akan memilih nominal THR secara acak dari beberapa pilihan (misalnya Rp100.000 hingga Rp5.000.000) lalu menampilkannya dalam modal Bootstrap. Kedua, membuat efek partikel cahaya di latar belakang dengan menghasilkan beberapa elemen kecil berbentuk lingkaran


![Alt 1](https://raw.githubusercontent.com/didiksetia1/asset/refs/heads/main/Screenshot%202026-03-14%20225409.png)