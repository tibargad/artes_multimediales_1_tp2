document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('open-cine-window');
    const modal = document.getElementById('cine-window');
    const closeBtn = modal.querySelector('.close-button');

    openBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});