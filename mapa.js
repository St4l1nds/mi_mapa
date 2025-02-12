function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -0.315, lng: -78.45 } // Quito
    });

    var kmlLayer = new google.maps.KmlLayer({
        url: window.location.origin + '/Cobertura.kml',
        map: map,
        preserveViewport: true
    });

    kmlLayer.addListener('status_changed', function() {
        if (kmlLayer.getStatus() !== 'OK') {
            console.error("Error al cargar el KML: " + kmlLayer.getStatus());
        }
    });
}
