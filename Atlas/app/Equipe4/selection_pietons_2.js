function selection_pietons() {
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


    // Ajoutez la couche "pietons" en utilisant la variable d'heure
    map.addLayer({
        "id": 'pietons',
        "type": 'line',
        "source": 'pietons-source',
        'source-layer': "GK191080.troncons_compte_pietons",
        "paint": {
            'line-color': [
                'interpolate',['linear'],["to-number", ["get", "compte_total_heure_" + heure_slider]],
                0,
                '#2AFFD5',
                67,
                '#00D4AA',
                207,
                '#008066',
                465,
                '#002B22',
              ],
            'line-width': 2,
            'line-opacity': 0.8
        }
    });
}

document.getElementById('pietons').addEventListener('click', () => {
    selection_pietons();

    for (let i = 0; i < id_sources.length; i++) {
        if (map.getLayer(id_sources[i])) {
            layerActive = id_sources[i]
        }
    };
    
    getPaintAttributes();

});
