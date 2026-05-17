document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('noticeOverlay');

    function closeNotice() {
        if (overlay) overlay.classList.add('hidden');
    }

    var noticeClose = document.getElementById('noticeClose');
    var noticeConfirm = document.getElementById('noticeConfirm');
    if (noticeClose) noticeClose.addEventListener('click', closeNotice);
    if (noticeConfirm) noticeConfirm.addEventListener('click', closeNotice);
    if (overlay) overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeNotice();
    });

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
