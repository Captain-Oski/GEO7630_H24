var mntLayerAdded = false; // Variable to track if the layer is added

document.getElementById('mnt').addEventListener('click', function() {
    // Check if the layer is already added
    if (!mntLayerAdded) {
        // Define the mapbox line layer
        map.addLayer({
            'id': 'mnt_mtl',
            'type': 'raster',
            'source': 'mnt_mtl_source'
        }, 'pistes_cyclables_agreables','zone_travaux'); // Add before an existing layer
        mntLayerAdded = true; // Update the variable
    } else {
        // Remove the layer from the map
        map.removeLayer('mnt_mtl');
        mntLayerAdded = false; // Update the variable
    }
});