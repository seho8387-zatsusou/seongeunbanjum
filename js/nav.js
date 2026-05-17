document.addEventListener('DOMContentLoaded', function () {
    var banner = document.getElementById('noticeBanner');
    var nav = document.querySelector('.topnav');

    function adjustNav() {
        if (banner && nav) {
            nav.style.top = banner.classList.contains('hidden') ? '0' : banner.offsetHeight + 'px';
        }
    }

    adjustNav();
    window.addEventListener('resize', adjustNav);

    var noticeClose = document.getElementById('noticeClose');
    if (noticeClose) {
        noticeClose.addEventListener('click', function () {
            banner.classList.add('hidden');
            adjustNav();
        });
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
