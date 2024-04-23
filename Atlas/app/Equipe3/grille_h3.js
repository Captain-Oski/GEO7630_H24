
// ajout d'une fonction pour la grille_h3
function grille_h3() {
    map.addSource('grille_h3', {

        type: 'vector', // https://maplibre.org/maplibre-style-spec/sources/

        URL: 'hhttps://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.h3_montreal/{z}/{x}/{y}.pbf' //URL des tuilles vectorielles
// URL des tuiles vectorielles attention à bien mettre là votre

    })

    // ajout de la couche des garages

    map.addLayer({

        'id': 'grille_h3', // identifiant de la couche

        'type': 'fill', // type de géométrie de la couche

        'source': 'h3_montreal-source', // source des données de la couche

        'source-layer': 'EG591962.h3_montreal', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nom du schéma.nomdelatable

    })

;
}// fin de la fonction 
document 
.getElementById('grille_h3')
.addEventListener('click', grille_h3)
