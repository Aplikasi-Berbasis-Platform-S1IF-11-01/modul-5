<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br>APLIKASI BERBASIS PLATFORM</h1>
  <br />
  <h3>MODUL 5 <br> JAVASCRIPT</h3>
  <br />
  <br />
  <img src="logo.jpeg" alt="Logo" width="300"> 
  <br />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>Yoga Hogantara</strong><br>
    <strong>2311102153</strong><br>
    <strong>S1 IF-11-REG01</strong>
  </p>
  <br />
  <br />
  <h3>Dosen Pengampu :</h3>
  <p>
    <strong>Dimas Fanny Hebrasianto Permadi, S.ST., M.Kom</strong>
  </p>
  <br />
  <br />
    <h4>Asisten Praktikum :</h4>
    <strong> Apri Pandu Wicaksono </strong> <br>
    <strong>Rangga Pradarrell Fathi</strong>
  <br />
  <h3>LABORATORIUM HIGH PERFORMANCE
 <br>FAKULTAS INFORMATIKA <br>UNIVERSITAS TELKOM PURWOKERTO <br>2026</h3>
</div>

---

## 1. Dasar Teori

**JavaScript (JS)** adalah bahasa pemrograman tingkat tinggi yang berperan penting dalam menghidupkan sebuah halaman web. Jika HTML membangun struktur dan CSS mengatur tampilan, maka JavaScript memberikan kemampuan agar halaman tersebut menjadi **interaktif, dinamis, dan responsif**. Pada awalnya, JS dirancang untuk bekerja di **sisi klien (browser)**, sehingga memungkinkan halaman web untuk merespons tindakan pengguna secara langsung—seperti memproses data formulir atau memperbarui konten—tanpa perlu melakukan muat ulang (*reload*) halaman.

Salah satu kunci kekuatan JavaScript terletak pada konsep **DOM (Document Object Model)**. Melalui DOM, JavaScript dapat "berkomunikasi" dengan struktur HTML secara logis. Hal ini memungkinkan pengembang untuk menambah, menghapus, atau mengubah elemen dan gaya CSS secara otomatis berdasarkan kejadian tertentu (*event*), seperti ketika pengguna melakukan klik, mengarahkan kursor (*hover*), atau menggulir halaman.

Kini, peran JavaScript telah berkembang pesat. Tidak hanya terbatas pada sisi *browser*, JavaScript juga bisa dijalankan di **sisi server** berkat adanya lingkungan seperti **Node.js**. Perkembangan ini memudahkan pengembang untuk membangun aplikasi web yang utuh (dari tampilan depan hingga logika belakang) hanya dengan menguasai satu bahasa pemrograman yang sama.

````

## 2. Penjelasan Kode 

### Kode HTML

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marhaban Ya Ramadan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-success text-white vh-100 d-flex justify-content-center align-items-center">
    
    <div class="container text-center">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="p-5 bg-dark bg-opacity-50 rounded-4 shadow-lg border border-2 border-light">
                    
                    <h1 class="display-4 fw-bold mb-3 text-warning">Marhaban Ya Ramadan</h1>
                    <p class="lead fs-5 mb-4">Selamat menunaikan ibadah puasa.</p>
                    <p class="lead fs-5 mb-4">Yoga Hogantara-2311102153.</p>
                    <hr class="border-light border-2 opacity-75 mb-4">
                    
                    <div class="d-flex justify-content-center gap-5 my-4">
                        <div class="text-center">
                            <div class="display-2 mb-2">🍲🍗</div>
                            <span class="badge bg-warning text-dark fs-6 rounded-pill">أطباق الدجاج</span>
                        </div>
                        
                        <div class="text-center">
                            <div class="display-2 mb-2">💵</div>
                            <span class="badge bg-warning text-dark fs-6 rounded-pill">THR Cik</span>
                        </div>
                    </div>

                    <p class="fst-italic fs-6 text-light opacity-75 mt-4">"Mari sambut hari kemenangan dengan THR."</p>

                    <button type="button" class="btn btn-warning btn-lg fw-bold text-dark rounded-pill px-5 mt-3 shadow" data-bs-toggle="modal" data-bs-target="#modalTHR">
                        🎁 TeHaeR!
                    </button>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalTHR" tabindex="-1" aria-labelledby="modalTHRLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-light text-dark text-center rounded-4 border-warning border-5 shadow-lg">
                <div class="modal-header border-0 justify-content-center pt-4">
                    <h2 class="modal-title fw-bold text-success" id="modalTHRLabel">🎉 AWOKAWOK! 🎉</h2>
                </div>
                <div class="modal-body py-4">
                    <div class="display-1 mb-3">💵</div>
                    <p class="fs-4 fw-semibold text-danger">Selamat, Anda tidak mendapatkan THR!</p>
                    <h1 class="display-4 fw-bold text-success mt-2">🤣</h1>
                    <p class="text-muted mt-4 fst-italic fs-6">*(Silakan ambil di mimpinya masing-masing bro, hehe).*</p>
                </div>
                <div class="modal-footer border-0 justify-content-center pb-4">
                    <button type="button" class="btn btn-success btn-lg rounded-pill px-4 fw-bold" data-bs-dismiss="modal">melasi</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>

````

### Hasil Tampilan (Screenshot)

![Tampilan ](1.PNG)
![Tampilan pop up ](2.PNG)

### Penjelasan code:

### A. Struktur Pemicu (Trigger Button)
* **Button Component**: Tombol "TeHaeR!" dibuat menggunakan *class* `btn-warning` dan `btn-lg` agar terlihat mencolok.
* **Atribut Data**: 
    * `data-bs-toggle="modal"`: Berfungsi untuk memberi tahu Bootstrap bahwa tombol ini adalah pemicu jendela modal.
    * `data-bs-target="#modalTHR"`: Menghubungkan tombol dengan elemen modal spesifik yang memiliki `id="modalTHR"`.

### B. Komponen Modal (Pop-up)
* **Struktur Modal**: Terdiri dari `modal-dialog` sebagai wadah dan `modal-content` sebagai isi dari pesan yang ingin disampaikan.
* **Modal Dialog Centered**: Penggunaan *class* `modal-dialog-centered` memastikan jendela *pop-up* muncul tepat di tengah layar, tidak hanya di bagian atas.
* **Konten & Gaya**: 
    * Di dalam modal, saya memberikan sentuhan humor dengan teks berwarna merah (`text-danger`) untuk memberi efek "kejutan".
    * `data-bs-dismiss="modal"` pada tombol "melasi" berfungsi untuk menutup kembali jendela modal tersebut.

### C. Integrasi JavaScript
* **Bootstrap Bundle**: Di akhir dokumen, terdapat tag `<script>` yang memanggil `bootstrap.bundle.min.js`. Tanpa file ini, fitur tombol dan modal yang telah dibuat tidak akan berfungsi, karena file inilah yang mengatur logika pemunculan jendela *pop-up* secara otomatis.

## Refrensi

- [Materi Modul 5](https://drive.google.com/file/d/1J27NhEO2MbOF9DetZmOtEGAcPkczzm1r/view?usp=sharing)
