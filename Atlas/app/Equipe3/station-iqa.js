// ajout des sources et des couches de la carte

function iqa_par_station() {
    // ajout de la source station iqa
    map.addSource('iqa_par_station-source', {
        type: 'vector', // https://maplibre.org/maplibre-style-spec/sources/
        tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.iqa_par_station.json'] // URL du tuile vectorielle
    })
    // ajout de la couche station iqa
    map.addLayer({
        'id': 'iqa_par_station', // identifiant de la couche
        'type': 'vector', // type de géométrie de la couche
        'source': 'iqa_par_station-source', // source des données de la couche
        'source-layer': 'EG591962.iqa_par_station', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nomduschema.nomdelatable
        
       });
}

//Fonction qui charge une couche WFS depuis pgFeatureServ et l'ajoute à la carte MapLibre.
//Cette fonction ajoute une source de données GeoJSON à partir d'une URL pgFeatureServ
//et ajoute une couche de remplissage ('fill') à la carte MapLibre en utilisant cette source de données.
function loadWFS() {
    // Ajout de la source de données des arrondissements depuis pgFeatureServ
    map.addSource('arrondissements-source', {
        type: 'geojson', // Type de source de données
        data: 'https://sturdy-fiesta-v669g4447rjgh6gxj-9000.app.github.dev/collections/geo7630.arrondissements/items' // URL pgFeatureServ GeoJSON
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






document
.getElementByld('iqa_par_station') // id unique du bouton 
.addEventListener ('click', iqa_par_station);