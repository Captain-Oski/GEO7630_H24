var rangeSlider = document.getElementById("myRange");
var intervalId; // Variable pour stocker l'ID de l'intervalle
var isAnimating = false; // Variable pour suivre l'état de l'animation

function startAnimation() {
    if (!isAnimating) {
        isAnimating = true; // Définir l'état de l'animation comme en cours
        intervalId = setInterval(function() {
            var currentValue = parseInt(rangeSlider.value);
            if (currentValue < rangeSlider.max) {
                rangeSlider.value = currentValue + 1; // Augmenter la valeur du slider
            } else {
                stopAnimation(); // Arrêter l'animation lorsque la valeur maximale est atteinte
            }
        }, 1000); // Intervalle de 1 seconde
    }
}

function stopAnimation() {
    clearInterval(intervalId); // Arrêter l'animation
    isAnimating = false; // Définir l'état de l'animation comme arrêté
}

// Sélection des boutons par leur identifiant
var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');

// Ajout d'un écouteur d'événements pour le clic sur le bouton "Play"
playButton.addEventListener('click', function() {
    startAnimation(); // Démarrer l'animation lorsque le bouton "Play" est cliqué
});

// Ajout d'un écouteur d'événements pour le clic sur le bouton "Stop"
stopButton.addEventListener('click', function() {
    stopAnimation(); // Arrêter l'animation lorsque le bouton "Stop" est cliqué
});
