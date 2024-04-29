function generateCluster() {}
removeAllLayersAndSources()

//ajout d'une source de données à la carte avec clustering
Map.addsource('cluster-source', {
    type: 'geojson',
    data: randomPoints,
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50
});

document
    .getElementById('generateClusters')
    .addEventListener('click', generateClusters);