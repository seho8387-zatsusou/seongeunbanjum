document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('noticeOverlay');
    var NOTICE_KEY = 'noticeClosedAt';
    var HOURS = 24;

    function shouldShow() {
        var closed = localStorage.getItem(NOTICE_KEY);
        if (!closed) return true;
        return Date.now() - parseInt(closed) > HOURS * 60 * 60 * 1000;
    }

    function closeNotice() {
        if (overlay) {
            overlay.style.display = 'none';
            localStorage.setItem(NOTICE_KEY, Date.now().toString());
        }
    }

    if (overlay) {
        if (!shouldShow()) {
            overlay.style.display = 'none';
        }
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
