function generateArret() {
    map.addSource('DD891050.arret_de_bus-source', { // Ajouter source Arrêts de bus
        'type': 'vector',
        'tiles': ["https://redesigned-doodle-r44qr9j4v5x4fpxv9-8801.app.github.dev/DD891050.arret_de_bus/{z}/{x}/{y}.pbf"]
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


// Ajouter un événement de clic sur le bouton "loadLayer" 
// pour charger la couche de points aléatoires
//document
   // .getElementById('Piste') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 
   // .addEventListener('click', Piste);

    


    const ArretBus = document.querySelector('#ArretBusCheckbox'); 

    ArretBus.addEventListener('change', (event) => {
        if(event.target.checked) {
            generateArret()
        }

        else  {

 console.log("else");

        }

    });
    