// création d'une fonction pour charger une couche WFS : arrondissements
function arrondissementswfs() {
    alert('La couche est ajoutée avec succès.');
    // Ajout de la source de données des arrondissements depuis pgFeatureServ
    map.addSource('h5-source', {
        type: 'geojson', // Type de source de données
        data: 'https://sturdy-fiesta-v669g4447rjgh6gxj-9000.app.github.dev/collections/geo7630.arrondissements/items.json?limit=10000' // URL JSON des arrondissements
    });

    // Ajout de la couche des arrondissements à la carte MapLibre
    map.addLayer({
        'id': 'h5', // Identifiant de la couche
        'type': 'fill', // Type de géométrie de la couche (remplissage)
        'source': 'h5-source', // source de la couche
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
