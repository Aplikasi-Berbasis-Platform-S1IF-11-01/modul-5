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