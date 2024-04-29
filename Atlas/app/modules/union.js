
// function generateGrid () {

//     // Définir les coordonnées de la zone d'étude
//     const bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
//     // Définir la taille des cellules
//     const cellSide = document.getElementById('hexagonRadius').value ;
//     // Définir les options de l'objet de la grille
//     const options = { units: 'meters' };
//     // Créer la grille hexagonale
//     const hexgrid = turf.hexGrid(bbox, cellSide, options);
//     // Ajouter les données de la grille à la carte

//     map.addSource('grid-source', {
//         type: "geojson",
//         data: hexgrid
//     })
//     // Ajouter la couche à la carte
//     map.addLayer({
//         id: 'grid',
//         type: 'line',
//         source: 'grid-source',
//         paint: {
//             "line-opacity": 0.25
//         }
//     })
// }

// function union() {
//     console.log('test')
//         // Définir les coordonnées de la zone d'étude
//         const bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
//         // Définir la taille des cellules
//         const cellSide = document.getElementById('hexagonRadius').value ;
//         // Définir les options de l'objet de la grille
//         const options = { units: 'meters' };
//         // Créer la grille hexagonale
//         const hexgrid = turf.hexGrid(bbox, cellSide, options);
//         // Compter le nombre de points dans chaque cellule de la grille
//         const joined = countPointsInPolygons(randomPoints, hexgrid)
//         map.addSource('grid-source', {
//             type: "geojson",
//             data: joined
  
//         })
  
//         map.addLayer({
//             id: 'joined',
//             type: 'fill',
//             source: 'grid-source',
//             paint: {
//                 "fill-color": {
//                     property: 'pointCount',
//                     stops: [[0, '#f3e79b'], [3, '#fac484'], [5, '#eb7f86'], [8, '#ce6693'], [10, '#a059a0']]
//                     // #f3e79b,#fac484,#f8a07e,#eb7f86,#ce6693,#a059a0,#5c53a5
//                 },
//                 "fill-opacity": 0.5
//             }
//         })
//     }

// function dissolver () {
//      // Récupérer le rayon sélectionné par l'utilisateur
//      const radiusInput = document.getElementById('radiusInput').value
//      // Créer un buffer pour chaque point généré aléatoirement
//      const buffers = createBuffer(randomPoints, radiusInput)
//      // Fusionner les buffers créés
//      const unionized = unionFeatures(buffers)
//      // Ajouter les données fusionnées à la carte
//      map.addSource('union-source', {
//          type: "geojson",
//          data: unionized
//      })
//      // Ajouter la couche à la carte
//      map.addLayer({
//          id: 'union',
//          type: 'fill',
//          source: 'union-source',
//          paint: {
//              'fill-color': 'orange',
//              'fill-opacity': 0.5
//          }
//      })
// }

// /**
//  * Cette fonction prend en entrée une FeatureCollection
//  * et renvoie une Feature qui représente la fusion de toutes les Features dans la collection
//  * Elle utilise la fonction Turf.js "dissolve" pour dissoudre les limites entre les features adjacentes.
//  * @param {FeatureCollection} featureCollection - un set de points surlesquels on travaille
//  * @returns {FeatureCollection} Une featureCollection de polygone dissous
//  */
// function unionFeatures(featureCollection) {
//     const mergedFeature = turf.dissolve(featureCollection);
//     return mergedFeature;
// }

//         // Ajoute un événement 'click' sur l'élément HTML avec l'id 'dissolve' pour charger le resultat sur la carte maplibre
// document
//     .getElementById('gridder')
//     .addEventListener('click', generateGrid);

// // Ajoute un événement 'click' sur l'élément HTML avec l'id 'union' pour charger le resultat sur la carte maplibre
// document
//     .getElementById('union')
//     .addEventListener('click', union);

//     // Ajoute un événement 'click' sur l'élément HTML avec l'id 'dissolve' pour charger le resultat sur la carte maplibre
// document
//     .getElementById('dissolve')
//     .addEventListener('click', dissolver);

