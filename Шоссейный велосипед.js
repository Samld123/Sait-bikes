// Шоссейный велосипед.js
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
    changeSlide(0); // Инициализация слайда
    showTab('description'); // Показать вкладку "Описание" по умолчанию
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}