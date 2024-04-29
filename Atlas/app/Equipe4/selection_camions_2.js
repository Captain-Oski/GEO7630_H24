function selection_camions() {
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


    // Ajoutez la couche "camions" en utilisant la variable d'heure
    map.addLayer({
        "id": 'camions',
        "type": 'line',
        "source": 'camions-source',
        'source-layer': "GK191080.troncons_compte_camions",
        "paint": {
            'line-color': [
                'interpolate',['linear'],["to-number", ["get", "compte_total_heure_" + heure_slider]],
                0,
                '#FF2AD4',
                33,
                '#D400AA',
                92,
                '#800066',
                225,
                '#2B0022',
              ],
            'line-width': 2,
            'line-opacity': 0.8
        }
    });
}

document.getElementById('camions').addEventListener('click', () => { 
selection_camions();

for (let i = 0; i < id_sources.length; i++) {
    if (map.getLayer(id_sources[i])) {
        layerActive = id_sources[i]
    }
};

getPaintAttributes();
});
