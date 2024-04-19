
const lignesMetro = lines // featureCollection des lignes de metro
const stationsBixi = stations // featureCollection des stations de bixi

/**
 * Crée un buffer autour de la FeatureCollection fournie avec le rayon donné
 * @param {FeatureCollection} featureCollection - un set de points surlesquels on travaille
 * @returns {number} Le rayon du buffer
 */
function createBuffer(featureCollection, radiusInput) {
    const buffer = turf.buffer(featureCollection, radiusInput, {units: 'meters'});    //// Fonction TurfJS pour CREER DES BUFFERs
    return buffer;
  }
  
  
  function resultat () {
    const lignesMetroBuffer = createBuffer(lignesMetro,75); // Creer un BUFFER de 75m autour de `lignesMetro` avec la fonction createBuffer
    const stationsBixiDansLigneDeMetroBuffer =  turf.pointsWithinPolygon(stationsBixi,lignesMetroBuffer)// CALCULER les points dans les polygones avec une fonction TurfJS
    const collecteur = turf.tag(stationsBixiDansLigneDeMetroBuffer,lignesMetroBuffer,'route_name', 'route_name') // COLLECTER/TAGGER les points dans les buffer avec une fonction TurfJS
    map.addSource(
      'stationsBixi-source', {
      type: 'geojson',
      data: collecteur
      }
    );
  
    // Ajoute la couche représentant le buffer sur la carte Mapbox
    map.addLayer({
      'id': 'stationsBixi',
      'type': 'circle',
      'source': 'stationsBixi-source',
      'paint': {
        'circle-color': [
          'match',
          ['get', 'route_name'],
          'Orange', 'orange',
          'Verte', 'green',
          'Bleue', 'blue',
          'Jaune', 'yellow',
          'gray' // Valeur par défaut si la propriété ne correspond à aucune des valeurs spécifiées
        ]
      }
    });
  }
  

  function featureCount() {
    var features = map.queryRenderedFeatures({ layers: ['stationsBixi'] }); // UTILISER LA FONCTION MaplibreGL pour requeter les elements a l'ecran
    document.getElementById('featureCount').value = features.length;
  }
  
  document
    .getElementById('resultat')
    .addEventListener('click', resultat ); // Ajouter la fonction qui renvoit les points dans les buffers
  