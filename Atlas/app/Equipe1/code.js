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
