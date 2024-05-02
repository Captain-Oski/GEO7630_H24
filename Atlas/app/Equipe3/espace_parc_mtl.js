// Création d'une fonction nommée loadLayer pour ajouter la couche espace_par_mtl
function parc() {
  alert('La couche est ajoutée avec succès.');
  // Ajout de la source de données pour les espaces verts des parcs de Montréal
  map.addSource('h4_source', {
      type: 'vector',
      tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.espace_parc_mtl/{z}/{x}/{y}.pbf'], // URL des espaces parcs
    
  });

  // Ajout de la couche pour les espaces verts des parcs de Montréal
  map.addLayer({
      'id': 'h4',
      'type': 'fill', // Remplissage
      'source': 'h4_source',
      'source-layer': 'EG591962.espace_parc_mtl',
      'paint': {
          'fill-color': '#006400', // Couleur verte pour les espaces verts
          'fill-opacity': 0.8 // Opacité de remplissage
      }
  });
}//fin de la fonciton

// Déclenchement de la fonction loadLayer lors du clic sur un élément ayant l'ID 'loadLayer'
document
  .getElementById('parc') // ID unique du bouton faisant référence à la fonction
  .addEventListener('click', parc); //ajout de l'écouteur d'évènement pour le clic sur le bouton
