function generateArret() {
    
    map.addSource('DD891050.arret_de_bus-source', {// sources de donnees
        'type': 'vector',
        'tiles': ["https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.arret_de_bus/{z}/{x}/{y}.pbf"]
    });
    map.addLayer({
        'id': 'DD891050.arret_de_bus',
        'type': 'circle', // Utiliser le type de couche "circle" pour afficher des points
        'source': 'DD891050.arret_de_bus-source',
        'source-layer': 'DD891050.arret_de_bus',
        'paint': {
            'circle-radius': 5, // Rayon du cercle
            'circle-color': 'rgba(189, 19, 19, 1)', // Couleur du cercle
            'circle-opacity': 1 // Opacité du cercle
        }
    });
}

const ArretBusCheckbox = document.querySelector('#ArretBusCheckbox'); 

ArretBusCheckbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        generateArret();
    } else {//sinon, retirer-les


                // Supprimer la couche de la carte et la sources de données 
                map.removeLayer('DD891050.arret_de_bus');

                map.removeSource ('DD891050.arret_de_bus-source')
             
                     }
             
                 });
       

    