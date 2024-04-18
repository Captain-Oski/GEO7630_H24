// création du contrôle d'échelle
var scale = new maplibregl.ScaleControl({
    unit: 'metric' // utilisation de l'unité métrique
});

map.addControl(scale, 'bottom-left'); // ajout du contrôle en bas à gauche de la carte

// création du contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true // activation de la géolocalisation précise
    },
    trackUserLocation: true // suivi automatique de la position de l'utilisateur
})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte
// création du contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true, // affichage de la boussole
    showZoom: true, // affichage des boutons de zoom
    visualizePitch: true // affichage de l'angle d'inclinaison
});
map.addControl(nav, 'bottom-right'); // ajout du contrôle en haut à droite de la carte


// Fonction qui ecoute l'evenement de fin de chargement de la carte au demarrage de l'app
// ajout de source et de couche de la carte
function loadWFS() {
    // ajout de la source des données indice de niveau de vie 
    map.addSource('indice_niveau_de_vie-source', {
        type: 'vector', // https://maplibre.org/maplibre-style-spec/sources/
        tiles: ['https://congenial-dollop-v66x4575v6gr3pgx5-8801.app.github.dev/CA691970.indice_niveau_de_vie/{z}/{x}/{y}.pbf'] // URL du tuile vectorielle 
    })
    // ajout de la couche des indices de niveau de vie 
    map.addLayer({
        'id': 'indice_niveau_de_vie', // identifiant de la couche
        'type': 'fill', // type de géométrie de la couche
        'source': 'indice_niveau_de_vie-source', // source des données de la couche
        'source-layer': 'CA691970.indice_niveau_de_vie', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nomduschema.nomdelatable
        'paint': {
            'fill-color': [  // Définition de la couleur de remplissage
            'interpolate',  // Utilisation de la fonction interpolate pour créer un dégradé de couleur
             ['linear'],  // Spécification de l'interpolation linéaire
             ['get', 'acp_enviro'],  // Récupération de la valeur de la propriété 'acp_enviro' de la couche
              0, 'rgb(255, 255, 255)', // Pour une valeur de 0 de 'acp_enviro', utiliser la couleur blanche (RGB 255, 255, 255)
              1, 'rgb(0, 0, 255)' // Pour une valeur de 1 de 'acp_enviro', utiliser la couleur bleue (RGB 0, 0, 255)
           ],
            'fill-opacity': 0.7 // Définition de l'opacité de remplissage à 0.7 (70%)
       }

    });
}
// Écouteur d'événement pour le bouton de chargerlacouche
//document
  //.getElementById('loadWFS') // id unique du bouton
  //.addEventListener('click', loadWFS); // ajoute un event de type click qui lance la fonction chargerlacouche()-->


