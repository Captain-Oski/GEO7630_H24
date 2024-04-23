// création d'une fonction pour charger une couche WFS : arrondissements
function loadWFS() {
    // Ajout de la source de données des arrondissements depuis pgFeatureServ
    map.addSource('arrondissements-source', {
        type: 'featurecollection', // Type de source de données
        data: 'https://sturdy-fiesta-v669g4447rjgh6gxj-9000.app.github.dev/collections/geo7630.arrondissements/items.json' // URL JSON des arrondissements
    });

    // Ajout de la couche des arrondissements à la carte MapLibre
    map.addLayer({
        'id': 'arrondissements', // Identifiant de la couche
        'type': 'fill', // Type de géométrie de la couche (remplissage)
        'source': 'arrondissements-source', // source de la couche
        'paint': {
            'fill-outline-color': 'black',
            'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire
            'fill-opacity': 0.3 // Opacité de remplissage (30%)
        }
    });
}// fin de la fonciton

document
    .getElementById('loadWFS') // ID unique du bouton
    .addEventListener('click', loadWFS); // Ajout de l'écouteur d'événements pour le clic sur le bouton
