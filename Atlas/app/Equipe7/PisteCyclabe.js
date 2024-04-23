function Piste() {

// Ajout de source vectorielle à la carte de l'équipe 7:
        map.addSource('DD891050.piste_cyclabe_2-source', { 
            'type': 'vector',
            'tiles': [ "https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.piste_cyclabe_2/{z}/{x}/{y}.pbf "]
             
            
        });
        // Ajout de couche de type line pour générer les pistes cyclables
        map.addLayer({
            'id': 'DD891050.piste_cyclabe_2',
            'type': 'line',
            'source': 'DD891050.piste_cyclabe_2-source',
            'source-layer': 'DD891050.piste_cyclabe_2',
        
            
        // Dêfinition du style des couches 
            'paint': {
                "line-color": "rgba(189, 19, 19, 1)", // utilisation des codes couleurs rouge, vert, bleu, alpha pour styliser la couche
                "line-opacity": 1, // Opacité de 1 = 100%
                "line-width": 1, // largeur =1
                "line-translate-anchor": "map" // 
            }
        });
    };
 



// Ajouter un événement de clic sur le bouton "loadLayer" 
// pour charger la couche de points aléatoires
//document
   // .getElementById('Piste') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 
   // .addEventListener('click', Piste);

    

    const PisteCyclabe = document.querySelector('#PisteCyclabeCheckbox'); // Ajout d'une constante piste cyclable pour l'action checkbox

    PisteCyclabe.addEventListener('change', (event) => { // Ecoute de l'evenement change pour la checkbox
        if(event.target.checked) { // Si l'action checking est faite, afficher les pistes cyclables, 
            Piste()
        }

        else  {//sinon, retirer-les


   // Supprimer la couche de la carte
   map.removeLayer('DD891050.piste_cyclabe_2');
   
   map.removeSource ('DD891050.piste_cyclabe_2-source')

        }

    });
    