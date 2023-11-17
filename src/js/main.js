import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.769383, 37.638521],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13
    });

    var myPlacemark = new ymaps.Placemark([55.769383, 37.638521], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Ellipse 2.png',
        iconImageSize: [15, 15],
        iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}

// ПОИСК

let input = document.querySelector(".header__form__input");
let searchOpen = document.querySelector(".form-btn__open");


searchOpen.addEventListener('click', function(){
  document.querySelector('.header__form').classList.add('form__active');
  this.classList.add("active");
  setTimeout(() => input.focus(), 400)
});