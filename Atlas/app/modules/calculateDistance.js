// /**
//  * Calcule la distance moyenne entre toutes les paires de points dans une FeatureCollection donnée.
//  * @param {FeatureCollection} featureCollection - un set de points surlesquels on calcule une distance
//  * @returns {number} La distance moyenne entre les points
//  */

// function averageDistance(featureCollection) {
//     // Affiche le contenu de la FeatureCollection dans la console pour le débogage
//     console.log(featureCollection); 
  
//     // Vérifie que la FeatureCollection contient au moins deux points
//     if (featureCollection.features.length < 2) {
//       // Lance une erreur dans le navigateur si la FeatureCollection contient moins de deux points
//       throw new Error('La FeatureCollection doit contenir au moins deux points.');
//     }
  
//     // Transforme les points en projection UTM
//     const mercatorFeatureCollection = turf.toMercator(featureCollection);
  
//     // Calcule la distance entre tous les points
//     // Ce code crée un tableau vide distances, puis parcourt la collection de 
//     // caractéristiques mercatorFeatureCollection pour calculer la distance
//     // entre chaque paire de points à l'aide de la fonction turf.distance().
//     // Il stocke ensuite la distance entre chaque paire de points dans le tableau 
//     // distances à l'aide de la méthode push(). Le résultat est un tableau contenant
//     // toutes les distances entre chaque paire de points de la collection de caractéristiques.
//     const distances = [];
//     for (let i = 0; i < mercatorFeatureCollection.features.length - 1; i++) {
//       for (let j = i + 1; j < mercatorFeatureCollection.features.length; j++) {
//         const from = mercatorFeatureCollection.features[i];
//         const to = mercatorFeatureCollection.features[j];
//         const distance = turf.distance(from, to);
//         distances.push(distance);
//       }
//     }
  
//     // Calcule la distance moyenne
//     const sum = distances.reduce((acc, val) => acc + val, 0);
//     const average = sum / distances.length;
//     return average;
//   }
  
//   // Calcule la distance moyenne avec la fonction averageDistance et l'affiche dans l'élément HTML ayant l'ID 'distanceResult'
//   function calculateDistance() {
//     document.getElementById('distanceResult').value = Math.round(averageDistance(randomPoints), 2);
//   }
  
//   // Binding de l'événement et de la fonctionnalité
//   // Ajoute un écouteur d'événements au bouton ayant l'ID 'calculateDistance' pour déclencher la fonction calculateDistance() lorsqu'il est cliqué
//   document
//     .getElementById('calculateDistance')
//     .addEventListener('click', calculateDistance); 