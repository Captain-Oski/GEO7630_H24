function generateStationBixi() {
    
    map.addSource('DD891050.station_bixi-source', {
        'type': 'vector',
        'tiles': ["https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.station_bixi/{z}/{x}/{y}.pbf"]
    });
    map.addLayer({
        'id': 'DD891050.station_bixi',
        'type': 'circle', // Utiliser le type de couche "circle" pour afficher des points
        'source': 'DD891050.station_bixi-source',
        'source-layer': 'DD891050.station_bixi', // Correction ici
        'paint': {
            'circle-radius': 5, // Rayon du cercle
            'circle-color': 'rgba(189, 19, 19, 1)', // Couleur du cercle
            'circle-opacity': 1 // Opacité du cercle
        }
    });
}

const ParkingBixi = document.querySelector('#ParkingBixiCheckbox'); 

ParkingBixi.addEventListener('change', (event) => {
    if (event.target.checked) {
        generateStationBixi();
    } else {//sinon, retirer-les


                // Supprimer la couche de la carte
                map.removeLayer('DD891050.station_bixi');

                map.removeSource ('DD891050.station_bixi-source')
             
                     }
             
                 });
       