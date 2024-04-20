// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/844ceac7-1626-4655-8d90-45433d56d02b/style.json?key=ldEZwRKSd58kyBXzxzqw', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 10, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

function addDataToMap() {
    // Supprimer les sources et les couches
    if (map.getLayer('pistes_cyclables_agreables')) {
        map.removeLayer('pistes_cyclables_agreables');
    }
    if (map.getSource('pistes_cyclables_agreables-source')) {
        map.removeSource('pistes_cyclables_agreables-source');
    }

    if (map.getLayer('zone_travaux')) {
        map.removeLayer('zone_travaux');
    }
    if (map.getSource('zone_travaux-source')) {
        map.removeSource('zone_travaux-source');
    }


    // Ajouter les sources
    map.addSource('pistes_cyclables_agreables-source', {
        type: 'vector',
        tiles: ['https://friendly-trout-jj5q9rp765q935g9j-8801.app.github.dev/FH791176.pistes_cyclables_agreables/{z}/{x}/{y}.pbf'],
        minzoom: 0,
        maxzoom: 22
     });

    map.addSource('zone_travaux-source', {
        type: 'vector',
        tiles: ['https://friendly-trout-jj5q9rp765q935g9j-8801.app.github.dev/FH791176.zone_travaux/{z}/{x}/{y}.pbf'],
        minzoom: 0,
        maxzoom: 22
    });


    
    // Ajouter les couches
    map.addLayer({
       'id': 'pistes_cyclables_agreables',
       'type': 'line', 
       'source': 'pistes_cyclables_agreables-source',
      'source-layer': 'FH791176.pistes_cyclables_agreables',
      'paint': {
        'line-color': '#FF0000',
        'line-width': 1.5
      }
   });

    map.addLayer({
        'id': 'zone_travaux',
        'type': 'line',
        'source': 'zone_travaux-source',
        'source-layer': 'FH791176.zone_travaux',
        'paint': {
            'line-color': '#FF0000',
            'line-width': 5
        }
    });
}

function adjustMapDisplay() {
    var mapContainer = document.getElementById('map');
    mapContainer.style.height = '100%'; // Change la hauteur pour la fonction spécifique
}


map.on('load', function() {
    addDataToMap();
    adjustMapDisplay();
});