ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.61],
        zoom: 13,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.77, 37.65], {
        balloonContentHeader: 'Встречаемся тут!'
    }, {
        preset: 'islands#redIcon',
    });

    myMap.geoObjects.add(myPlacemark);
}