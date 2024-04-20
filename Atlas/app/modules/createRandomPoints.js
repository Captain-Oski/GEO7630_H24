// // Fonction qui génère un nombre spécifié de points aléatoires dans les limites de l'île de Montréal
// function generateRandomPoints() {
//     // Récupère le nombre de points à générer depuis l'élément 'randomInput' du document
//     const numPoints = document.getElementById('randomInput').value; 
//     // Définit les limites de l'île de Montréal
//     const bounds = [-73.990959, 45.410154, -73.467327, 45.705839];

//     // Génère un tableau de points aléatoires dans les limites définies
//     const points = [];
//     for (let i = 0; i < numPoints; i++) {
//         const position = turf.randomPosition(bounds); // Génère une position aléatoire dans les limites
//         const point = turf.point(position); // Crée un point TurfJS à partir de la position aléatoire
//         points.push(point); // Ajoute le point au tableau
//     }
//     // Crée une collection de features TurfJS à partir des points générés
//     const featureCollection = turf.featureCollection(points);
//     // Retourne la collection de features TurfJS
//     return featureCollection;
// }
//  // Génère une collection de points aléatoires et la stocke dans une variable
// var randomPoints = generateRandomPoints(document.getElementById('randomInput').value);

// function loadRandomPointsLayer() {
//      // Récupère une nouvelle collection de points aléatoires en fonction de la valeur de 'randomInput'
//     randomPoints = generateRandomPoints(document.getElementById('randomInput').value);
//     // Supprime toutes les couches et sources existantes de la carte
//     removeAllLayersAndSources()
//      // Ajoute la collection de points aléatoires en tant que source de données
//     map.addSource('rdp-source', {
//         type: "geojson",
//         data: randomPoints
//     })
//     // Ajoute une couche 'circle' à la carte avec la source de données 'rdp-source' et une taille de cercle qui varie en fonction du niveau de zoom
//     map.addLayer({
//         'id': 'rdp',
//         'type': 'circle',
//         'source': 'rdp-source',
//         'paint': {
//             'circle-radius': {
//                 'base': 1.75,
//                 'stops': [
//                     [12, 2],
//                     [22, 180]
//                 ]
//             },
//         }
//     }) 
// }

// // Ajoute un événement 'click' sur le bouton 'generateRandomPoints' qui appelle la fonction 'loadRandomPointsLayer'
// document
//     .getElementById('generateRandomPoints')
//     .addEventListener('click', loadRandomPointsLayer); 