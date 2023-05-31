// MDN
// Событие Domcontent, загруженное, стреляет, когда начальный HTML -документ был полностью загружен и анализирован, не ожидая таблиц стилей, изображений и подкол для завершения загрузки.
// Событие загрузки запускается при загрузке всей страницы, включая все зависимые ресурсы, такие как таблицы стилей и изображения.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
});

// preloader

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
});
