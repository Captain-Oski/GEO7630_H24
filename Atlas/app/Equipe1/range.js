// Fonction pour gérer le slider
function rangeslider() {
    const currentValue = RangeSlider.value;
 
    // Supprimer les couches et sources existantes
    removeAllLayersAndSources();
 
    if (currentValue === 0) {
      // Année 2014
      removeAllLayersAndSources();
      map.addSource('HE391000.Point_2014', {
        type: 'vector',
        tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2014/{z}/{x}/{y}.pbf']
      });
      map.addLayer({
 
        'id': 'HE391000.Point_2014', // identifiant de la couche
 
        'type': 'fill', // type de géométrie de la couche
 
        'source': 'HE391000.Point_2014', // source des données de la couche
 
        'source-layer': 'HE391000.Point_2014', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nom du schéma.nomdelatable
 
    })
 
});
     
    } else if (currentValue === 1) {
      // Année 2019
      removeAllLayersAndSources();
      map.addSource('annee2019', {
        type: 'vector',
        tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2019/{z}/{x}/{y}.pbf']
      });
      map.addLayer({
        id: 'annee 2019',
        source: 'annee2019',
        type: 'symbol'
      });
    } else if (currentValue === 2) {
      // Année 2020
      removeAllLayersAndSources();
      map.addSource('annee2020', {
        type: 'vector',
        tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2020/{z}/{x}/{y}.pbf']
      });
      map.addLayer({
        id: 'annee 2020',
        source: 'annee2020',
        types: 'symbol'
      });
    } else if (currentValue === 3) {
      // Année 2021
      removeAllLayersAndSources();
      map.addSource('annee2021', {
        type: 'vector',
        tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2021/{z}/{x}/{y}.pbf']
      });
      map.addLayer({
        id: 'annee 2021',
        source: 'annee2021',
        type: 'symbol'
      });
    } else if (currentValue === 4) {
      // Année 2022
      removeAllLayersAndSources();
      map.addSource('annee2022', {
        type: 'vector',
        tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2022/{z}/{x}/{y}.pbf']
      });
      map.addLayer({
        id: 'annee 2022',
        source: 'annee2022',
        type: 'symbol'
      });
    } else if (currentValue === 5) {
      // Année 2023
      removeAllLayersAndSources();
      map.addSource('annee2023', {
        type: 'vector',
        tiles : ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2023/{z}/{x}/{y}.pbf']
      });
      map.addLayer({
        id: 'annee 2023',
        source: 'annee2023',
        type: 'symbol'
      });
    }
  }
 
  // Obtenir l'élément du slider
  const RangeSlider = document.getElementById('customRange2');
 
  // Événement pour le slider
  RangeSlider.addEventListener('change', rangeslider); // Utiliser l'événement 'input' pour détecter les changements de valeur
  