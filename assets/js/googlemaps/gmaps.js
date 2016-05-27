/**
 * Created by anudeeppalanki on 7/7/15.
 */

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var myLatLong = new google.maps.LatLng(38.6388333, -90.2420642);
    var mapOptions = {
        center: myLatLong,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLong,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Krishna Balaram Mandir (ISKCON St.Louis)'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: 'ISKCON Temple <br/> ' +
        '<a href="https://maps.google.com?daddr=3926+Lindell+Blvd+St.Louis+MO+63108" target="_blank">Directions to here</a> '
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
