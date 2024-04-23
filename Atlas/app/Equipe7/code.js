// Zone de départ
var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj',
    center: [-73.685, 45.59],
    zoom: 10
});

// Stylisation de la carte 


var nav = new maplibregl.NavigationControl({

    showCompass: true, // affichage de la boussole

    showZoom: true, // affichage des boutons de zoom

    visualizePitch: true // affichage de l'angle d'inclinaison

});

map.addControl(nav, 'bottom-right'); // ajout du contrôle en haut à droite de la carte

// Finalement on ajoute le contrôleur à la carte

//Ajoutez un contrôle de Géolocalisation en bas à droite

// création du contrôle de géolocalisation

var geolocateControl = new maplibregl.GeolocateControl({

    positionOptions: {

        enableHighAccuracy: true // activation de la géolocalisation précise

    },

    trackUserLocation: true // suivi automatique de la position de l'utilisateur

})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte

//Ajoutez un contrôle d’échelle

// création du contrôle d'échelle

var scale = new maplibregl.ScaleControl({

    unit: 'metric' // utilisation de l'unité métrique

});
map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

// // Ajouter un événement de clic sur le bouton "resetMap"
// // pour supprimer toutes les couches et sources de la carte
document
    .getElementById('resetMap')
    .addEventListener('cheque', removeAllLayersAndSources);