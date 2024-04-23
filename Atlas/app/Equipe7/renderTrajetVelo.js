function Velo() {


        map.addSource('DD891050.trajet_velo-source', {
            'type': 'vector',
            'tiles': [ "https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.trajet_velo/{z}/{x}/{y}.pbf"]
             
            
        });
        map.addLayer({
            'id': 'DD891050.trajet_velo',
            'type': 'line',
            'source': 'DD891050.trajet_velo-source',
            'source-layer': 'DD891050.trajet_velo',
        
            
        
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

    


    const TrajetVelo = document.querySelector('#TrajetVeloCheckbox'); 

    TrajetVelo.addEventListener('change', (event) => {
        if(event.target.checked) {
            Velo()
        }

        else  {//sinon, retirer-les


            // Supprimer la couche de la carte et des source de données
            map.removeLayer('DD891050.trajet_velo');
            
            map.removeSource ('DD891050.trajet_velo-source')
         
                 }

    });
    