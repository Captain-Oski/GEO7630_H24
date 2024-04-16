var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

map.on('click', 'stationsBixi', function (e) {
    var coordinates = _____________________________________ // Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
  
    // Création du contenu du popup
    var popupContent = '<h3>' + e.features[0].properties.route_name + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
  
    // Ajout du popup à la carte Maplibre
    new maplibregl.Popup()
      .setLngLat(_________)
      .setHTML(__________)
      .addTo(_______);
  });


  map.on('idle', function () {
    const layers = map.getStyle().layers;
    layers.forEach((layer) => {
        if (layer.id == 'stationsBixi') {
            _____________ // Appelez la fonction de votre module qui compte le nombre de points à l'ecran
        }        
    });
});