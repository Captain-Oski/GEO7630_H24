// création d'une fonction pour charger une couche WFS : arrondissements
function arrondissementswfs() {
    // Ajout de la source de données des arrondissements depuis pgFeatureServ
    map.addSource('arrondissements-source', {
        type: 'vector', // Type de source de données
        tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/geo7630.arrondissements/{z}/{x}/{y}.pbf'] // URL JSON des arrondissements
    });

    // Ajout de la couche des arrondissements à la carte MapLibre
    map.addLayer({
        'id': 'arrondissements', // Identifiant de la couche
        'type': 'fill', // Type de géométrie de la couche (remplissage)
        'source': 'arrondissements-source', // source de la couche
        'source-layer' :'geo7630.arrondissements',
        'paint': {
            'fill-outline-color': 'black',
            'fill-color': '#FA8072', // Couleur rose
            'fill-opacity': 0.3, // Opacité de remplissage (30%)
        }
    });
} // fin de la fonction

document
    .getElementById('arrondissementswfs') // ID unique du bouton
    .addEventListener('click', arrondissementswfs); // Ajout de l'écouteur d'événements pour le clic sur le bouton
