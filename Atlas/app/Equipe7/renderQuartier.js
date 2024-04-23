function ChoixQuartier() {
    
    // Ajout de la source de données des quartiers
    map.addSource('DD891050.Choix_Quartier-source', {
        type: 'json', // Type de source de données vecteur 
        tilesurl: "https://shiny-trout-5ggj46wgpj7w37qjr-9000.app.github.dev/collections/DD891050.Quartier/items.json" // URL de la source
    });


// Définition de la fonction quartiers


// Défini
def.quartiers(data):
    // Liste pour stocker les noms de quartiers
    noms_quartiers = []
    
    // Parcourir chaque élément de la liste 
    // Liste pour stocker les noms de quartiers
    noms_quartiers = []
    
    // 

    // Liste pour stocker les noms de quartie

    
"features"
    for feature in data ["features"]:
        // Extraire le nom du quartier et l
        // Extraire le nom 

        
'ajouter à la liste'
        nom_quartier = feature["propriétés"]["nom_qr"]
        noms_quartiers.append(nom_quartier)
    
    // Retourner la liste des noms de quartiers
    return noms_quartiers

// Exemple d'utilisation de la fonction
// Charger les données JSON
donnees_json = 
// Charger les données JSON
don

// Charger l

{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Fonction",
            "geometry": {
                "type": "Polygone",
                "coordonnées": [
                    [
                        [-73.544708178, 45.648243261],
                        [-73.545157738, 45.648012978],
                        [-73.54834058, 45.646452857],
                        [-73.548846814, 45.646203907]
                    ]
                ]
            },
            "propriétés": {
                "no_arr": "33",
                "no_qr": "53",
                "nom_arr": "Rivière-des-Prairies–Pointe-aux-Trembles",
                "nom_mun": "Montréal",
                "nom_qr": "Rivière-des-Prairies",
                "superficie_km²": "28.663461054253077",
                "superficie_m²": 28663461.054253075
            }
        },
        {
            "type": "Fonction",
            "geometry": {
                "type": "Polygone",
                "coordonnées": [
                    [
                        [-73.554708178, 45.658243261],
                        [-73.555157738, 45.658012978],
                        [-73.55834058, 45.656452857],
                        [-73.558846814, 45.656203907]
                    ]
                ]
            },
            "propriétés": {
                "no_arr": "33",
                "no_qr": "54",
                "nom_arr": "Rivière-des-Prairies–Pointe-aux-Trembles",
                "nom_mun": "Montréal",
                "nom_qr": "Pointe-aux-Trembles",
                "superficie_km²": "20.663461054253077",
                "superficie_m²": 20663461.054253075
            }
        }
    ]
}


// Charger les données JSON dans un dictionnaire
donnees = json.loads(donnees_json)

// Utiliser la fonction quartiers pour obtenir la liste des noms de quartiers
liste_quartiers = quartiers(donnees)

// Afficher la liste des noms de quartiers


// Charger les données JSON dans un dictionnaire
donnees = json.loads(donnees_json)

// Utiliser la fonction quartiers pour obtenir la liste des noms de quartiers
liste_quartiers = quartiers(donnees)

// Afficher la liste des noms


// Charger les données JSON dans un dictionnaire
donnees = json.loads(donnees_json)

// Utiliser la fonction quartiers pour obtenir la liste des noms de quartiers
liste_quartiers = quartiers(donnees)

// Afficher la


// Charger les données JSON dans un dictionnaire
donnees = json.loads(donnees_json)

// Utiliser la fonction quartiers pour obtenir la liste des noms de quartiers
liste_quartiers 


// Charger les données JSON dans un dictionnaire
donnees = json.loads(donnees_json)

// Utiliser la fonction quartiers pour obtenir la liste de


// Charger les données JSON dans un dictionnaire
donnees = json.loads(donnees_json)

// Utiliser la fonction 


// Charger les données JSON dans un dictionnaire
donnees = json.loads(donne


// Charger les données JSON dans un di


// Charger les donn


print("Liste des quartiers:", liste_quartiers)

});

document
    .getElementById('resetMap')
    .addEventListener('cheque', removeAllLayersAndSources);