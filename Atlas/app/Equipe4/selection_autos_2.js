function selection_autos() {
    const id_layer = ['autos','velos','pietons','camions','bus'];
    
    for (let i = 0; i < id_layer.length; i++) {
        if (map.getLayer(id_layer[i])) {
            map.removeLayer(id_layer[i]);
        }
    }
    
    var heure_slider = parseInt(document.getElementById('range').value, 10).toString();
    if (heure_slider.length == 1) {
        heure_slider = "0" + heure_slider
    };


    // Ajoutez la couche "autos" en utilisant la variable d'heure
    map.addLayer({
        "id": 'autos',
        "type": 'line',
        "source": 'autos-source',
        'source-layer': "GK191080.troncons_compte_voitures",
        "paint": {
            'line-color': [
                'interpolate',
                ['linear'],
                ["to-number", ["get", "compte_total_heure_" + heure_slider]],
                0,
                '#FF2A2A',
                694,
                '#D40000',
                1646,
                '#800000',
                2999,
                '#2B0000',
            ],
            'line-width': 2,
            'line-opacity': 0.8
        }
    });
}

document.getElementById('autos').addEventListener('click', () => {
    selection_autos();

    for (let i = 0; i < id_sources.length; i++) {
        if (map.getLayer(id_sources[i])) {
            layerActive = id_sources[i]
        }
    };

    getPaintAttributes();

});
