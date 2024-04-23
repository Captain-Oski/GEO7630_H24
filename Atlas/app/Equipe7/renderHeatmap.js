function generateHeatmap() {
    map.addSource('DD891050.trajet_velo-heatmap-source', { // source s de données associé au heatMap
        'type': 'vector',
        'tiles': ["https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.trajet_velo_heatmap/{z}/{x}/{y}.pbf"]
    });
    map.addLayer({
        'id': 'DD891050.trajet_velo-heatmap',
        'type': 'heatmap',
        'source': 'DD891050.trajet_velo-heatmap-source',
        'source-layer': 'DD891050.trajet_velo_heatmap',
        'paint': {
            // Tweak these values as needed
            'heatmap-opacity': 0.8,
            'heatmap-radius': 10,
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0, 'rgba(0, 0, 255, 0)', // No heat
                0.1, 'royalblue',
                0.3, 'cyan',
                0.5, 'lime',
                0.7, 'yellow',
                1, 'red' // Maximum heat
            ]
        }
    });
}

// Event listener for the checkbox

document
  .getElementById('generateHeatmap') // id unique du bouton
  .addEventListener('click', generateHeatmap); // ajoute un event de type click qui lance la fonction generateHeatmap()