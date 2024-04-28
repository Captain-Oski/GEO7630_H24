// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});


// création du contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true, // affichage de la boussole
    showZoom: true, // affichage des boutons de zoom
    visualizePitch: true // affichage de l'angle d'inclinaison
});
map.addControl(nav, 'top-right'); // ajout du contrôle en haut à droite de la carte

// création du contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true // activation de la géolocalisation précise
    },
    trackUserLocation: true // suivi automatique de la position de l'utilisateur
})

map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte

// création du contrôle d'échelle
var scale = new maplibregl.ScaleControl({
    unit: 'metric' // utilisation de l'unité métrique
});

map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

// configuration d'un service de données WFS
var WFSConfig = [
    'wfs-test-source', {
        type: 'geojson',
        data: null
    }
]
// Fonction qui ecoute l'evenement de fin de chargement de la carte au demarrage de l'app
// ajout des sources et des couches de la carte
map.on('load', function () {
    // ajout de la source des garages
    map.addSource('indice_emv_hex_200m_result-source', {
        type: 'vector', // https://maplibre.org/maplibre-style-spec/sources/
        tiles: ['https://solid-robot-66qj67v4535v7g-8801.app.github.dev/geo7630.indice_emv_hex_200m_result/{z}/{x}/{y}.pbf'] // URL des tuiles vectorielles attention à bien mettre là votre
    })
    // ajout de la couche des garages
    map.addLayer({
        'id': 'indice_emv_hex_200m_result', // identifiant de la couche
        'type': 'fill', // type de géométrie de la couche
        'source': 'indice_emv_hex_200m_result-source', // source des données de la couche
        'source-layer': 'geo7630.indice_emv_hex_200m_result', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nomduschema.nomdelatable
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
        
})
});


/**
 * Fonction qui génère une couleur aléatoire en format hexadécimal.
 * @returns {string} Couleur générée au format hexadécimal.
 */
function getRandomColor() {
    // Définition des caractères hexadécimaux possibles
    var letters = '0123456789ABCDEF';
    // Initialisation de la couleur avec le préfixe hexadécimal (#)
    var color = '#';
    // Boucle pour générer chaque caractère de la couleur (6 caractères)
    for (var i = 0; i < 6; i++) {
        // Sélection aléatoire d'un caractère hexadécimal
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Retourne la couleur générée au format hexadécimal
    return color;
}


/**
 * Fonction qui charge une couche WFS depuis pgFeatureServ et l'ajoute à la carte MapLibre.
 * Cette fonction ajoute une source de données GeoJSON à partir d'une URL pgFeatureServ
 * et ajoute une couche de remplissage ('fill') à la carte MapLibre en utilisant cette source de données.
 */
function loadWFS() {
    // Ajout de la source de données des arrondissements depuis pgFeatureServ
    map.addSource('arrondissements-source', {
        type: 'geojson', // Type de source de données
        data: 'https://solid-robot-66qj67v4535v7g-9000.app.github.dev/collections/geo7630.arrondissements/items.json?limit=10000' // URL pgFeatureServ GeoJSON
    });

    // Ajout de la couche des arrondissements à la carte MapLibre
    map.addLayer({
        'id': 'arrondissements', // Identifiant de la couche
        'type': 'fill', // Type de géométrie de la couche (remplissage)
        'source': 'arrondissements-source', // Source des données de la couche
        'paint': {
            'fill-outline-color': 'black',
            'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire
            'fill-opacity': 0.3 // Opacité de remplissage (30%)
        }
    });
}


