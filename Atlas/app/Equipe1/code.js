// création du contrôle de navigation

var nav = new maplibregl.NavigationControl({

    showCompass: true, // affichage de la boussole

    showZoom: true, // affichage des boutons de zoom

    visualizePitch: true // affichage de l'angle d'inclinaison

});

var geolocateControl = new maplibregl.GeolocateControl({

    positionOptions: {

        enableHighAccuracy: true // activation de la géolocalisation précise

    },

    trackUserLocation: true // suivi automatique de la position de l'utilisateur

})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte