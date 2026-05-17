function closeNotice() {
    var overlay = document.getElementById('noticeOverlay');
    if (overlay) overlay.style.display = 'none';
    try { localStorage.setItem('noticeClosedAt', Date.now().toString()); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('noticeOverlay');
    if (overlay) {
        var closed = localStorage.getItem('noticeClosedAt');
        var expired = !closed || (Date.now() - parseInt(closed) > 24 * 60 * 60 * 1000);
        if (!expired) overlay.style.display = 'none';
    }

    var toggle = document.getElementById('navToggle');
    var links = document.querySelector('.topnav-links');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            toggle.classList.remove('open');
            links.classList.remove('open');
        });
    });
});
