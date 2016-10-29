var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
var crd = pos.coords;

console.log('Your current position is:');
console.log('Latitude : ' + crd.latitude);
console.log('Longitude: ' + crd.longitude);
console.log('More or less ' + crd.accuracy + ' meters.');
google.maps.event.addDomListener(
    window, 'load', initialize(crd.latitude,crd.longitude));
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};
function initialize(x,y) {
    var mapOptions = {
        center: { lat: x, lng: y},
        zoom: 12
};
var map = new google.maps.Map(
    document.getElementById('map-canvas'),
    mapOptions);
}
navigator.geolocation.getCurrentPosition(success, error, options);
