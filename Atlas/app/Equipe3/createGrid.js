
// Cette fonction crée une grille hexagonale à partir d'une boîte englobante et y ajoute une propriété aléatoire à chaque hexagone.
function makeGrid() {
    // Définit les coordonnées de la boîte englobante.
    var bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
    // Définit la taille des côtés des hexagones.
    var cellSide = 500;
    // Définit les unités de mesure.
    var options = {units: 'meters'};
    // Crée la grille hexagonale avec les paramètres précédents.
    var hexgrid = turf.hexGrid(bbox, cellSide, options);
    // Pour chaque hexagone, ajoute une propriété avec une valeur aléatoire entre 0 et 100.
    turf.featureEach(hexgrid, function(currentFeature) {
        currentFeature.properties.randomValue = Math.floor(Math.random() * 101);
    });
    // Retourne la grille hexagonale modifiée.
    return hexgrid;
}