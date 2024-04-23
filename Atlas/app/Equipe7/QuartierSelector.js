function QuartierDisplay() {
    
    // Ajout de la source de données des quartiers
    map.addSource('DD891050.Quartier-source', {
        type: 'vector', // Type de source de données vecteur 
        tiles: "https://shiny-trout-5ggj46wgpj7w37qjr-8801.app.github.dev/DD891050.Quartier/{z}/{x}/{y}.pbf" // URL de la source
    });

    // Ajout de la couche des quartiers
    map.addLayer({
        'id': 'Quartier', // Identifiant de la couche
        'type': 'fill', // Type de géométrie de la couche (remplissage)
        'source': 'DD891050.Quartier-source', // Source des données de la couche
        'source-layer': 'Quartier', // Nom de la couche dans la source de données
        "layout": {"visibility": "visible"}, // Visibilité de la couche
        "paint": {
            "fill-color": "rgba(0, 233, 242, 1)",// Choisir couleur cyan
            "fill-antialias": false,//aucun remplissage
            "fill-outline-color": [//Afficher les propriétés des arrondissements ou quartiers
                "get",
                "nom_qr"
            ],
            "fill-translate-anchor": "map"// 
        }
    });
}


    
 



// Ajouter un événement de clic sur le bouton "loadLayer" 
// pour charger la couche de points aléatoires
//document
   // .getElementById('Piste') // j'ai changé, et j'ai mis click et boutton pour essayer d'afficher ma couche, je pense que c'est un problème de source 
   // .addEventListener('click', Piste);

    

//
    const QuartierMontreal = document.querySelector('#QuartierMontrealCheckbox'); // Ajouter une contante Quartier de Montreal pour checkbox

    QuartierMontreal.addEventListener('change', (event) => { // Ecoute de l'évènement change pour la checkbox
        if(event.target.checked) { // Si l'action est faite, afficher Quartier
            QuartierDisplay()
        }

        else  {//sinon, retirer-les


            // Supprimer la couche de la carte
            map.removeLayer('DD891050.Quartier');
         
                 }
         
             });
   
    