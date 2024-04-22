function executeFunctionAtStep(rangeValue) {
    var stepValue = parseInt(rangeValue);
    switch (stepValue) {
        case 0: // Pour la première position du slider
            removeLayerAndSource('annee2014-range');
            removeLayerAndSource('annee2019-range');
            removeLayerAndSource('annee2020-range');
            removeLayerAndSource('annee2021-range');
            removeLayerAndSource('annee2022-range');
            removeLayerAndSource('annee2023-range');
            break;
        case 1:
            removeLayerAndSource('annee2014-range');
            removeLayerAndSource('annee2019-range');
            addYearLayer('annee2014-range', 'HE391000.Point_2014');
            map.on('click', 'annee2014-range', function (e) {
                var coordinates = turf.centroid(e.features[0]).geometry.coordinates;// Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
              
                // Création du contenu du popup
                var popupContent = '<h3>' + e.features[0].properties.score + ' vélo(s) comptabilisé(s) en 2014' + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
              
                // Ajout du popup à la carte Maplibre
                new maplibregl.Popup()
                  .setLngLat(coordinates)
                  .setHTML(popupContent)
                  .addTo(map);
              });
            break;
        case 2:
            removeLayerAndSource('annee2014-range');
            removeLayerAndSource('annee2020-range');
            addYearLayer('annee2019-range', 'HE391000.Point_2019');
            map.on('click', 'annee2019-range', function (e) {
                var coordinates = turf.centroid(e.features[0]).geometry.coordinates;// Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
              
                // Création du contenu du popup
                var popupContent = '<h3>' + e.features[0].properties.score + ' vélos comptabilisés en 2019' + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
              
                // Ajout du popup à la carte Maplibre
                new maplibregl.Popup()
                  .setLngLat(coordinates)
                  .setHTML(popupContent)
                  .addTo(map);
              });
            break;
        case 3:
            removeLayerAndSource('annee2019-range');
            removeLayerAndSource('annee2021-range');
            addYearLayer('annee2020-range', 'HE391000.Point_2020');
            map.on('click', 'annee2020-range', function (e) {
                var coordinates = turf.centroid(e.features[0]).geometry.coordinates;// Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
              
                // Création du contenu du popup
                var popupContent = '<h3>' + e.features[0].properties.score + ' vélos comptabilisé(s) en 2020' + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
              
                // Ajout du popup à la carte Maplibre
                new maplibregl.Popup()
                  .setLngLat(coordinates)
                  .setHTML(popupContent)
                  .addTo(map);
              });
            break;
        case 4:
            removeLayerAndSource('annee2022-range');
            removeLayerAndSource('annee2020-range');
            addYearLayer('annee2021-range', 'HE391000.Point_2021');
            map.on('click', 'annee2021-range', function (e) {
                var coordinates = turf.centroid(e.features[0]).geometry.coordinates;// Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
              
                // Création du contenu du popup
                var popupContent = '<h3>' + e.features[0].properties.score + ' vélos comptabilisés en 2021' + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
              
                // Ajout du popup à la carte Maplibre
                new maplibregl.Popup()
                  .setLngLat(coordinates)
                  .setHTML(popupContent)
                  .addTo(map);
              });
            break;
        case 5:
            removeLayerAndSource('annee2021-range');
            removeLayerAndSource('annee2023-range');
            addYearLayer('annee2022-range', 'HE391000.Point_2022');
            map.on('click', 'annee2022-range', function (e) {
                var coordinates = turf.centroid(e.features[0]).geometry.coordinates;// Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
              
                // Création du contenu du popup
                var popupContent = '<h3>' + e.features[0].properties.score + ' vélos comptabilisés en 2022' + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
              
                // Ajout du popup à la carte Maplibre
                new maplibregl.Popup()
                  .setLngLat(coordinates)
                  .setHTML(popupContent)
                  .addTo(map);
              });
            break;
        case 6:
            removeLayerAndSource('annee2022-range');
            removeLayerAndSource('annee2023-range');
            addYearLayer('annee2023-range', 'HE391000.Point_2023');
            map.on('click', 'annee2023-range', function (e) {
                var coordinates = turf.centroid(e.features[0]).geometry.coordinates;// Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
              
                // Création du contenu du popup
                var popupContent = '<h3>' + e.features[0].properties.score + ' vélos comptabilisés en 2023' + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
              
                // Ajout du popup à la carte Maplibre
                new maplibregl.Popup()
                  .setLngLat(coordinates)
                  .setHTML(popupContent)
                  .addTo(map);
              });
            break;
        default:
            console.log("Invalid step");
    }
}


function removeLayerAndSource(layerId) {
  var layer = map.getLayer(layerId);
  if (layer) {
      map.removeLayer(layerId);
      map.removeSource(layerId + '-source');
  }
}

function addYearLayer(layerId, sourceLayer) {
  map.addSource(layerId + '-source', {
      type: 'vector',
      tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/' + sourceLayer + '/{z}/{x}/{y}.pbf']
  });
  map.addLayer({
      "id": layerId,
      "type": "circle",
      "source": layerId + '-source',
      "source-layer": sourceLayer,
      "visibility": "none",
      "filter": ["all"],
      "paint": {
          "circle-color": {
              "property": "score",
              "type": "interval",
              "stops": [
                  [{ "value": 4942, "zoom": 10 }, "rgba(242, 233, 1, 1)"],
                  [{ "value": 14329, "zoom": 10 }, "rgba(245, 190, 17, 1)"],
                  [{ "value": 25664, "zoom": 10 }, "rgba(249, 147, 33, 1)"],
                  [{ "value": 45003, "zoom": 10 }, "rgba(252, 104, 48, 1)"],
                  [{ "value": 1422146, "zoom": 10 }, "rgba(255, 61, 64, 1)"]
              ],
              "default": "#F2e901"
          },
          "circle-opacity": 1
      }
  });
  ;
}

var rangeInput = document.getElementById('myRange');

rangeInput.addEventListener('change', function() {
    executeFunctionAtStep(this.value);
});

