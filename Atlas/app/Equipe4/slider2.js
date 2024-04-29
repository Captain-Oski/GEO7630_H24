var heures_liste = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
];

var id_sources = ['autos','velos','pietons','camions','bus']; // liste des id des layers possiblement affichées

var paint_autos = {
    'line-color': [
        'interpolate',['linear'],["to-number", ["get", ""]],
        0,
        '#FF2A2A',
        694,
        '#D40000',
        1646,
        '#800000',
        2999,
        '#2B0000',
    ],
    'line-width': 2,
    'line-opacity': 0.8
};

var paint_bus = {
    'line-color': [
        'interpolate',['linear'],["to-number", ["get", ""]],
        0,
        '#2A7FFF',
        17,
        '#0055D4',
        42,
        '#003380',
        85,
        '#00112B',
      ],
    'line-width': 2,
    'line-opacity': 0.8
};

var paint_camions = {
    'line-color': [
        'interpolate',['linear'],["to-number", ["get", ""]],
        0,
        '#FF2AD4',
        33,
        '#D400AA',
        92,
        '#800066',
        225,
        '#2B0022',
      ],
    'line-width': 2,
    'line-opacity': 0.8
};

var paint_velos = {
    'line-color': [
        'interpolate',['linear'],["to-number", ["get", ""]],
        0,
        '#2AFF2A',
        32,
        '#00D400',
        128,
        '#008000',
        373,
        '#002B00',
      ],
    'line-width': 2,
    'line-opacity': 0.8
};

var paint_pietons = {
    'line-color': [
        'interpolate',['linear'],["to-number", ["get", ""]],
        0,
        '#2AFFD5',
        67,
        '#00D4AA',
        207,
        '#008066',
        465,
        '#002B22',
      ],
    'line-width': 2,
    'line-opacity': 0.8
};


var dict_sourceLayer = {
    'autos':['autos-source','GK191080.troncons_compte_voitures', paint_autos, 'de voitures'],
    'bus':['bus-source','GK191080.troncons_compte_bus', paint_bus, "d'autobus"],
    'camions':['camions-source','GK191080.troncons_compte_camions',paint_camions, 'de camions'],
    'velos':['velos-source','GK191080.troncons_compte_velos',paint_velos, 'de vélos'],
    'pietons':['pietons-source','GK191080.troncons_compte_pietons',paint_pietons, 'de piétons']
};


var slider_defaut = document.getElementById('range').value

// On itère au travers des noms des couches pour trouver celle qui est active
var layerActive = ""; // on initialise


function changePaint(slider_value) {
    
    var AttributHeure = "compte_total_heure_" + slider_value.toString(); // Mettre à jour la variable globale d'heure avec la nouvelle heure sélectionnée
    if (slider_value.length == 1) {
        AttributHeure = "compte_total_heure_0" + slider_value.toString()
    };

    map.removeLayer(layerActive);

    var source_active = dict_sourceLayer[layerActive][0].toString();
    var sourceLayer_active = dict_sourceLayer[layerActive][1].toString();
    var paint_active = dict_sourceLayer[layerActive][2];
    paint_active['line-color'][2][1][1] = AttributHeure.toString();

    // On ajoute à nouveau la couche active, mais avec le champs utilisé pour la symbologie modifié
    map.addLayer({
        "id": layerActive,
        "type": 'line',
        "source": source_active,
        'source-layer': sourceLayer_active,
        "paint": paint_active
    });
    console.log({
        "id": layerActive,
        "type": 'line',
        "source": source_active,
        'source-layer': sourceLayer_active,
        "paint": paint_active
    });
    
};



// Ajoutez un écouteur d'événements sur le slider
document.getElementById('range').addEventListener('input', (e) => {

    for (let i = 0; i < id_sources.length; i++) {
        if (map.getLayer(id_sources[i])) {
            layerActive = id_sources[i]
        }
    };

    if (layerActive != "") {
        var range_value = document.getElementById('range').value;
        changePaint(range_value)
    }
})




// Update le texte qui indique l'heure montrée
var rangeValue = document.getElementById('rangeValue'); // Sélectionnez l'élément pour afficher la valeur du slider

document.getElementById('range').addEventListener('input', function (e) {
    var sliderValue = e.target.value;
    rangeValue.textContent = 'Trafic entre ' + sliderValue +'h00 et '+ sliderValue + "h59"; // Mettre à jour le contenu de l'élément avec la valeur du slider
       
    }

)


function getPaintAttributes() {
    paint_active = dict_sourceLayer[layerActive][2]; //On va chercher le dictionnaire paint de la couche active
  
    console.log(paint_active);

    var couleur1 = paint_active['line-color'][4].toLowerCase();
    var couleur2 = paint_active['line-color'][6].toLowerCase();
    var couleur3 = paint_active['line-color'][8].toLowerCase();
    var couleur4 = paint_active['line-color'][10].toLowerCase();
    
    var couleur_liste = [couleur1,couleur2,couleur3,couleur4];
  
    console.log(couleur_liste);
  
    var classe1 = paint_active['line-color'][3].toString() + " à " + (paint_active['line-color'][5]-1).toString();
    var classe2 = paint_active['line-color'][5].toString() + " à " + (paint_active['line-color'][7]-1).toString();
    var classe3 = paint_active['line-color'][7].toString() + " à " + (paint_active['line-color'][9]-1).toString();
    var classe4 = paint_active['line-color'][9].toString() + " et plus";
  
    var classe_liste = [classe1, classe2, classe3, classe4];
  
    console.log(classe_liste);
  
    // update les éléments de la légende
    var maDiv = document.getElementById("color-cl1");
    maDiv.style.backgroundColor = couleur_liste[0];

    maDiv = document.getElementById("color-cl2");
    maDiv.style.backgroundColor = couleur_liste[1];

    maDiv = document.getElementById("color-cl3");
    maDiv.style.backgroundColor = couleur_liste[2];

    maDiv = document.getElementById("color-cl4");
    maDiv.style.backgroundColor = couleur_liste[3]

    // On change le libellé des classes
    maDiv = document.getElementById("text-cl1");
    maDiv.textContent = classe_liste[0]

    maDiv = document.getElementById("text-cl2");
    maDiv.textContent = classe_liste[1]
    
    maDiv = document.getElementById("text-cl3");
    maDiv.textContent = classe_liste[2]
    
    maDiv = document.getElementById("text-cl4");
    maDiv.textContent = classe_liste[3];

    maDiv = document.getElementById("titre_leg");
    maDiv.textContent = "Nombre " + dict_sourceLayer[layerActive][3] + " par tronçon de route à Montréal"
    
  }