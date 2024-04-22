function QuartierDisplay() {

        // Ajout de la source de données des arrondissements depuis pgFeatureServ
    
        map.addSource('DD891050.Quartier-source', {
    
            type: 'vector', // Type de source de données
    
            tiles: "https://redesigned-doodle-r44qr9j4v5x4fpxv9-8801.app.github.dev/DD891050.Quartier/{z}/{x}/{y}.pbf" // URL pgFeatureServ GeoJSON
    
        });
    
        // Ajout de la couche des arrondissements à la carte MapLibre
    
        map.addLayer({
    
            'id': 'Quartier', // Identifiant de la couche
    
            'type': 'fill', // Type de géométrie de la couche (remplissage)
    
            'source': 'Quartier-source', // Source des données de la couche

            'source-layer': 'Quartier-source',
    
            "layout": {"visibility": "visible"},
            "paint": {
              "fill-color": "rgba(0, 233, 242, 1)",
              "fill-antialias": false,
              "fill-outline-color": [
                "get",
                "nom_qr"
              ],
              "fill-translate-anchor": "map"
            }
    
        });
    
    }



    
 



// Ajouter un événement de clic sur le bouton "loadLayer" 
// pour charger la couche de points aléatoires
//document
   // .getElementById('Piste') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 
   // .addEventListener('click', Piste);

    


    const QuartierMontreal = document.querySelector('#QuartierMontrealCheckbox'); 

    QuartierMontreal.addEventListener('change', (event) => {
        if(event.target.checked) {
            QuartierDisplay()
        }
    });
    