// A. Ajout des widgets de la carte :

// A.1. Création du contrôle d'échelle
var scale = new maplibregl.ScaleControl({
    unit: 'metric' // utilisation de l'unité métrique
});

map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

// A.2. Création du contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true, // affichage de la boussole
    showZoom: true, // affichage des boutons de zoom
    visualizePitch: true // affichage de l'angle d'inclinaison
});
map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte

// A.3. Création du contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true // activation de la géolocalisation précise
    },
    trackUserLocation: true // suivi automatique de la position de l'utilisateur
})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte


// A.4. Zoom et boussole
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

// Idées d'élements à intégrer 

        // Pour l'évolution temporel : TimeSlider
        // Ajouter une Basemap (sombre ?)
        // Sélection des couches à affcher
        // Affichage de la légende
        // Un Pop-up ou menu "Home" avec un petit texte qui vient expliquer l'étude
        // Ajouter le titre en plus gros

// Couches à générer :

        // Piste cyclable (données temporelles ?) dont REV
        // Stations de comptage vélo (réunis de toutes les sources de comptage)
        // Krigeage comptage vélos par année
        // Krigeage indicateur 1 (raster)
        // Krigeage indicateur 2 (raster)
        // Krigeage indicateur 3 (raster)
        // Krigeage indicateur 4 (raster)
        // Piste cyclable avec indicateur 1 (ligne)
        // Piste cyclable avec indicateur 2 (ligne)
        // Piste cyclable avec indicateur 3 (ligne)
        // Piste cyclable avec indicateur 4 (ligne)
        // Piste cyclable avec indice intégré complet (réunion des 4 indicateurs)
        




