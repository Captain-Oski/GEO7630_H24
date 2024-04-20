// Définir une variable pour suivre l'état des points
let pointsAffiches2023 = false;

// Fonction pour basculer l'état des points
function togglePoints2023() {
    if (!map.getSource('annee2023-source')) {
        // Charger la source uniquement si elle n'est pas déjà chargée
        map.addSource('annee2023-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2023/{z}/{x}/{y}.pbf']
        });
        
        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2023",
            "type": "circle",
            "source": "annee2023-source",
            "source-layer": "HE391000.Point_2023",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{"value": 4942, "zoom": 10}, "rgba(242, 233, 1, 1)"],
                        [{"value": 14329, "zoom": 10}, "rgba(245, 190, 17, 1)"],
                        [{"value": 25664, "zoom": 10}, "rgba(249, 147, 33, 1)"],
                        [{"value": 45003, "zoom": 10}, "rgba(252, 104, 48, 1)"],
                        [{"value": 1422146, "zoom": 10}, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    }
    
    if (pointsAffiches2023) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2023', 'visibility', 'none');
        pointsAffiches2023 = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2023', 'visibility', 'visible');
        pointsAffiches2023 = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2023 = document.getElementById('point2023');
bouton2023.addEventListener('click', togglePoints2023);
