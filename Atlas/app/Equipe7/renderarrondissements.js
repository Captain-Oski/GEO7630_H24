function loadWFS() {

    // Ajout de la source de données des arrondissements depuis pgFeatureServ

    map.addSource('arrondissements-source', {

        type: 'geojson', // Type de source de données

        data: 'https://shiny-trout-5ggj46wgpj7w37qjr-9000.app.github.dev/collections/DD891050.Quartier/items.json' // URL pgFeatureServ GeoJSON

    });

    // Ajout de la couche des arrondissements à la carte MapLibre

    map.addLayer({

        'id': 'arrondissements', // Identifiant de la couche

        'type': 'fill', // Type de géométrie de la couche (remplissage)

        'source': 'arrondissements-source', // Source des données de la couche

        'paint': {

            'fill-outline-color': 'black',

            'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire

            'fill-opacity': 0.3 // Opacité de remplissage (30%)

        }

    });

}

// Écouteur d'événement pour le bouton de génération des clusters
document
  .getElementById('loadWFS') // id unique du bouton
  .addEventListener('click', loadWFS); // ajoute un event de type click qui lance la fonction loadWFS()

    