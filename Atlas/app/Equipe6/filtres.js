///filtre_famille
///filtre les donnees selon le clic du bouton, la function peut etre a definir, je ne suis pas sûr de la fonction de ce mot exactement
///mettre le bon nom de bouton
document.getElementById('filtre_famille').addEventListener('click', function() {
    // Define the mapbox line layer
    map.setPaintProperty('pistes_cyclables_agreables', 'line-color', [
        'case',
        ['<', ['get', 'ind_fam_norm'], 15], 'red',
        ['<', ['get', 'ind_fam_norm'], 30], 'yellow',
        ['>=', ['get', 'ind_fam_norm'], 30], 'green',
        'gray'  // Default color
    ]);
});

///filtre_sportif

///filtre les donnees selon le clic du bouton, la function peut etre a definir, je ne suis pas sûr de la fonction de ce mot exactement
///mettre le bon nom de bouton
document.getElementById('filtre_sportif').addEventListener('click', function() {
    // Define the mapbox line layer
    map.setPaintProperty('pistes_cyclables_agreables', 'line-color', [
        'case',
        ['<', ['get', 'ind_sport'], 15], 'red',
        ['<', ['get', 'ind_sport'], 30], 'yellow',
        ['>=', ['get', 'ind_sport'], 30], 'green',
        'gray'  // Default color
    ]);
});

///filtre_utop

///filtre les donnees selon le clic du bouton, la function peut etre a definir, je ne suis pas sûr de la fonction de ce mot exactement
///mettre le bon nom de bouton
document.getElementById('filtre_utop').addEventListener('click', function() {
    // Define the mapbox line layer
    map.setPaintProperty('pistes_cyclables_agreables', 'line-color', [
        'case',
        ['<', ['get', 'ind_utop'], 15], 'red',
        ['<', ['get', 'ind_utop'], 30], 'yellow',
        ['>=', ['get', 'ind_utop'], 30], 'green',
        'gray'  // Default color
    ]);
});