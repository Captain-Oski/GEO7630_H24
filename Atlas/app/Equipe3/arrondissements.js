// création d'une fonction pour ajouter la couche arrondissements
//Fonction qui charge une couche WFS depuis pgFeatureServ et l'ajoute à la carte MapLibre.
//Cette fonction ajoute une source de données GeoJSON à partir d'une URL pgFeatureServ
//et ajoute une couche de remplissage ('fill') à la carte MapLibre en utilisant cette source de données.
function loadWFS() {
  // Ajout de la source de données des arrondissements depuis pgFeatureServ
  map.addSource('arrondissements-source', {
      type: 'geojson', // Type de source de données
      data: 'https://sturdy-fiesta-v669g4447rjgh6gxj-9000.app.github.dev/collections/geo7630.arrondissements/items' // URL pgFeatureServ GeoJSON arrondissements
  });

  // Ajout de la couche des arrondissements à la carte MapLibre
  map.addLayer({
      'id': 'arrondissements', // Identifiant de la couche
      'type': 'fill', // Type de géométrie de la couche (remplissage)
      'source': 'arrondissements-source',
      'source-layer': 'geo7630.arrondissements',// Source des données de la couche
      'paint': {
          'fill-outline-color': 'black',
          'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire
          'fill-opacity': 0.3 // Opacité de remplissage (30%)
      }
  });
}


document
.getElementById('loadWFS') // id unique du bouton 
.addEventListener ('click', loadWFS);