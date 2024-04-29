Initialement, le but du travail était de développer une carte interactive pour analyser les déplacements à Montréal en mettant l'accent sur les modes de transport, l'environnement et l'énergie. Les principaux objectifs étaient de permettre de visualiser les tendances des déplacements des cyclistes, des automobilistes, des autobus et des piétons et de montrer les impacts de l’utilisation de chacun de ces transports sur les émissions de CO2.

L’outil utilise des données de comptages de passages de chacun des modes de transports des données ouvertes de Montréal. Il permet une visualisation temporelle quotidienne grâce à un glisseur qui montre les flux moyens de voitures, de vélos et de piétons au fil d’une journée. Les comptages sont faits à certaines intersections seulement - souvent aux feux de circulation - et donc été interpolés sur les tronçons de routes qui ne sont pas directement liés à une station de comptage.

Les résultats sont présentés sur la carte interactive, mettant en évidence l’achalandage heure par heure sur chaque tronçon es tronçons grâce à une symbologie par classes de couleur graduée. Par manque de temps, les calculs d’émissions de GES imaginés d’abord ont été laissés de côté pour se concentrer spécifiquement sur les flux des transports.

Sur la carte, les boutons à droite permettent d’afficher la couche au choix de l’utilisateur. La légende est dynamique et les informations de symbologie s’affichent en fonction de la carte qui est active sur la carte. Le bouton de glisseur sous la carte permet de naviguer temporellement entre les heures de la journée.

Les scripts JavaScript sont documentés directement dans le code et les modules utilisés sont tous accessibles et le script HTLM y réfère.

Le script le plus complexe est ‘slider2’ puisque c’est celui qui est conçu pour contrôler la temporalité de l'affichage des différentes couches de données de flux de circulation après leur affichage, de l’affichage de la légende et des informations de qui évolue en fonction de la couche et l'heure sélectionnée par l'utilisateur à l'aide du curseur. Voici les principaux éléments du script :

**Variables initiales :** Les variables initiales comprennent des listes d'heures, des identifiants de sources de données, et des paramètres de style (couleur, largeur de ligne, opacité) pour chaque type de véhicule (voitures, vélos, piétons, etc.).

**Fonction de changement de style (changePaint) :** Cette fonction est appelée lorsqu'un utilisateur modifie l'heure sélectionnée. Elle met à jour la couche selon l’heure sélectionner en trouvant le bon attribut de la couche répondant à l’heure sélectionnée. Elle supprime d'abord la couche active, puis ajoute à nouveau la couche à l’heure voulue.

**Écouteur d'événements sur le curseur (eventListener) :** Un écouteur d'événements est ajouté au curseur de sélection d'heures. Lorsque la valeur du curseur change, cette fonction détermine quelle couche est active et appelle la fonction changePaint pour mettre à jour le style en conséquence.

**Fonction de mise à jour du texte de l'heure (rangeValue) :** Cette fonction met à jour le texte affichant l'heure sélectionnée par l'utilisateur en fonction de la valeur du curseur.

**Fonction de récupération des attributs de style (getPaintAttributes) :** Cette fonction récupère les attributs de style actuels de la couche active et met à jour la légende de la carte avec ces informations. Elle extrait les couleurs et les plages de valeurs à partir des propriétés de style pour les afficher dans la légende (les mêmes qui sont utilisées pour les lignes affichées sur la carte).