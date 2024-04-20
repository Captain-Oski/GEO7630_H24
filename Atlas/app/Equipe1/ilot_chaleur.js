let chaleurPolygonsAffiches = false;

function togglePointsChaleur() {
    // Vérifier si la source de données 'chaleur-source' existe déjà
    if (!map.getSource('chaleur-source')) {
        map.addSource('chaleur-source', {
            type: 'vector',
            tiles: 'https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.ilots_chaleur/{z}/{x}/{y}.pb'
        });

        map.addLayer({
            "id": "chaleur",
            "type": "fill",
            "source": "chaleur-source",
            "source-layer": "HE391000.ilots_chaleur",
            "layout": {"visibility": "none"}
        });
    }

    if (chaleurPolygonsAffiches) {
        // Si les polygones de chaleur sont actuellement affichés, les masquer
        map.setLayoutProperty('chaleur', 'visibility', 'none');
        chaleurPolygonsAffiches = false;
    } else {
        // Sinon, afficher les polygones de chaleur
        map.setLayoutProperty('chaleur', 'visibility', 'visible');
        chaleurPolygonsAffiches = true;
    }
}


// Ajouter un écouteur d'événements au bouton pour les polygones de chaleur
const boutonChaleurPolygons = document.getElementById('chaleurBtn');
boutonChaleurPolygons.addEventListener('click', togglePointsChaleur);



