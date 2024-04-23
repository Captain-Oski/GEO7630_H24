// ajout des sources et des couches de la carte

function iqa_par_station() {
    // ajout de la source station iqa
    map.addSource('iqa_par_station-source', {
        type: 'fill', // https://maplibre.org/maplibre-style-spec/sources/
        tiles: ['https://sturdy-fiesta-v669g4447rjgh6gxj-8801.app.github.dev/EG591962.iqa_par_station/{z}/{x}/{y}.pbf"}'] // URL du tuile vectorielle IQA par station
    })
    // ajout de la couche station iqa
    map.addLayer({
        'id': 'iqa_par_station', // identifiant de la couche
        'type': 'fill', // type de géométrie de la couche
        'source': 'iqa_par_station-source', // source des données de la couche
        'source-layer': 'EG591962.iqa_par_station', // source des données de la couche (id dans le JSON de pgtileserv), majoritairement nomduschema.nomdelatable
        
       });
}

document
.getElementById('iqa_par_station') // id unique du bouton 
.addEventListener ('click', iqa_par_station);



//map.on('idle', function () {
  //  const layers = map.getStyle().layers;
   // layers.forEach((layer) => {
     //   if (layer.id == 'EG591962.iqa_par_station') {
       //     featureCount() // Appelez la fonction de votre module qui compte le nombre de points à l'ecran
        //}        
  //  });
//}
