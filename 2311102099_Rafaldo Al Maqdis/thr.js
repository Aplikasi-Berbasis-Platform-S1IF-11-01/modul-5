/* ════════════════════════════════════════════════════
   thr.js  —  THR Envelope / Reveal / Toast / Claim
   Ramadan 2026 · Bootstrap 5
════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Wait for DOM + Bootstrap to be ready ────────────────
  document.addEventListener('DOMContentLoaded', function () {

    // ── References ────────────────────────────────────────
    const modalEl         = document.getElementById('thrModal');
    const stepEnvelope    = document.getElementById('stepEnvelope');
    const stepReveal      = document.getElementById('stepReveal');
    const btnOpen         = document.getElementById('btnOpenEnvelope');
    const btnClaim        = document.getElementById('btnClaim');
    const toastEl         = document.getElementById('thrToast');

    if (!modalEl) return; // guard — only runs on index.html

    const bsModal = new bootstrap.Modal(modalEl, {
      backdrop: 'static',
      keyboard: false
    });
    const bsToast = new bootstrap.Toast(toastEl, { delay: 4500 });

    // ── Auto-show on first load (no sessionStorage repeat) ─
    // Remove the sessionStorage guard below if you always
    // want the popup to appear on every visit.
    if (!sessionStorage.getItem('thr_seen')) {
      bsModal.show();
    }

    modalEl.addEventListener('hidden.bs.modal', function () {
      sessionStorage.setItem('thr_seen', '1');
    });

    // ── Step 1 → Step 2 : Open the Envelope ───────────────
    btnOpen.addEventListener('click', function () {
      // Fade out envelope step
      stepEnvelope.style.transition = 'opacity .3s ease';
      stepEnvelope.style.opacity    = '0';

      setTimeout(function () {
        stepEnvelope.classList.add('d-none');
        stepReveal.classList.remove('d-none');
        stepReveal.classList.add('thr-fade-in');
      }, 300);
    });

    // ── Step 2 → Toast + redirect ──────────────────────────
    btnClaim.addEventListener('click', function () {
      // Disable button to prevent double-click
      btnClaim.disabled    = true;
      btnClaim.textContent = 'Redirecting…';

      // Show toast
      bsToast.show();

      // Close modal smoothly then redirect
      setTimeout(function () {
        bsModal.hide();
      }, 600);

      setTimeout(function () {
        window.location.href = 'claim.html';
      }, 1800);
    });

  });

})();