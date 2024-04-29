// // Cette fonction supprime toutes les couches et sources de la carte
// function removeAllLayersAndSources() {
//     var allSources = map.getStyle().sources;
//     console.log(allSources)
//     // Supprimer chaque couche
//     myLayers.forEach(function (layerName) {
//         if (map.getLayer(layerName)) {
//             map.removeLayer(layerName);
//         }
//     })

//     // Supprimer chaque source
//     myLayers.forEach(function (layerName) {
//         if (allSources.hasOwnProperty(`${layerName}-source`)) {
//             map.removeSource(`${layerName}-source`);
//         }
//     });
// }

// // Cette fonction charge une couche de points aléatoires sur la carte
// function loadRandomPointsLayer() {
//     // Supprimer toutes les couches et sources de la carte
//     removeAllLayersAndSources()

//     // Ajouter une source de données de points aléatoires
//     map.addSource('rdp-source', {
//         type: "geojson",
//         data: randomPoints
//     })

//     // Ajouter une couche de points aléatoires à la carte
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

// // // Ajouter un événement de clic sur le bouton "resetMap"
// // // pour supprimer toutes les couches et sources de la carte
// document
//     .getElementById('resetMap')
//     .addEventListener('click', removeAllLayersAndSources);

// // Ajouter un événement de clic sur le bouton "loadLayer" 
// // pour charger la couche de points aléatoires
// document
//     .getElementById('loadLayer')
//     .addEventListener('click', loadRandomPointsLayer);