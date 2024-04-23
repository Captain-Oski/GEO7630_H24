//  Création d'une fonction nommée loadLayer pour ajouter la couche iqa_par_station
function iqa_par_station() {
  // Ajout de la source station iqa
  map.addSource('iqa_par_station-source', {
      type: 'vector', // Type de la source est vector
      tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.iqa_par_station/{z}/{x}/{y}.pbf'] // URL du tuile vectorielle IQA par station
  });

  // Ajout de la couche station iqa
  map.addLayer({
      'id': 'iqa_par_station', // Identifiant de la couche
      'type': 'fill', // Type de géométrie de la couche
      'source': 'iqa_par_station-source', // Source des données de la couche
      'source-layer': 'EG591962.iqa_par_station', // Source des données de la couche (id dans le JSON de pgtileserv)
      'paint': {
          'fill-color': '#ff0000', // Couleur de remplissage
          'fill-opacity': 1 // Opacité de remplissage 100%
      }
  });
}

// Déclenchement de la fonction iqa_par_station lors du clic sur un élément ayant l'ID correspondant
document
.getElementById('iqa_par_station') // id unique de l'élément bouton
.addEventListener ('click', iqa_par_station); // ajout de l'écouteur d'évènements pur le clic sur le bouton