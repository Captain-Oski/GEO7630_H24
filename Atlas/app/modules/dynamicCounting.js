// // Cette fonction calcule la moyenne des points par grille
// // en fonction des couches de cartes rendues et met à jour l'élément HTML "kpi"
// function dynamicCount() {
//     var averagePtsGrid = 0;
//     var totalFeatures = 0;

//     // Recherche toutes les fonctionnalités de la couche 'joined' actuellement rendue sur la carte
//     var features = map.queryRenderedFeatures({ layers: ['joined'] });
//     totalFeatures = features.length;

//     // Itère sur toutes les fonctionnalités de la couche 'joined'
//     features.forEach(function (feature) {
//         averagePtsGrid += feature.properties.pointCount;
//     });

//     // Calcule la moyenne
//     var average = averagePtsGrid / totalFeatures;
//     document.getElementById('kpi').value = average;
// }

// // Cette fonction compte le nombre de fonctionnalités 
// // dans la couche 'rdp' actuellement rendue sur la carte et met à jour l'élément HTML "featureCount"
// function featureCount() {
//     var features = map.queryRenderedFeatures({ layers: ['rdp'] });
//     document.getElementById('featureCount').value = features.length;
// }