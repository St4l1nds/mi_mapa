function initMap() {
    // Inicializar mapa en Ecuador
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -0.989, lng: -78.626 }, // Latitud y longitud aproximada
        zoom: 10,
    });

    // Agregar la capa KML desde GitHub Pages
    var kmlLayer = new google.maps.KmlLayer({
        url: "https://st4l1nds.github.io/mi_mapa/Cobertura.kml", // URL del KML en GitHub Pages
        map: map,
        preserveViewport: true
    });

    kmlLayer.addListener("status_changed", function() {
        if (kmlLayer.getStatus() !== google.maps.KmlLayerStatus.OK) {
            console.error("Error al cargar el KML:", kmlLayer.getStatus());
        }
    });
}
