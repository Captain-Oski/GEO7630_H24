document.getElementById('filtre_utop').addEventListener('click', function() {
    // Define the mapbox line layer
    map.setPaintProperty('pistes_cyclables_agreables', 'line-color', [
        'case',
        ['<', ['get', 'ind_utop'], 15], 'red',
        ['<', ['get', 'ind_utop'], 30], '#eaf04f',
        ['>=', ['get', 'ind_utop'], 30], '#00FF00',
        'gray'  // Default color
    ]);
});