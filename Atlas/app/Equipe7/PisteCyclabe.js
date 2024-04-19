function Piste() {


        map.addSource('DD891050.piste_cyclabe_2-source', {
            'type': 'vector',
            'tiles': [ "https://redesigned-doodle-r44qr9j4v5x4fpxv9-8801.app.github.dev/DD891050.piste_cyclabe_2/{z}/{x}/{y}.pbf "]
             
            
        });
        map.addLayer({
            'id': 'DD891050.piste_cyclabe_2',
            'type': 'line',
            'source': 'DD891050.piste_cyclabe_2-source',
            'source-layer': 'DD891050.piste_cyclabe_2',
        
            
        
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
    .getElementById('Piste') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 
    .addEventListener('click', Piste);

    // salut clément