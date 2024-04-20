// Ajouter la source de données des collisions
map.addSource('Collision', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.collisions/{z}/{x}/{y}.pbf']
});

// Ajouter la couche de données des collisions
// Ajouter la couche de données des collisions
map.addLayer({
    id: 'Collision',
    source: 'Collision',
    type: 'heatmap',
    'source-layer': "HE391000.collisions",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }, // Utilisation de la notation de crochet
    paint: {
        'heatmap-weight': ['get', 'nb_bicycle'],   // Poids des points basé sur 'point_count'
        'heatmap-radius': 20,                       // Rayon des points de chaleur du heatmap
        'heatmap-intensity': 0.5,                   // Intensité globale du heatmap
        'heatmap-color': [                          // Couleurs personnalisées pour le heatmap
            'interpolate',
            ['linear'],
            ['heatmap-density'],                    // Utilise la densité du heatmap pour l'interpolation
            // Définit les étapes de couleur pour le heatmap
            0, 'rgba(0, 255, 0, 0)',               
            1, 'blue',                           
            2, 'orange',                           
            7, 'red'                               
        ],
        'heatmap-opacity': 0.6,                      // Opacité du heatmap
    }        
});



// Définir une variable pour suivre l'état des points de collision
let collisionPointsAffiches = false;

// Fonction pour basculer l'état des points de collision
function toggleCollisionPoints() {
    if (collisionPointsAffiches) {
        // Si les points de collision sont actuellement affichés, les masquer
        map.setLayoutProperty('Collision', 'visibility', 'none');
        collisionPointsAffiches = false;
    } else {
        // Sinon, afficher les points de collision
        map.setLayoutProperty('Collision', 'visibility', 'visible');
        collisionPointsAffiches = true;
    }
}

// Ajouter un écouteur d'événements au bouton des collisions
const boutonCollision = document.getElementById('collisionBtn');
boutonCollision.addEventListener('click', toggleCollisionPoints);
