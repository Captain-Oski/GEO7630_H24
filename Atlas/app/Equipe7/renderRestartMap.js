/**
 * Fonction pour générer une représentation 3D d'une grille sur une carte
 */
function Restart() {
    // Affiche un message de test dans la console

    // Supprime toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

}

// Ajoute un événement d'écoute du clic sur l'élément HTML avec l'ID 'generate3D'
document
    .getElementById('Restart') // id unique du bouton
    .addEventListener('click', Restart);  // ajoute un event de type click qui lance la fonction generate3D()