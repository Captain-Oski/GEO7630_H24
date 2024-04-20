///filtre_famille
///filtre les donnees selon le clic du bouton, la function peut etre a definir, je ne suis pas sûr de la fonction de ce mot exactement
///mettre le bon nom de bouton
document.getElementById('BUTTON_TO_BE_NAMED').addEventListener('click', function() {
    // Define the mapbox line layer
    map.setFilter('pistes_cyclables_agreables', [
        'match',
        ['get', 'ind_fam_norm'], // Changed from 'ind_utop' to 'ind_fam'
        0, 15, 'red', // If ind_fam is between 0 and 15, color it red
        15, 30, 'yellow', // If ind_fam is between 15 and 30, color it yellow
        30, Infinity, 'green', // If ind_fam is 30 or over, color it green
        'gray' // Default color for values not matched by any case
    ]);
});

///filtre_sportif

///filtre les donnees selon le clic du bouton, la function peut etre a definir, je ne suis pas sûr de la fonction de ce mot exactement
///mettre le bon nom de bouton
document.getElementById('BUTTON_TO_BE_NAMED').addEventListener('click', function() {
    // Define the mapbox line layer
    map.setFilter('pistes_cyclables_agreables', [
        'match',
        ['get', 'ind_sport'], // Changed from 'ind_utop' to 'ind_sport'
        0, 15, 'red', // If ind_sport is between 0 and 15, color it red
        15, 30, 'yellow', // If ind_sport is between 15 and 30, color it yellow
        30, Infinity, 'green', // If ind_sport is 30 or over, color it green
        'gray' // Default color for values not matched by any case
    ]);
});

///filtre_utop

///filtre les donnees selon le clic du bouton, la function peut etre a definir, je ne suis pas sûr de la fonction de ce mot exactement
///mettre le bon nom de bouton
document.getElementById('BUTTON_TO_BE_NAMED').addEventListener('click', function() {
    // Define the mapbox line layer
    map.setFilter('pistes_cyclables_agreables', [
        'match',
        ['get', 'ind_utop'],
        0, 15, 'red', // If ind_utop is between 0 and 15, color it red
        15, 30, 'yellow', // If ind_utop is between 15 and 30, color it yellow
        30, Infinity, 'green', // If ind_utop is 30 or over, color it green
        'gray' // Default color for values not matched by any case
    ]);
});