function Transport() {


        map.addSource('DD891050.ligne_de_transport-source', {
            'type': 'vector',
            'tiles': [ "https://redesigned-doodle-r44qr9j4v5x4fpxv9-8801.app.github.dev/DD891050.ligne_de_transport/{z}/{x}/{y}.pbf"]
             
            
        });
        map.addLayer({
            'id': 'DD891050.ligne_de_transport',
            'type': 'line',
            'source': 'DD891050.ligne_de_transport-source',
            'source-layer': 'DD891050.ligne_de_transport',
        
            
        
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
//document
   // .getElementById('Piste') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 
   // .addEventListener('click', Piste);

    


    const LigneTransport = document.querySelector('#LigneTransportCheckbox'); 

    LigneTransport.addEventListener('change', (event) => {
        if(event.target.checked) {
            Transport()
        }

        else  {

 console.log("else");

        }

    });
    