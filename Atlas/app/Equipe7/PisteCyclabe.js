function Piste() {


        map.addSource('DD891050.piste_cyclabe_2', {
            'type': 'vector',
            'tiles': [ "https://redesigned-doodle-r44qr9j4v5x4fpxv9-8801.app.github.dev/DD891050.piste_cyclabe_2/{z}/{x}/{y}.pbf "]
             
            
        });
        map.addLayer({
            'id': 'DD891050.piste_cyclabe_2',
            'type': 'line',
            'source': 'DD891050.piste_cyclabe_2',
            
        
            'paint': {
                "line-color": "rgba(189, 19, 19, 1)",
                "line-opacity": 1,
                "line-width": 1,
                "line-translate-anchor": "map"
            }
        });
    };
 



// Ajouter un événement de clic sur le bouton "loadLayer" 
// pour charger la couche de points aléatoires
document
    .getElementById('Piste')
    .addEventListener('click', Piste);