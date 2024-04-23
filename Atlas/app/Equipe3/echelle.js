//Essai de la création d'une échelle avec un maximum de 200
const customScaleControl = new maplibregl.ScaleControl ({
    maxWidth: 200,

})
// Ajout du controle à la carte
map.addControl(customScaleControl);

// Ajouter les données
