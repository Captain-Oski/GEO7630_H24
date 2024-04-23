// Création d'une fonction nommée loadLayer pour ajouter la couche espace_par_mtl
function loadLayer() {
  // Ajout de la source de données pour les espaces verts des parcs de Montréal
  map.addSource('espace_parc_mtl-source', {
      type: 'vector',
      tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.espace_parc_mtl/{z}/{x}/{y}.pbf'], // URL des espaces parcs
      minzoom: 0,
      maxzoom: 22
  });

  // Ajout de la couche pour les espaces verts des parcs de Montréal
  map.addLayer({
      'id': 'espace_parc_mtl',
      'type': 'fill', // Remplissage
      'source': 'espace_parc_mtl-source',
      'source-layer': 'EG591962.espace_parc_mtl',
      'paint': {
          'fill-color': '#006400', // Couleur verte pour les espaces verts
          'fill-opacity': 0.8 // Opacité de remplissage
      }
  });
}//fin de la fonciton

// Déclenchement de la fonction loadLayer lors du clic sur un élément ayant l'ID 'loadLayer'
document
  .getElementById('loadLayer') // ID unique du bouton faisant référence à la fonction
  .addEventListener('click', loadLayer); //ajout de l'écouteur d'évènement pour le clic sur le bouton
