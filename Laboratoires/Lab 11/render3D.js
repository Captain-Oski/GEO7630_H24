// /**
//  * Fonction pour générer une représentation 3D d'une grille sur une carte
//  */
// function generate3D() {
//     // Affiche un message de test dans la console

//     // Supprime toutes les couches et sources existantes de la carte
//     removeAllLayersAndSources();

//     // Crée une grille en utilisant la fonction makeGrid() du module createGrid.js
//     var grid = makeGrid();

//     // Ajoute une nouvelle source de données geojson à la carte avec la grille générée
//     map.addSource('3d-source', {
//         type: 'geojson',
//         data: grid
//     });

//     // Ajoute une nouvelle couche de type fill-extrusion à la carte pour afficher la grille en 3D
//     map.addLayer({
//         'id': '3dgrip',
//         'source': '3d-source',
//         'type': 'fill-extrusion',
//         'paint': {
//             // Définit la couleur de remplissage de l'extrusion en fonction de la valeur aléatoire 'randomValue'
//             'fill-extrusion-color': [                      // Définit la propriété fill-extrusion-color
//                 'interpolate',                             // Utilise la fonction interpolate pour créer un dégradé
//                 ['linear'],                                // Spécifie le type d'interpolation comme linéaire
//                 ['get', 'randomValue'],                    // Récupère la propriété 'randomValue' des données
//                 // Définit les étapes de couleur pour le dégradé
//                 0, '#f3e79b',                               // À 0%, utilise la couleur #f3e79b
//                 30, '#fac484',                              // À 30%, utilise la couleur #fac484
//                 50, '#eb7f86',                              // À 50%, utilise la couleur #eb7f86
//                 80, '#ce6693',                              // À 80%, utilise la couleur #ce6693
//                 100, '#a059a0'                              // À 100%, utilise la couleur #a059a0
//             ],
//             // Définit la hauteur de l'extrusion en fonction de la valeur aléatoire 'randomValue'
//             'fill-extrusion-height': [
//                 'interpolate', ['linear'], // interpolation statistique linéaire
//                     ['get', 'randomValue'], // de la propriété randomValue
//                 0, 100, // Notre propriété randomValue va de 0 à 100
//                 100, 4000 // De 100m de hauteur pour la valeur 0 à 4km pour la valeur 100
//             ],
//             // Définit l'opacité de l'extrusion
//             'fill-extrusion-opacity': 0.6
//         }
//     });
// }

// // Ajoute un événement d'écoute du clic sur l'élément HTML avec l'ID 'generate3D'
// document
//     .getElementById('generate3D') // id unique du bouton
//     .addEventListener('click', generate3D);  // ajoute un event de type click qui lance la fonction generate3D()