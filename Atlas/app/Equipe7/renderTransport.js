function Transport() {
    map.addSource('DD891050.ligne_de_transport-source', {
        'type': 'vector',
        'tiles': ["https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.ligne_de_transport/{z}/{x}/{y}.pbf"]
    });
    map.addLayer({
        'id': 'DD891050.ligne_de_transport',
        'type': 'line',
        'source': 'DD891050.ligne_de_transport-source', // Correction ici
        'source-layer': 'DD891050.ligne_de_transport-source',
        'paint': {
            "line-color": "rgba(189, 19, 19, 1)",
            "line-opacity": 1,
            "line-width": 1,
            "line-translate-anchor": "map"
        }
    });
}

const LigneTransportCheckbox = document.querySelector('#LigneTransportCheckbox'); 

LigneTransportCheckbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        Transport();
    } else {
        // Supprimer la couche et la source lorsque la case à cocher est décochée
        map.removeLayer('DD891050.ligne_de_transport');
        map.removeSource('DD891050.ligne_de_transport-source');
    }
});