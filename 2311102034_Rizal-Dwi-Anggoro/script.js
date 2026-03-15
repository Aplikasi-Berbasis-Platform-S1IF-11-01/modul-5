document.addEventListener('DOMContentLoaded', () => {
    const btnBuka = document.getElementById('btnBukaThr');
    const nominalElement = document.getElementById('nominalThr');
    const thrModal = new bootstrap.Modal(document.getElementById('thrModal'));
    const particleContainer = document.getElementById('particle-container');

    // List nominal THR acak
    const daftarNominal = [
        "Rp 100.000",
        "Rp 250.000",
        "Rp 750.000",
        "Rp 1.500.000",
        "Rp 5.000.000"
    ];

    // 1. Buat efek partikel cahaya di latar belakang saat halaman dimuat
    createBackgroundParticles();

    btnBuka.addEventListener('click', () => {
        // 2. Pilih nominal secara acak
        const randomNominal = daftarNominal[Math.floor(Math.random() * daftarNominal.length)];
        nominalElement.innerText = randomNominal;

        // 3. Tampilkan Modal
        thrModal.show();
    });

    function createBackgroundParticles() {
        // Buat 30 partikel cahaya kecil yang berkedip
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('light-particle');
            
            // Atur posisi, ukuran, dan delay animasi secara acak
            const size = Math.random() * 4 + 1 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.2;

            particleContainer.appendChild(particle);
        }
    }
});