/**
 // restart la carte pour effacer tout les cours sélectionnées
 */
function Restart() {
   

    // Supprime toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

}

// Ajoute un événement d'écoute du clic sur l'action pour effacer les couches
document
    .getElementById('Restart') // id unique du bouton
    .addEventListener('click', Restart);  //effectuer la fonction clean