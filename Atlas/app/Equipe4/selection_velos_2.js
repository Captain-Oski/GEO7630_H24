function selection_velos() {
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

    console.log(heure_slider)

    // Ajoutez la couche "velos" en utilisant la variable d'heure
    map.addLayer({
        "id": 'velos',
        "type": 'line',
        "source": 'velos-source',
        'source-layer': "GK191080.troncons_compte_velos",
        "paint": {
            'line-color': [
                'interpolate',['linear'],["to-number", ["get", "compte_total_heure_" + heure_slider]],
                0,
                '#2AFF2A',
                32,
                '#00D400',
                128,
                '#008000',
                373,
                '#002B00'
              ],
            'line-width': 2,
            'line-opacity': 0.8
        }
    });
}

document.getElementById('velos').addEventListener('click', () => {
    selection_velos();

    for (let i = 0; i < id_sources.length; i++) {
        if (map.getLayer(id_sources[i])) {
            layerActive = id_sources[i]
        }
    };
    
    getPaintAttributes();

});
