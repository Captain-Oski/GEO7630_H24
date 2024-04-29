function selection_bus() {
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


    // Ajoutez la couche "bus" en utilisant la variable d'heure
    map.addLayer({
        "id": 'bus',
        "type": 'line',
        "source": 'bus-source',
        'source-layer': "GK191080.troncons_compte_bus",
        "paint":{
                'line-color': [
                    'interpolate',['linear'],["to-number", ["get", "compte_total_heure_" + heure_slider]],
                    0,
                    '#2A7FFF',
                    17,
                    '#0055D4',
                    42,
                    '#003380',
                    85,
                    '#00112B',
                  ],
                'line-width': 2,
                'line-opacity': 0.8
            }
    });
}

document.getElementById('bus').addEventListener('click', () =>{
    selection_bus();

    for (let i = 0; i < id_sources.length; i++) {
        if (map.getLayer(id_sources[i])) {
            layerActive = id_sources[i]
        }
    };
    
    getPaintAttributes();


});
