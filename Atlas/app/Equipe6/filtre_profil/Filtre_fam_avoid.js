///filtre les donnees selon le clic du bouton, la function peut etre a definir, je ne suis pas sûr de la fonction de ce mot exactement
///mettre le bon nom de bouton
///cette fonction fait flasher un buffer autour des troncons à eviter pour les familles dont l'épaisseur s'ajuste en fonction du niveau de zoom

document.getElementById('BUTTON_TO_BE_NAMED').addEventListener('click', function() {
    var flashing = true;
    var interval;

    function toggleFlashing() {
        if (flashing) {
            // Filter the line layer to only show features where ind_fam_avoid is 1
            map.setFilter('pistes_cyclables_agreables', [
                '==', ['get', 'ind_fam_avoid'], 1
            ]);

            // Get the GeoJSON data of the filtered features
            var features = map.queryRenderedFeatures({ layers: ['pistes_cyclables_agreables'] });

            // Create a Turf.js feature collection from the GeoJSON data
            var featureCollection = turf.featureCollection(features);

            // Create a buffer around the features using Turf.js
            var buffered = turf.buffer(featureCollection, 0.01 * Math.pow(2, map.getZoom() - 1), { units: 'kilometers' });

            // Add the buffered layer to the map
            map.addLayer({
                id: 'buffered_pistes',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: buffered
                },
                paint: {
                    'line-color': 'red',
                    'line-opacity': 0.8,
                    'line-width': 6 // Adjust thickness as needed
                }
            });

            flashing = false;
        } else {
            map.removeLayer('buffered_pistes');
            map.setFilter('pistes_cyclables_agreables', null); // Reset the filter
            flashing = true;
        }
    }

    // Flash the buffer every second
    interval = setInterval(toggleFlashing, 1000);

    // Clear the interval after 5 seconds (5 flashes)
    setTimeout(function() {
        clearInterval(interval);
    }, 5000);
});

