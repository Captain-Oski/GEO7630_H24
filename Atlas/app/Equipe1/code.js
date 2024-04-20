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

map.addControl(nav, 'bottom-right'); // ajout du contrôle en haut à droite de la carte 



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