// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/844ceac7-1626-4655-8d90-45433d56d02b/style.json?key=ldEZwRKSd58kyBXzxzqw', // URL du style de la carte
    center: [-73.70, 45.55], // position centrale de la carte
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
        'line-color': 'white',
        'line-width': 1.5
      }
   });

    map.addLayer({
        'id': 'zone_travaux',
        'type': 'line',
        'source': 'zone_travaux-source',
        'source-layer': 'FH791176.zone_travaux',
        'paint': {
            'line-color': '#e86609',
            'line-width': 20
        }
    });


}

function adjustMapDisplay() {
    // Ajuster la hauteur de la carte
    var mapContainer = document.getElementById('map');
    mapContainer.style.bottom = 0; // Change la hauteur pour la fonction spécifique

    // Enlever la petite boîte conne
    var petite_boite_conne = document.querySelector('.map-overlay-inner');
    if(petite_boite_conne) {
        petite_boite_conne.style.display = 'none';
    }
}


/*var tiffUrl = "https://uqam.maps.arcgis.com/sharing/rest/content/items/b448abfa2ef643c29f9ec046df014069/data";
 
      // Create an ImageryLayer from the TIFF file URL

      var imageryLayer = new ImageryLayer({

        url: tiffUrl

      });
 
      // Add the imagery layer to the map

      map.add(imageryLayer);*/

map.on('load', function() {
    addDataToMap();
    adjustMapDisplay()
});

/*
document.addEventListener('DOMContentLoaded', function() {
    var mapContainer = document.getElementById('map');
    mapContainer.style.bottom = '0'
})*/

