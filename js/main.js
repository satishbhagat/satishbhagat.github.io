function scrollToApp(id) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.add('ring-2', 'ring-offset-2');
    el.classList.add(id === 'app-fintrack' ? 'ring-emerald-400' : 'ring-violet-400');
    setTimeout(() => el.classList.remove('ring-2', 'ring-offset-2', 'ring-emerald-400', 'ring-violet-400'), 1800);
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
