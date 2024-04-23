// Ajout de l'échelle
const customScaleControl = new maplibregl.ScaleControl ({
    maxWidth: 200,

})
// Ajout du controle à la carte
map.addControl(customScaleControl);

// Ajouter les données
