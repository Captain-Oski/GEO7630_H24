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
        tiles: ['https://vigilant-doodle-r447pqpv4957hwpgq-8801.app.github.dev/FH791176.pistes_cyclables_agreables/{z}/{x}/{y}.pbf'],
        minzoom: 0,
        maxzoom: 22
     });

    map.addSource('zone_travaux-source', {
        type: 'vector',
        tiles: ['https://vigilant-doodle-r447pqpv4957hwpgq-8801.app.github.dev/FH791176.zone_travaux/{z}/{x}/{y}.pbf'],
        minzoom: 0,
        maxzoom: 22
    });


    
    // Ajouter les couches
    map.addLayer({
       'id': 'pistes_cyclables_agreables',
       'type': 'line', 
       'source': 'pistes_cyclables_agreables-source',
      'source-layer': 'FH791176.pistes_cyclables_agreables'
   });

    map.addLayer({
        'id': 'zone_travaux',
        'type': 'line',
        'source': 'zone_travaux-source',
        'source-layer': 'FH791176.zone_travaux'
    });
}

document.getElementById('loadDataButton').addEventListener('click', function() {
    addDataToMap();
});