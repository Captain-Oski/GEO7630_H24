// function generateHeatmap() {
    
//     removeAllLayersAndSources();

//     map.addSource('heatmap-source', {
//         type: 'geojson',
//         data: randomPoints
//     });
    
//     map.addLayer({
//         id: 'heatmap',
//         source: 'heatmap-source',
//         type: 'heatmap',
//         paint: {
//             'heatmap-weight': ['get', 'point_count'],   // Poids des points basé sur 'point_count'
//             'heatmap-radius': 20,                       // Rayon des points de chaleur du heatmap
//             'heatmap-intensity': 0.5,                   // Intensité globale du heatmap
//             'heatmap-color': [                          // Couleurs personnalisées pour le heatmap
//                 'interpolate',
//                 ['linear'],
//                 ['heatmap-density'],                    // Utilise la densité du heatmap pour l'interpolation
//                 // Définit les étapes de couleur pour le heatmap
//                 0, 'rgba(0, 255, 0, 0)',                // À densité 0, utilise 'rgba(0, 255, 0, 0)'
//                 0.2, 'yellow',                           // À densité 0.2, utilise 'yellow'
//                 0.4, 'orange',                           // À densité 0.4, utilise 'orange'
//                 0.6, 'red'                               // À densité 0.6, utilise 'red'
//             ],
//             'heatmap-opacity': 0.8,                      // Opacité du heatmap
//         }        
//     });
// }

// document
//   .getElementById('generateHeatmap') // id unique du bouton
//   .addEventListener('click', generateHeatmap); // ajoute un event de type click qui lance la fonction generateHeatmap()