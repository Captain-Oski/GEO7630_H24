 
  function loadLayer() {
   // Ajout de la source de données pour les espaces verts des parcs de Montréal
    map.addSource('espaces-verts-parcs-montreal', {
      type: 'vector',
      tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.espace_vert_parc/{z}/{x}/{y}.pbf'],
      minzoom: 0,
      maxzoom: 22
    });
  
    // Ajout de la couche pour les espaces verts des parcs de Montréal
    map.addLayer({
      'id': 'espaces-verts-parcs-montreal',
      'type': 'fill',
      'source': 'espaces-verts-parcs-montreal',
      'source-layer': 'espace_vert_parc',
      'paint': {
        'fill-color': '#00FF00', // Couleur verte pour les espaces verts
        'fill-opacity': 0.5 // Opacité de remplissage
      }
    });
  }
  
  document
  .getElementByld('loadLayer') // id unique du bouton 
  .addEventListener ('click', loadLayer);