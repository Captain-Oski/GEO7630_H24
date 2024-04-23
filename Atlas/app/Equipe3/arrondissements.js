// création d'une fonction pour ajouter la couche arrondissements
function arrondissements(){
        // Ajout de la source de données pour les arrondiessements de Montréal
         map.addSource('arrondissements-source', {
           type: 'vector',
           tiles: ['A CHANGER'], //URL de l'arrondissement
           minzoom: 0,
           maxzoom: 22
         });
       
         // Ajout de la couche pour les arrondissements de Montréal
         map.addLayer({
           'id': 'arrondissements',
           'type': 'fill',
           'source': 'arrondissements-source',
           'source-layer': 'geo7630.arrondissements',
           'paint': {
             'fill-color': '#FF9999', // Couleur rouge
             'fill-opacity': 0.5 // Opacité de remplissage
           }
         });
       }
       //fonction à déclencher sur l'éveneemnt pour déclencher la couche arrondissements
       document
       .getElementById('arrondissements') // id unique du bouton 
       .addEventListener ('click', arrondissements);
