'use strict';

// Кликаем по бургер меню
const burger = document.querySelector('#button');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
	menu.classList.toggle('disp');
});


// Прокрутка при клике
$("[data-scroll]").click(function() {
	let elementID = $(this).data('scroll');
	let elementOffset = $(elementID).offset().top; // ID откуда кливаем


	$('html, body').animate({
		scrollTop: elementOffset - 80 // класс объекта к которому приезжаем
	}, 1200); // Скорость прокрутки
});