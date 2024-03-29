// Ajout des widgets de la carte

/// Création du contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true, // affichage de la boussole
    showZoom: true, // affichage des boutons de zoom
    visualizePitch: true // affichage de l'angle d'inclinaison
});
map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte

/// Création du contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true // activation de la géolocalisation précise
    },
    trackUserLocation: true // suivi automatique de la position de l'utilisateur
})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte


/// Création du contrôle d'échelle
var scale = new maplibregl.ScaleControl({
    unit: 'metric' // utilisation de l'unité métrique
});

map.addControl(scale); // ajout du contrôle en bas à gauche de la carte


/// Zoom et boussole
var view = new MapView({
   container: "viewDiv",
   map: map
});

var zoom = new Zoom({
  view: view
});

var compass = new Compass({
  view: view
});

view.ui.add(compass, "top-left");


/// Affiche la position de l'utilisateur
var gl = new GraphicsLayer();
map.add(gl);

var locateWidget = new Locate({
  view: view,   // Lie le bouton à la vue
  graphicsLayer: gl  // Couche à laquelle la localisation est affectée
});

view.ui.add(locateWidget, "top-right");
