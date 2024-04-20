function generateHeatmap() {
    removeAllLayersAndSources();

    map.addSource('annee2014', {
        type: 'vector',
        tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2014/{z}/{x}/{y}.pbf']
    });
    map.addLayer({
        "id": "annee2014",
        "type": "heatmap",
        "source": "annee2014",
        "source-layer": "HE391000.Point_2014",
        "layout": {
            "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
        },
        "paint": { // Il manquait une accolade pour englober la propriété 'paint'
            'heatmap-weight': ['get','score'],   // Poids des points basé sur 'point_count'
            'heatmap-radius': 20,                       // Rayon des points de chaleur du heatmap
            'heatmap-intensity': 0.5,                   // Intensité globale du heatmap
            'heatmap-color': [                          // Couleurs personnalisées pour le heatmap
                'interpolate',
                ['linear'],
                ['heatmap-density'],                    // Utilise la densité du heatmap pour l'interpolation
                // Définit les étapes de couleur pour le heatmap
                0, 'rgba(0, 255, 0, 0)',                // À densité 0, utilise 'rgba(0, 255, 0, 0)'
                0.2, 'yellow',                           // À densité 0.2, utilise 'yellow'
                0.4, 'orange',                           // À densité 0.4, utilise 'orange'
                0.6, 'red'                               // À densité 0.6, utilise 'red'
            ],
            'heatmap-opacity': 0.8                      // Opacité du heatmap
        }        
    });
}


// Définir une variable pour suivre l'état des points
let pointsAffiches = false;

// Fonction pour basculer l'état des points
function togglePoints() {
    if (pointsAffiches) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2014', 'visibility', 'none');
        pointsAffiches = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2014', 'visibility', 'visible');
        pointsAffiches = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2014 = document.getElementById('point2014');
bouton2014.addEventListener('click', togglePoints);