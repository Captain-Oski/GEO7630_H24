// /**
//  * Crée un buffer autour de la FeatureCollection fournie avec le rayon donné
//  * @param {FeatureCollection} featureCollection - un set de points surlesquels on travaille
//  * @returns {number} Le rayon du buffer
//  */
// function createBuffer(featureCollection, radiusInput) {
//     console.log(radiusInput)
//     // Utilisation de la method buffer de turf
//     const buffer = turf.buffer(featureCollection, radiusInput, {units: 'meters'});
//     return buffer;
//   }
  
//   // Charge le buffer créé à partir des points aléatoires sur la carte Mapbox
//   function loadBuffer() {
//     // Récupère la valeur du rayon entrée par l'utilisateur
//     const radiusInput = document.getElementById('radiusInput').value
//     // Crée le buffer à partir des points aléatoires et du rayon entré
//     const buffers = createBuffer(randomPoints, radiusInput)
//     // Ajoute la source de données contenant le buffer sur la carte Mapbox
//     map.addSource(
//       'buffer-source', {
//       type: 'geojson',
//       data: buffers
//       }
//     )
//     // Ajoute la couche représentant le buffer sur la carte Mapbox
//     map.addLayer({
//       'id': 'buffer',
//       'type': 'fill',
//       'source': 'buffer-source',
//       'paint': {
//         // Définit la couleur de remplissage du buffer
//         'fill-color': 'rgba(12,122,122,0.5)'
//       }
//     })
//   }
  
//   // Ajoute un événement 'click' sur l'élément HTML avec l'id 'buffer' pour charger le buffer sur la carte Mapbox
//   document
//     .getElementById('buffer')
//     .addEventListener('click', loadBuffer);