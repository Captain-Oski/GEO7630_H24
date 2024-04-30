function load_station() {
    alert('La couche est ajoutée avec succès.');

    // Suppression de toutes les couches et sources existantes de la carte
  //  removeAllLayersAndSources();

    // Ajout d'une source de données à la carte avec clustering
    map.addSource('h3_source', {
        type: 'vector',
        tiles: ["https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.iqa_par_station/{z}/{x}/{y}.pbf"]
    });

    // Ajout d'une couche pour afficher les clusters
    map.addLayer({
        'id': 'stationsIQA',
        'type': 'circle',
        'source': 'h3_source', // Correction du nom de la source
        'source-layer': 'EG591962.iqa_par_station',
        'paint': {
            'circle-color': '#008000', // Couleur de remplissage (vert)
            'circle-opacity': 0.5
        }
    });

    // Définir la légende
    const legend = {
        'stationsIQA': 'Stations IQA',
    }

    // Ajouter le contrôle de légende
    addLegendControl(legend);
}

function addLegendControl(legend) {
    const legendContainer = document.createElement('div');
    legendContainer.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

    for (const layerId in legend) {
        const layerName = legend[layerId];
        const item = document.createElement('div');
        item.className = 'mapboxgl-ctrl mapboxgl-ctrl-legend';
        item.innerHTML = `<span class="legend-icon" style="background-color: #008000;"></span>${layerName}`; // Correction de la couleur dans la légende
        legendContainer.appendChild(item);
    }

    map.getContainer().appendChild(legendContainer);
}

// Écouteur d'événement pour le bouton de génération des clusters
document
    .getElementById('load_station')
    .addEventListener('click', load_station);
