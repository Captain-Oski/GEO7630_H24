// // Fonction pour générer des clusters de points sur la carte
// function generateClusters () {

//     // Suppression de toutes les couches et sources existantes de la carte
//     removeAllLayersAndSources();

//     // Ajout d'une source de données à la carte avec clustering
//     map.addSource('clusters-source', {
//         type: 'geojson',          // Type de la source de données : géojson
//         data: randomPoints,       // Données à utiliser pour la source
//         cluster: true,            // Activation du clustering pour regrouper les points proches
//         clusterMaxZoom: 14,       // Zoom maximal pour regrouper les points
//         clusterRadius: 50         // Rayon de chaque cluster lors du regroupement des points (par défaut à 50)
//     });
    
//     // Ajout d'une couche pour afficher les clusters
//     map.addLayer({
//         id: 'clusters',
//         type: 'circle',           // Type de la couche : cercle
//         source: 'clusters-source', // Source de données utilisée pour la couche
//         filter: ['has', 'point_count'], // Filtrage pour afficher uniquement les clusters
//         paint: {
//             'circle-color': [          // Couleur du cercle basée sur le nombre de points
//                 'step',                // Utilise la fonction step pour définir des paliers
//                 ['get', 'point_count'], // Récupère la propriété 'point_count' des données

//                 // Définit les étapes de couleur pour le cercle
//                 '#51bbd6',              // Si 'point_count' est inférieur à 5, utilise la couleur #51bbd6
//                 5,                      // À 5 points, utilise la couleur #f1f075
//                 '#f1f075',              // Si 'point_count' est inférieur à 10, utilise la couleur #f1f075
//                 10,                     // À 10 points, utilise la couleur #f28cb1
//                 '#f28cb1'               // Si 'point_count' est supérieur ou égal à 10, utilise la couleur #f28cb1
//             ],

//             'circle-radius': [         // Rayon du cercle basé sur le nombre de points
//                 'step',                // Utilise la fonction step pour définir des paliers
//                 ['get', 'point_count'], // Récupère la propriété 'point_count' des données
//                 // Définit les étapes de rayon pour le cercle
//                 20,                     // Si 'point_count' est inférieur à 20, utilise un rayon de 20
//                 20,                     // À 20 points, utilise un rayon de 20
//                 40,                     // Si 'point_count' est inférieur à 40, utilise un rayon de 40
//                 40,                     // À 40 points, utilise un rayon de 40
//                 60                      // Si 'point_count' est supérieur ou égal à 40, utilise un rayon de 60
//             ]

//         }                
//     });
    
//     // Ajout d'une couche pour afficher le nombre de points dans chaque cluster
//     map.addLayer({
//         id: 'cluster-count',
//         type: 'symbol',          // Type de la couche : symbole
//         source: 'clusters-source', // Source de données utilisée pour la couche
//         filter: ['has', 'point_count'], // Filtrage pour afficher uniquement les clusters
//         layout: {
//             'text-field': '{point_count_abbreviated}',   // Champ de texte affichant le nombre de points
//             'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],  // Police du texte
//             'text-size': 12  // Taille du texte
//         }
//     });
    
//     // Ajout d'une couche pour afficher les points non regroupés
//     map.addLayer({
//         id: 'unclustered-point',
//         type: 'circle',          // Type de la couche : cercle
//         source: 'clusters-source', // Source de données utilisée pour la couche
//         filter: ['!', ['has', 'point_count']], // Filtrage pour afficher uniquement les points non regroupés
//         paint: {
//             'circle-color': '#11b4da',          // Couleur des points non regroupés
//             'circle-radius': 4,                 // Rayon des points non regroupés
//             'circle-stroke-width': 1,           // Largeur de la bordure des points
//             'circle-stroke-color': '#fff'       // Couleur de la bordure des points
//         }
//     });
// }

// // Écouteur d'événement pour le bouton de génération des clusters
// document
//   .getElementById('generateClusters') // id unique du bouton
//   .addEventListener('click', generateClusters); // ajoute un event de type click qui lance la fonction generateClusters()