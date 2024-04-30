function iqatest() {
    // Vérifier si la source de données 'iqatest' existe déjà

        map.addSource('iqatest', {
            type: 'vector',
            tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.iqa_par_station/{z}/{x}/{y}.pbf']
        });

        map.addLayer({
            "id": "iqatest",
            "type": "fill",
            "source": "iqatest-source",
            "source-layer": "EG591962.iqa_par_station",
            "layout": {"visibility": "none"},
             'paint': {
                    'fill-color': '#006400', // Couleur verte pour les espaces verts
                    'fill-opacity': 0.8 // Opacité de remplissage
                },

            }
        );
    }





// Ajouter un écouteur d'événements au bouton pour les polygones de chaleur
document.getElementById('iqatest');
addEventListener('click', iqatest);
