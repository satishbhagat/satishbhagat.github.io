function scrollToApp(id) {
    event.preventDefault();
    document.querySelectorAll('#app-modal [id^="modal-"]').forEach(el => el.classList.add('hidden'));
    const modalId = id === 'app-fintrack' ? 'modal-fintrack' : 'modal-collab';
    document.getElementById(modalId).classList.remove('hidden');
    document.getElementById('app-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeAppModal() {
    document.getElementById('app-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function togglePoems() {
    const body = document.getElementById('poems-body');
    const icon = document.getElementById('poems-toggle-icon');
    const isHidden = body.classList.toggle('hidden');
    icon.textContent = isHidden ? '+' : '−';
    if (!isHidden) {
        setTimeout(() => document.getElementById('poems').scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
}

function openPoems() {
    const body = document.getElementById('poems-body');
    const icon = document.getElementById('poems-toggle-icon');
    if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
        icon.textContent = '−';
    }
    setTimeout(() => document.getElementById('poems').scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

function showPoem(id) {
    document.querySelectorAll('#poems-detail > div[id]').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('poems-index').classList.add('hidden');
    document.getElementById('poems-detail').classList.remove('hidden');
    document.getElementById('poems').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showPoemsIndex() {
    document.getElementById('poems-detail').classList.add('hidden');
    document.getElementById('poems-index').classList.remove('hidden');
}
