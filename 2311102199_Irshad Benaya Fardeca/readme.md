<div align="center">
  <br>

  <h1>LAPORAN PRAKTIKUM <br>
  APLIKASI BERBASIS PLATFORM
  </h1>

  <br>

  <h3>MODUL 5 <br>
  JAVASCRIPT & JQUERY
  </h3>

  <br>

  <img src="asset/telyu.png" />



  <br>
  <br>
  <br>

  <h3>Disusun Oleh :</h3>

  <p>
    <strong>Irshad Benaya Fardeca</strong><br>
    <strong>2311102199</strong><br>
    <strong>S1 IF-11-REG01</strong>
  </p>

  <br>

  <h3>Dosen Pengampu :</h3>

  <p>
    <strong>Dimas Fanny Hebrasianto Permadi, S.ST., M.Kom</strong>
  </p>
  
  <br>
  <br>
    <h4>Asisten Praktikum :</h4>
    <strong>Apri Pandu Wicaksono </strong> <br>
    <strong>Rangga Pradarrell Fathi</strong>
  <br>

  <h3>LABORATORIUM HIGH PERFORMANCE
 <br>FAKULTAS INFORMATIKA <br>UNIVERSITAS TELKOM PURWOKERTO <br>2026</h3>
</div>
<hr>

# Dasar Teori
## 6.1 Pengenalan Javascript
### 6.1.1 Sejarah Singkat Javascript
Javascript, seperti namanya, merupakan bahasa pemrograman scripting. Dan seperti bahasa scripting
lainnya, Javascript umumnya digunakan hanya untuk program yang tidak terlalu besar, biasanya hanya
beberapa ratus baris. Javascript pada umumnya mengontrol program yang berbasis Java. Jadi memang
pada dasarnya Javascript tidak dirancang untuk digunakan dalam aplikasi skala besar.
Meskipun dibuat dengan tujuan awal untuk mengendalikan program Java, komunitas Javascript
menggunakan bahasa ini untuk tujuan lain, memanipulasi gambar dan isi dari dokumen HTML. Singkatnya,
pada akhirnya Javascript digunakan untuk satu tujuan utama, “menghidupkan” dokumen HTML dengan
mengubah konten statis menjadi dinamis dan interaktif. Bersamaan dengan perkembangan Internet dan
dunia web yang pesat, Javascript akhirnya menjadi bahasa utama dan satu-satunya untuk membuat HTML
menjadi interaktif di dalam browser.

### 6.1.2 Prinsip Dasar Javascript
Prinsip dasar yang terdapat pada bahasa pemrograman javascript adalah sebagai berikut.
1. Javascript mendukung paradigma pemrograman imparatif (Javascript dapat menjalankan perintah
program baris demi baris, dengan masing-masing baris berisi satu atau lebih perintah), fungsional
(struktur dan elemen-elemen dalam program sebagai fungsi matematis yang tidak memiliki keadaan
(state) dan data yang dapat berubah (mutable data)), dan orientasi objek (segala sesuatu yang terlibat
dalam program dapat disebut sebagai “objek”).
2. Javascript memiliki model pemrograman fungsional yang sangat ekspresif.
3. Pemrograman berorientasi objek (PBO) pada Javascript memiliki perbedaan dari PBO pada umumnya.
4. Program kompleks pada Javascript umumnya dipandang sebagai program-program kecil yang saling
berinteraksi.

## 6.2 Sintaks Umum pada Javascript
### 6.2.1 Tipe data dasar
Seperti kebanyakan bahasa pemrograman lainnya, Javascript memiliki beberapa tipe data untuk
dimanipulasi. Seluruh nilai yang ada dalam Javascript selalu memiliki tipe data. Tipe data yang dimiliki oleh
Javascript adalah sebagai berikut:
• Number (bilangan)
• String (serangkaian karakter)
• Boolean (benar / salah)

PEMROGRAMAN WEB 42
• Object
• Function (fungsi)
• Array
• Date
• RegExp (regular expression)
• Null (tidak berlaku / kosong)
• Undefined (tidak didefinisikan)
Kebanyakan dari tipe data yang disebutkan di atas sama seperti tipe data sejenis pada bahasa
pemrograman lainnya. Misalnya, sebuah boolean terdiri dari dua nilai saja, yaitu true dan false.

### 6.2.2 Variabel
Seperti pada bahasa pemrograman lainnya, variabel dalam Javascript merupakan sebuah tempat untuk
menyimpan data sementara. Variabel dibuat dengan kata kunci var pada Javascript.
```
var a; // a berisi undefined
var nama = "Budi"; // nama berisi "Budi"
```
Nilai yang ada di dalam variabel dapat diganti dengan mengisikan nilai baru, dan bahkan dapat diganti tipe
datanya juga.
```
nama = "Anton"; // nama sekarang berisi string "Anton"
nama = 1; // nama sekarang berisi integer 1
```
Walaupun kemampuan untuk menggantikan tipe data ini sangat memudahkan kita dalam mengembangkan
aplikasi, fitur ini harus digunakan dengan sangat hati-hati. Perubahan tipe data yang tidak diperkirakan
dengan baik dapat menyebabkan berbagai kesalahan (error) pada program, misalnya jika kita mencoba
mengakses method charAt() (fungsi yang mengembalikan nilai char pada indeks sebuah string) setelah
mengubah tipe pada contoh di atas.

### 6.2.3 Array
Array merupakan sebuah tipe data yang digunakan untuk menampung banyak tipe data lainnya. Berbeda
dengan tipe data object, array pada Javascript merupakan sebuah tipe khusus. Walaupun memiliki method
dan properti, array bukanlah objek, melainkan sebuah tipe yang “mirip objek”. Pembuatan array dalam
Javascript dilakukan dengan menggunakan kurung siku ([]):
```
var data = ["satu", 2, true];
```
Elemen array pada Javascript tidak harus memiliki tipe data yang sama seperti contoh diatas. Selain itu
Javascript juga mendukung untuk membuat array di dalam array yang biasa dikenal dengan array dua
dimensi seperti contoh dibawah ini.
```
var arr2 = [["satu", "dua"], ["tiga", "empat"]];
```
Pengaksesan elemen dalam array dilakukan dengan menggunakan kurung siku. Nilai yang kita berikan
dalam kurung siku adalah urutan elemen penulisan array (indeks), yang dimulai dari nilai 0. Jika indeks yang
diakses tidak ada, maka kita akan mendapatkan nilai undefined.
```
data[2]; // mengembalikan true
arr2[0][1]; // mengembalikan "dua"
data[10]; // mengembalikan undefined
```
Sebagai sebuah objek khusus, array juga memiliki method dan properti. Beberapa method dan properti
yang populer misalnya length, pop(), dan push().
```
var data = ["a", "b", "c"];  
// data.length mengembalikan 3  
data.push("d"); // mengembalikan 4 data menjadi ["a", "b", "c", "d"]  data.pop(); // mengembalikan "d", data menjadi ["a", "b", "c"]
```

### 6.2.4 Pengendalian Struktur
Javascript memiliki perintah-perintah pengendalian struktur (control stucture) yang sama dengan bahasa
dalam keluarga C. Perintah if dan else digunakan untuk percabangan, sementara perintah for, for-in,
while, dan do-while digunakan untuk perulangan.
Percabangan pada Javascript bisa dikatakan sama persis dengan C atau Java:
```
var gelar; 
var pendidikan = "S2"; 
if (pendidikan === "S1") { 
 gelar = "Sarjana"; 
} else if (pendidikan === "S2") { 
 gelar = "Master"; 
} else if (pendidikan === "S3") { 
 gelar = "Doktor"; 
} else { 
 gelar = "Tidak Diketahui"; 
} 
gelar; // gelar berisi "Master"
```
Satu hal yang perlu diperhatikan, tiga buah sama dengan (===) digunakan pada operasi perbandingan di
Javascript. Javascript mendukung dua operator perbandingan sama dengan, yaitu == dan ===. Perbedaan
utamanya adalah == mengubah tipe data yang dicek menjadi nilai terdekat, sementara === memastikan tipe
data dari dua nilai yang dibandingkan sama. Untuk mendapatkan nilai perbandingan paling akurat, selalu
gunakan === ketika mengecek nilai.
Sama seperti if, perulangan do, do-while, dan for memiliki cara pemakaian yang dapat dikatakan sama
persis dengan C atau Java:
```
while (true) {  
 // tak pernah berhenti 
} var input; do {  
input = get_input();  
} while (inputIsNotValid(input)) for  
(var i = 0; i < 5; i++) {  
 // berulang sebanyak 5 kali }
```

## 6.3 Object Orientation pada Javascript
Javascript memiliki dua jenis tipe data utama, yaitu tipe data dasar dan objek. Tipe data dasar pada
Javascript adalah angka (numbers), rentetan karakter (strings), boolean (true dan false), null, dan undefined.
Nilai-nilai selain tipe data dasar secara otomatis dianggap sebagai objek. Objek dalam Javascript
didefinisikan sebagai mutable properties collection, yang artinya adalah sekumpulan properti (ciri khas)
yang dapat berubah nilainya. Karena nilai-nilai selain tipe data dasar merupakan objek, maka pada
Javascript sebuah Array adalah objek. Fungsi adalah objek dan Regular expression juga merupakan objek.

### 6.3.1 Pembuatan Object pada Javascript
Notasi pembuatan objek pada Javascript sangat sederhana, yaitu sepasang kurung kurawal yang
membungkus properti. Notasi pembuatan objek ini dikenal dengan nama object literal. Object literal dapat
digunakan kapanpun pada ekspresi Javascript yang valid:
```
var objek_kosong = {};  
var mobil = {  
 "warna-badan": "merah",  
 "nomor-polisi": "BK1234AB"  
};
```
Nama properti dari sebuah objek harus berupa string, dan boleh berisi string kosong (""). Jika merupakan
nama Javascript yang legal, kita tidak memerlukan petik ganda pada nama properti. Petik ganda seperti
pada contoh ("warna-badan") hanya diperlukan untuk nama Javascript ilegal atau kata kunci seperti “if”
atau “var”. Misalnya, "nomor-polisi" memerlukan tanda petik, sementara nomor_polisi tidak. Contoh lain,
variasi tidak memerlukan tanda petik, sementara "var" perlu.
Sebuah objek dapat menyimpan banyak properti, dan setiap properti dipisahkan dengan tanda koma (,).
Jika ada banyak properti, nilai dari properti pada setiap objek boleh berbeda-beda:
```
var jadwal = {
 platform: 34, 
 telah_berangkat: false,  tujuan: "Medan", 
 asal: "Jakarta" 
};
```
Karena dapat diisikan dengan nilai apapun (termasuk objek), maka kita dapat membuat objek yang
mengandung objek lain (nested object; objek bersarang) seperti berikut:
```
var jadwal = { platform: 34, telah_berangkat: false, asal: { kode_kota: "MDN",  nama_kota: "Medan",  
waktu: "2013-12-29 14:00"   }, tujuan: {  
kode_kota: "JKT",  
nama_kota: "Jakarta",  
waktu: "2013-12-29 17.30"   }  
};
```
### 6.3.2 Akses Nilai Property
Akses nilai properti dapat dilakukan dengan dua cara, yaitu.
1. Penggunaan kurung siku ([]) setelah nama objek. Kurung siku kemudian diisikan dengan nama
properti, yang harus berupa string. Cara ini biasanya digunakan untuk nama properti yang adalah
nama ilegal atau kata kunci Javascript.
2. Penggunaan tanda titik (.) setelah nama objek diikuti dengan nama properti. Notasi ini merupakan
notasi yang umum digunakan pada bahasa pemrograman lainnya. Notasi ini tidak dapat digunakan
untuk nama ilegal atau kata kunci Javascript.
Contoh penggunaan kedua cara pemanggilan di atas adalah sebagai berikut:
```
mobil["warna-badan"] // Hasil: "merah" 
jadwal.platform // Hasil: 34 
```
Sebagai bahasa dinamis, Javascript tidak akan melemparkan pesan kesalahan jika kita mengakses properti
yang tidak ada dalam objek. Kita akan menerima nilai undefined jika mengakses properti yang tidak ada:
```
jadwal.nomor_kursi // Hasil: undefined mobil
["jumlah-roda"] // Hasil: undefined 
```
Pengaksesan properti pada Javascript juga dapat digunakan secara dinamis untuk mengubah nilai dari
properti tersebut. Perubahan nilai properti juga dapat dilakukan untuk properti yang bahkan tidak ada pada
objek tersebut:
```
mobil["jumlah-roda"] = 4; 
mobil.bahan_bakar = "Bensin"; 
```

### 6.3.3 Prototype pada Javascript
Pada Javascript yang mengimplementasikan PBO kita tidak lagi perlu menuliskan kelas, dan langsung
melakukan penurunan terhadap objek. Misalkan kita memiliki objek mobil yang sederhana seperti berikut:
```
var mobil = { nama: "Mobil", jumlahBan: 4 };
```
Kita dapat langsung menurunkan objek tersebut dengan menggunakan fungsi Object.create seperti
berikut:
```
var truk = Object.create(mobil); // truk.nama === "Mobil"  
// truk.jumlahBan === 4
```

## 6.4 Function pada Javascript
Sebuah fungsi membungkus satu atau banyak perintah. Setiap kali fungsi dipanggil, maka perintahperintah
yang ada di dalam fungsi tersebut dijalankan. Secara umum fungsi digunakan untuk penggunaan kembali
kode (code reuse) dan penyimpanan informasi (information hiding). Implementasi fungsi kelas pertama juga
memungkinkan penggunaan fungsi sebagai unit-unit yang dapat dikombinasikan, seperti layaknya sebuah
lego. Dukungan terhadap pemrograman berorientasi objek juga berarti fungsi dapat digunakan untuk
memberikan perilaku tertentu dari sebuah objek.

### 6.4.1 Pembuatan Fungsi pada Javascript
Sebuah fungsi pada Javascript dibuat dengan cara seperti berikut:
```
function tambah(a, b) { hasil = a + b; 
 return hasil; 
} 
```
Cara penulisan fungsi seperti diatas dikenal dengan nama function declaration, atau deklarasi fungsi.
Terdapat empat komponen yang membangun fungsi di atas, yaitu:
1. Kata kunci function, yang memberitahu Javascript bahwa akan dibuat sebuah fungsi.
2. Nama fungsi, dalam contoh di atas adalah tambah. Dengan memberikan sebuah fungsi nama maka
pemanggilan fungsi dapat dirujuk dengan nama tersebut. Harus diingat bawa nama fungsi bersifat
opsional, yang berarti fungsi pada Javascript tidak harus diberi nama.
3. Daftar parameter fungsi, yaitu a, b pada contoh di atas. Daftar parameter ini selalu dikelilingi oleh
tanda kurung (()). Parameter boleh kosong, tetapi tanda kurung wajib tetap dituliskan. Parameter
fungsi akan secara otomatis didefinisikan menjadi variabel yang hanya bisa dipakai di dalam fungsi.
Variabel pada parameter ini diisi dengan nilai yang dikirimkan kepada fungsi secara otomatis.
4. Sekumpulan perintah yang ada di dalam kurung kurawal ({}). Perintah-perintah ini dikenal dengan
nama badan fungsi. Badan fungsi dieksekusi secara berurut ketika fungsi dijalankan.
Penulisan deklarasi fungsi (function declaration) seperti di atas merupakan cara penulisan fungsi yang
umumnya kita gunakan pada bahasa pemrograman imperatif dan berorientasi objek. Tetapi selain deklarasi
fungsi Javascript juga mendukung cara penulisan fungsi lain, yaitu dengan memanfaatkan ekspresi fungsi
(function expression). Ekspresi fungsi merupakan cara pembuatan fungsi yang memperbolehkan menuliskan
fungsi tanpa nama. Fungsi yang dibuat tanpa nama dikenal dengan sebutan fungsi anonim atau fungsi
lambda. Berikut adalah cara membuat fungsi dengan ekspresi fungsi:
```
var tambah = function (a, b) { hasil = a + b; 
 return hasil; 
};
```
Terdapat hanya sedikit perbedaan antara ekspresi fungsi dan deklarasi fungsi:
1. Penamaan fungsi. Pada deklarasi fungsi, nama fungsi langsung diberikan sesuai dengan sintaks yang
disediakan Javascript. Penggunaan ekspresi fungsi pada dasarnya menyimpan sebuah fungsi anonim
ke dalam variabel dan nama fungsi adalah nama variabel yang dibuat. Perlu diingat juga bahwa pada
dasarnya ekspresi fungsi adalah fungsi anonim. Penyimpanan ke dalam variabel hanya diperlukan
karena kita akan memanggil fungsi nantinya.
2. Ekspresi fungsi dapat dipandang sebagai sebuah ekspresi atau perintah standar bagi Javascript, sama
seperti penuliskan kode var i = 0. Deklarasi fungsi merupakan konstruksi khusus untuk membuat
fungsi. Hal ini berarti pada akhir dari ekspresi fungsi kita harus menambahkan, sementara pada
deklarasi fungsi hal tersebut tidak penting.

### 6.4.2. Pemanggilan Fungsi
Sebuah fungsi dapat dipanggil untuk menjalankan seluruh kode yang ada di dalam fungsi tersebut, sesuai
dengan parameter yang kita berikan. Pemanggilan fungsi dilakukan dengan cara menuliskan nama fungsi
tersebut, kemudian mengisikan argumen yang ada di dalam tanda kurung.
Misalkan fungsi tambah yang kita buat pada bagian sebelumnya:
```
var tambah = function (a, b) { hasil = a + b; 
 return hasil; 
};

```
dapat dipanggil seperti berikut:
```
tambah(3, 5);
```
Yang terjadi pada kode di atas adalah nilai a dan b masing-masing digantikan dengan 3 dan 5. Seperti yang
dapat dilihat, hal ini berarti pengisian argumen pada saat pemanggilan fungsi harus berurut sesuai dengan
deklarasi fungsi.
Sama seperti sebuah variabel, fungsi juga mengembalikan nilai ketika dipanggil. Dalam kasus di atas,
tambah(3, 5) akan mengembalikan nilai 8. Nilai ini tentunya dapat disimpan ke dalam variabel baru, atau
bahkan dikirimkan sebagai sebuah argumen ke fungsi lain lagi:
```
var simpan = tambah(3, 5); // simpan === 8
tambah(simpan, 2); // mengembalikan 10 
tambah(tambah(3, 5), 2) // juga mengembalikan 10 
tambah(tambah(2, 3), 4) // mengembalikan 9
```
Fungsi akan mengembalikan nilai ketika kata kunci return ditemukan. Pengembalian nilai fungsi dapat
dilakukan kapanpun, dan fungsi akan segera berhenti ketika kata kunci return ditemukan. Berikut adalah
contoh kode yang memberikan gambaran tentang pengembalian nilai fungsi:
```
var naikkan = function (n) {  
var hasil = n + 10; return  
hasil;  
// kode di bawah tidak dijalankan lagi hasil  
= hasil * 100;  
} naikkan(10); // mengembalikan  
20 naikkan(25); // mengembalikan 
35
```
Sebuah ekspresi dapat juga diberikan langsung kepada keyword return, dan ekspresi tersebut akan
dijalankan sebelum nilai dikembalikan. Hal ini berarti fungsi tambah maupun naikkan yang sebelumnya bisa
disederhanakan dengan tidak lagi menyimpan nilai di variabel hasil terlebih dahulu:
```
var naikkan = function (n) {  
return n + 10;  
} var tambah = function (a,  
b) { return a + b;  
} tambah(4, 4); // mengembalikan 8 
naikkan(10); // mengembalikan 20 
tambah(naikkan(5), 7); // mengembalikan 22
```

## 6.5 BPengenalan jQuery
jQuery adalah sebuah library Javascript yang dibuat oleh John Resig pada tahun 2006. jQuery
memungkinkan manipulasi dokumen HTML dilakukan hanya dalam beberapa baris code. Beberapa fitur
utama yang terdapat pada jQuery adalah:
- DOM manipulation – jQuery memungkinkan untuk memodifikasi DOM (Document Object Model)
menggunakan source selector yang disebut dengan Sizzle.
- Event Handling – jQuery dapat menangani sebuah aksi pada dokumen HTML seperti saat pengguna
melakukan click pada sebuah objek.
- Ajax Support – jQuery dapat memfasilitasi pembuatan website menggunakan teknologi AJAX.
- Animations – pada jQuery terdapat build-in animasi yang dapat digunakan pada halaman web.
- Lightweight – ukuran file jQuery sangat ringan yaitu sekitar 19KB.

jQuery dapat dengan mudah digunakan pada sebuah situs web dengan berbagai cara.
1. Instalasi Lokal
- Kunjungi link https://jquery.com/download/ untuk mengunduh library jQuery.
- Letakkan library yang sudah diunduh pada satu folder yang sama dengan file HTML dengan kode
berikut.
```
<html> 
<head> 
 <title>The jQuery Example</title> 
 <script type="text/javascript" src="jquery-3.7.0.min.js">  </script> 
 <script type="text/javascript"> 
 $(document).ready(function() { 
 document.write("Hello, World!"); 
 }); 
 </script> 
</head> 
<body> 
 <h1>Hello</h1> 
</body> 
</html>
```
Note: pastikan atribut src memiliki nilai yang sama dengan nama file library jQuery.
- Buka file HTML tersebut menggunakan web browser seperti Mozilla atau Chrome. Dan hasil yang
didapatkan adalah sebuah teks “Hello World” seperti yang ditulis pada bagian document.write().

2. Menggunakan CDN (Content Delivery Network)
- Buka file HTML tersebut menggunakan web browser seperti Mozilla atau Chrome. Dan hasil yang
didapatkan adalah sebuah teks “Hello World” seperti yang ditulis pada bagian document.write().
https://code.jquery.com/jquery-3.7.1.min.js
- Buka file HTML menggunakan web browser dan hasil yang ditampilkan akan sama dengan cara
instalasi lokal.

## 6.6 Kegunaan Lanjutan jQuery
### 6.6.1 Efek hide/show
Contoh code:
```
<!DOCTYPE html> 
<html> 
<head> 
 <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>  <script> 
 $(document).ready(function() { 
 $("#hide").click(function() { 
 $("p").hide(); 
 }); 
 $("#show").click(function() { 
 $("p").show(); 
 }); 
 }); 
 </script> 
</head> 
<body> 
 <p>If you click on the "Hide" button, I will disappear.</p> 
 <button id="hide">Hide</button> 
 <button id="show">Show</button> 
</body> 
</html>

```
Penjelasan code:
- Pada baris 4-5, dilakukan pemanggilan library jQuery menggunakan CDN.
- Pada baris 6-15, fungsi jQuery hide/show diaplikasikan pada tag html <p>. Apabila button dengan id
‘hide’ diklik, maka semua konten pada tag <p> akan disembunyikan. Selain itu, apabila button
dengan id ‘show’ diklik, maka semua konten pada tag <p> akan dimunculkan.

### 6.6.2 Efek animasi
Contoh code:
```
<!DOCTYPE html> 
<html> 
<head> 
 <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>  <script> 
 $(document).ready(function() { 
 $("button").click(function() { 
 $("div").animate({ 
 height: 'toggle' 
 }); 
 }); 
 }); 
 </script> 
</head> 
<body> 
 <p>Click the button multiple times to toggle the animation.</p>  <button>Start Animation</button>
 <p>By default, all HTML elements have a static position, and cannot be moved.  To manipulate the position, remember to first set the CSS position property of  the element to relative, fixed, or absolute!</p> 
 <div style="background:#98bf21; height:100px; width:100px; position:absolute;"> </div> 
</body> 
</html>
```
Penjelasan code:
- Pada baris 6-15, fungsi jQuery menganimasikan “toggle” pada tag <div> yang terdapat pada body HTML
berdasarkan tinggi elemen.

## Unguided 
### 1. Buka kembali halaman ramadan dan tambahkan button atau semacam nya ketika di klik akan menampilkan modal "selamat anda mendapatkan THR" buat se interaktif itu dan sebagus mungkin.

### Source Code
```html
<!-- Irshad Benaya Fardeca -->
<!-- 2311102199 -->
<!-- S1IF-11-01 -->

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ramadan Kareem 1447 H</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Amiri:wght@400;700&family=Poppins:wght@300;400;500&display=swap"
        rel="stylesheet" />

    <style>
        :root {
            --gold: #C9A84C;
            --gold-light: #F0D080;
            --deep: #0D1B2A;
            --cream: #FAF3E0;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: var(--deep);
            color: var(--cream);
            min-height: 100vh;
        }

        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background:
                linear-gradient(to bottom, rgba(13, 27, 42, .45) 0%, rgba(13, 27, 42, .88) 100%),
                url('https://images.unsplash.com/photo-1590736969596-1d95cb2e0c5c?w=1400&q=80') center / cover no-repeat;
            padding: 3rem 1.5rem;
            position: relative;
        }

        .label {
            font-size: .72rem;
            letter-spacing: .22em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, .4);
        }

        .arabic-main {
            font-family: 'Amiri', serif;
            font-size: clamp(2.8rem, 9vw, 5.5rem);
            color: var(--gold-light);
            text-shadow: 0 2px 24px rgba(0, 0, 0, .45);
            line-height: 1.4;
        }

        .hero-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.6rem, 4.5vw, 3rem);
            font-weight: 900;
            color: #fff;
        }

        .gold-divider {
            width: 80px;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            margin: 1.2rem auto;
        }

        .body-text {
            font-size: .9rem;
            color: rgba(255, 255, 255, .55);
            line-height: 2;
        }

        .arabic-doa {
            font-family: 'Amiri', serif;
            font-size: clamp(1.3rem, 3.5vw, 2rem);
            color: var(--gold-light);
            line-height: 1.9;
        }

        .ornament {
            color: var(--gold);
            opacity: .4;
            letter-spacing: .5em;
            font-size: .9rem;
        }

        /* ── THR BUTTON ── */
        .thr-btn-wrap {
            margin-top: 2.5rem;
        }

        .thr-btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: .65rem;
            background: linear-gradient(135deg, #b8860b, var(--gold-light), #b8860b);
            background-size: 200% 200%;
            color: #3a1f00;
            font-family: 'Playfair Display', serif;
            font-size: 1.05rem;
            font-weight: 700;
            letter-spacing: .04em;
            border: none;
            border-radius: 999px;
            padding: .85rem 2.2rem;
            cursor: pointer;
            box-shadow: 0 0 0 4px rgba(201, 168, 76, .2), 0 8px 32px rgba(0, 0, 0, .35);
            transition: transform .18s, box-shadow .18s;
        }

        .thr-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 0 6px rgba(240, 208, 128, .3), 0 12px 40px rgba(0, 0, 0, .4);
        }

        .thr-btn:active {
            transform: scale(.97);
        }

        .thr-btn .envelope-icon {
            font-size: 1.3rem;
            display: inline-block;
        }

        .thr-btn-hint {
            font-size: .7rem;
            color: rgba(255, 255, 255, .3);
            letter-spacing: .1em;
            margin-top: .6rem;
        }

        /* ── MODAL OVERLAY ── */
        #thr-modal {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: rgba(8, 14, 22, .82);
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
        }

        #thr-modal.show {
            display: flex;
        }

        .modal-box {
            background: linear-gradient(160deg, #0e2035 0%, #0a1a2b 100%);
            border: 1px solid rgba(201, 168, 76, .35);
            border-radius: 1.25rem;
            max-width: 420px;
            width: 100%;
            padding: 2.5rem 2rem;
            text-align: center;
            position: relative;
            box-shadow: 0 0 60px rgba(201, 168, 76, .1), 0 24px 60px rgba(0, 0, 0, .6);
        }

        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1.2rem;
            background: none;
            border: none;
            color: rgba(255, 255, 255, .35);
            font-size: 1.4rem;
            cursor: pointer;
            line-height: 1;
            transition: color .15s;
        }

        .modal-close:hover {
            color: var(--gold-light);
        }

        .envelope-wrap {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(201, 168, 76, .2), rgba(240, 208, 128, .1));
            border: 1px solid rgba(201, 168, 76, .3);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.4rem;
            font-size: 2.6rem;
        }

        .modal-congrats {
            font-family: 'Playfair Display', serif;
            font-size: 1.05rem;
            font-weight: 700;
            color: rgba(255, 255, 255, .5);
            letter-spacing: .1em;
            text-transform: uppercase;
            margin-bottom: .3rem;
        }

        .modal-headline {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.5rem, 5vw, 2rem);
            font-weight: 900;
            color: var(--gold-light);
            line-height: 1.3;
            margin-bottom: .5rem;
        }

        .modal-arabic {
            font-family: 'Amiri', serif;
            font-size: 1.5rem;
            color: var(--gold-light);
            line-height: 1.8;
            margin-bottom: .3rem;
        }

        .modal-divider {
            width: 60px;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            margin: 1.2rem auto;
        }

        .modal-body-text {
            font-size: .85rem;
            color: rgba(250, 243, 224, .5);
            line-height: 1.9;
            margin-bottom: 1.5rem;
        }

        .amount-badge {
            display: inline-block;
            background: linear-gradient(135deg, rgba(201, 168, 76, .18), rgba(240, 208, 128, .1));
            border: 1px solid rgba(201, 168, 76, .35);
            border-radius: 999px;
            padding: .55rem 1.6rem;
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--gold-light);
            letter-spacing: .03em;
            margin-bottom: 1.6rem;
        }

        .modal-btn-close {
            display: inline-flex;
            align-items: center;
            gap: .5rem;
            background: linear-gradient(135deg, var(--gold), var(--gold-light));
            color: #3a1f00;
            font-family: 'Playfair Display', serif;
            font-size: .95rem;
            font-weight: 700;
            border: none;
            border-radius: 999px;
            padding: .7rem 2rem;
            cursor: pointer;
            transition: transform .15s, box-shadow .15s;
        }

        .modal-btn-close:hover {
            transform: scale(1.04);
            box-shadow: 0 6px 24px rgba(201, 168, 76, .3);
        }

        /* ── CONFETTI ── */
        #confetti-canvas {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 10000;
        }
    </style>
</head>

<body>

    <canvas id="confetti-canvas"></canvas>

    <!-- ════ HERO ════ -->
    <section class="hero">
        <div>
            <p class="label mb-4">Marhaban Yaa</p>
            <h1 class="arabic-main mb-2">رَمَضَانَ كَرِيْم</h1>
            <h2 class="hero-title mb-0">Ramadan Kareem<br>1447 H</h2>
            <div class="gold-divider"></div>

            <p class="body-text mb-4">
                Bulan suci Ramadan telah tiba.<br>
                Selamat menunaikan ibadah puasa.<br>
                Semoga segala amal diterima,<br>
                dosa diampuni, dan doa dikabulkan.
            </p>

            <p class="ornament mb-3">✦ ✦ ✦</p>
            <p class="arabic-doa mb-1">تَقَبَّلَ اللهُ مِنَّا وَمِنْكُمْ</p>
            <p style="font-size:.78rem;color:rgba(255,255,255,.35);font-style:italic;margin-bottom:2.5rem">
                Semoga Allah menerima (amal) dari kami dan dari kalian.
            </p>

            <!-- THR BUTTON -->
            <div class="thr-btn-wrap">
                <button class="thr-btn" id="thr-trigger">
                    <span class="envelope-icon">🎁</span>
                    Ada yang istimewa untukmu
                </button>
                <p class="thr-btn-hint mt-2">Ketuk untuk membuka</p>
            </div>
        </div>
    </section>

    <!-- ════ THR MODAL ════ -->
    <div id="thr-modal">
        <div class="modal-box" id="modal-box">
            <button class="modal-close" id="modal-close-btn">&times;</button>

            <div class="envelope-wrap">🎊</div>

            <p class="modal-congrats">Selamat!</p>
            <h3 class="modal-headline">Anda Mendapatkan<br>THR Lebaran! 🌙</h3>

            <div class="modal-divider"></div>

            <p class="modal-arabic">عِيدٌ مُبَارَكٌ</p>

            <p class="modal-body-text">
                Semoga THR ini membawa keberkahan<br>
                dan kebahagiaan di hari kemenangan.<br>
                Taqabbalallahu minna wa minkum.
            </p>

            <div class="amount-badge">Rp 1.000.000 💛</div>

            <br>
            <button class="modal-btn-close" id="modal-ok-btn">
                <i class="bi bi-check-circle-fill"></i>
                Alhamdulillah, Terima Kasih!
            </button>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"></script>

    <script>
        $(function () {

            /* ── Confetti burst ── */
            function launchConfetti() {
                var colors = ['#F0D080', '#C9A84C', '#fff', '#FFD700', '#FFFACD'];
                var end = Date.now() + 2800;

                (function frame() {
                    confetti({
                        particleCount: 5,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: colors
                    });
                    confetti({
                        particleCount: 5,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: colors
                    });
                    if (Date.now() < end) requestAnimationFrame(frame);
                })();

                confetti({
                    particleCount: 120,
                    spread: 100,
                    origin: { y: 0.5 },
                    colors: colors,
                    scalar: 1.2
                });
            }

            /* ── Open modal ── */
            $('#thr-trigger').on('click', function () {
                $('#thr-modal').addClass('show');
                launchConfetti();

                /* coin shower after a beat */
                setTimeout(function () {
                    confetti({
                        particleCount: 60,
                        spread: 80,
                        origin: { y: 0.3 },
                        shapes: ['circle'],
                        colors: ['#F0D080', '#C9A84C', '#FFD700']
                    });
                }, 700);
            });

            /* ── Close modal ── */
            function closeModal() {
                $('#thr-modal').removeClass('show');
            }

            $('#modal-close-btn, #modal-ok-btn').on('click', closeModal);

            /* close on backdrop click */
            $('#thr-modal').on('click', function (e) {
                if ($(e.target).is('#thr-modal')) closeModal();
            });

            /* close on Escape */
            $(document).on('keydown', function (e) {
                if (e.key === 'Escape') closeModal();
            });

        });
    </script>
</body>

</html>
```

### Output:
<img src="asset/output.png"/>