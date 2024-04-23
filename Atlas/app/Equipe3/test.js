<Ajout image></Ajout>
map.on('load', function () {
    <map name="" class="loadImage"></map> ; ('https://revolvair.org/wp-content/uploads/2021/02/iqa-quebec-particules-fines.png', function (error, image) {
        if (error) throw error;
        <map name="" class="addImage"></map>;('custom-marker', image);
        <map name="" class="addLayer"></map>;({
            'id': 'markers',
            'type': 'symbol',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': montrealCoordinates
                        }
                    }]
                }
            },
            'layout': {
                'icon-image': 'custom-marker',
                'icon-size': 0.2
            }
        });
    });
});
