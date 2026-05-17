document.addEventListener('DOMContentLoaded', function () {
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
