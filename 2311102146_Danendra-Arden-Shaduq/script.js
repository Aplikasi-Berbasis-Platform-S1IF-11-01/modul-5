document.addEventListener('DOMContentLoaded', () => {
    const modalElement = document.getElementById('thrModal');
    
    function fireConfetti() {
        const end = Date.now() + (3 * 1000);
        const colors = ['#ffc107', '#2ecc71', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    modalElement.addEventListener('shown.bs.modal', fireConfetti);
});