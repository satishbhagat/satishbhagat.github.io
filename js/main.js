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

function toggleLike(poemId) {
    const liked = localStorage.getItem('like_' + poemId) === 'true';
    const count = parseInt(localStorage.getItem('like_count_' + poemId) || '0');
    const newLiked = !liked;
    const newCount = newLiked ? count + 1 : Math.max(0, count - 1);
    localStorage.setItem('like_' + poemId, newLiked);
    localStorage.setItem('like_count_' + poemId, newCount);
    applyLikeUI(poemId, newLiked, newCount);
}

function applyLikeUI(poemId, liked, count) {
    const heart = document.getElementById('like-heart-' + poemId);
    const countEl = document.getElementById('like-count-' + poemId);
    const btn = document.getElementById('like-btn-' + poemId);
    if (!heart) return;
    if (liked) {
        heart.setAttribute('fill', 'currentColor');
        heart.classList.add('text-rose-500');
        heart.classList.remove('text-gray-400');
        btn.classList.add('border-rose-300', 'bg-rose-50');
        btn.classList.remove('border-gray-200');
        countEl.classList.add('text-rose-500');
        countEl.classList.remove('text-gray-500');
    } else {
        heart.setAttribute('fill', 'none');
        heart.classList.remove('text-rose-500');
        heart.classList.add('text-gray-400');
        btn.classList.remove('border-rose-300', 'bg-rose-50');
        btn.classList.add('border-gray-200');
        countEl.classList.remove('text-rose-500');
        countEl.classList.add('text-gray-500');
    }
    countEl.textContent = count;
}

document.addEventListener('DOMContentLoaded', function() {
    ['poem1', 'poem2', 'poem3', 'poem4', 'poem5'].forEach(function(poemId) {
        const liked = localStorage.getItem('like_' + poemId) === 'true';
        const count = parseInt(localStorage.getItem('like_count_' + poemId) || '0');
        applyLikeUI(poemId, liked, count);
    });
});
