TP3 - Développement d’une application web et diffusion des données _(Open Source)_

Le développement de notre application Web interactive nommée AIR PUR MTL à été réalisé sur github dans l’app équipe 3.

Pour sa réalisation nous avons crée plusieurs modules javascript pour chaque couches (pg\_tileserv) que nous voulions traiter de manière isolé et faire interagir ensuite dans notre application web,

1. Réalisation

Un module js pour arrondissements : “arrondissements.js” : 

Nous avons d'abord mis en place une fonction pour charger une couche WFS nommée "arrondissements". Ensuite, nous avons configuré la source de données pour cette couche en utilisant pgFeatureServer. Nous avons identifié la couche ainsi que son type de géométrie (polygones dans ce cas). Nous avons ajouté des propriétés telle que fill-opacity à hauteur de 50 % pour ne pas recouvrir le fond de carte lorsque la couche est sélectionnée. Ensuite, nous avons défini le style de remplissage pour cette couche et l'avons ajouté sa source via l’URL. Enfin, nous avons créé un écouteur d'événements pour détecter les clics sur un bouton. Un bouton est créé dans l’index html à la ligne 16.

- Un module js pour les espaces verts et parc de Montréal : espace\_parc\_mtl.js” 

Même chose nous avons créé une fonction nommée \`loadLayer\` dans laquelle on ajoute la source de données pour les espaces verts des parcs de Montréal en spécifiant le type de source comme vecteur et en fournissant l'URL des tuiles de cette source. Ensuite, nous avons ajouté la couche pour les espaces verts des parcs de Montréal en utilisant le type de géométrie "fill" pour indiquer un remplissage. Nous avons lié cette couche à la source de données que nous avons précédemment définie et spécifié les propriétés de style pour le remplissage, telles que la couleur (\`fill-color\`) et l'opacité (\`fill-opacity\`), avec un choix d’opacité de 80 % pour que les polygone soit mis en avant sur la carte. Ensuite, nous avons configuré l'écouteur d'événements pour déclencher la fonction \`loadLayer\` lorsqu'un élément avec l'ID "loadLayer" est cliqué. Un bouton dans l’index html est ajouté à la ligne 22.

- Un module js pour les station IQA : iqa\_par\_station : 

La fonction \`iqa\_par\_station\` a été créée pour ajouter la couche représentant les stations d’indice de la qualité de l’air (IQA) (11) avec leurs valeurs associées. Tout d'abord, nous avons ajouté une source de données pour cette couche en spécifiant le type de source comme vecteur et en fournissant l'URL des tuiles vectorielles contenant les données IQA par station. Ensuite, nous avons ajouté la couche "station iqa" à la carte en utilisant le type de géométrie "fill" pour indiquer un remplissage. Nous avons lié cette couche à la source de données que nous avons précédemment définie et spécifié les propriétés de style pour le remplissage, telles que la couleur (\`fill-color\`) et l'opacité (\`fill-opacity\`).

Ensuite, nous avons configuré l'écouteur d'événements pour déclencher la fonction \`iqa\_par\_station\` lorsqu'un élément avec l'ID "iqa\_par\_station" est cliqué. Lorsque cet événement se produit, la fonction \`iqa\_par\_station\` est exécutée suite à un clique sur le bouton insérer dans le HTML à la ligne 28.

2. Choix de l’interface UI/UX:

Pour le choix de l’interface de l’expérience utilisateur nous avons utilisé le site web bootstraps pour nous aider à créer des composants simples et colorés pour rendre lisible et agréable l’utilisation de notre application comme visible sur les images. Les deux panneaux, latéraux et verticaux n’ont pas la même fonction. D’abord, le panneau de droite regroupe l’ensemble des données informatives nécessaires à l’utilisateur pour en savoir plus concernant les niveaux de risque de la qualité de l’air: vert pour un risque faible, jaune pour un risque modéré et rouge pour un risque élevé, accompagnés de textes descriptifs. Ensuite les principaux polluants que l’on retrouve dans l’air  notamment le PM10, le NO2 et l'Ozone. Enfin, un bouton qui renvoie à un lien web externe de l’OMS qui permet d'obtenir des informations supplémentaires (agréées) sur la pollution de l’air ambiant. L’utilisation des panneaux en accordéons permet d’insérer bcp de texte sans prendre de place sur l’interface. C’est à l’utilisateur de sélectionner d'informations qu’il souhaite obtenir d’avantage.

![](https://lh7-us.googleusercontent.com/F-t9ae2s4vBKa9YCMWQ67XDtBaHHvF0obo6Zs978pmS8Nsmwfq5vYC3cqV4z8rheOHN3ZGspn9e7pYJaHTruCIfYTz11wulyl8o3ZUqY0NlGdpbH1ZTNXXcNalz74Wd_phI-StL_K9ePr844JX78XIs)

Le panneau latéral regroupe les couches cartographiques que nous voulions faire apparaître et avec lesquelles l’utilisateur peut interagir. Ce panneau est épuré pour ne pas que l’ensemble de la carte soit surchargée. 

![](https://lh7-us.googleusercontent.com/k7jETqPgdvr1KKnRpf3Nj0-u4Kwk9FOSw-ctN8lvL8srU0B1-ii7x_ib8vhxL_C0Frp-Xfnowr5_7HTELNLjPHz05ezVvlQYZ0sCvwxLrDvrc7FlV5azjLJReEth2DfB4CfD-ZB1rWTCsxDb8xSDySM)

L’image ci-dessous est obtenue lorsque la couche des espaces vert et parc est sélectionnée. Le choix de la couleur verte est intuitif puisqu'il s’agit des espaces verts et des parcs urbains.

![](https://lh7-us.googleusercontent.com/v0iA9X0YqW7xB2MuG7JsHGfN6KYGAgACse5LM9roqAjzoOjyVzKNg0hMnEBUB3991tXPmpv5M43z8GecF7gnkVsWyVO4wgq87UJWsnCW5GP5nDO7TNGa0EYOy9qM1oZ_PtcjXeLjmKg6GG-kbTgl6PE)

Nous avons inséré un contrôle de localisation pour permettre à l'utilisateur de mieux se repérer sur l'application.

![](https://lh7-us.googleusercontent.com/MylD-_lPSLBPrrddov3UUp5VKJ7Lr6XLU5NfyHv0vPDJwmTQmLYNjGS6FNgJxgT1s2TuqGzxPZwwKnX58wnZPCpAED6LQWt7vyrpgrBjCXiVmgxGWDz8s24s4atAsTFEXADIaPMWQQ-vd4rerIWdbII)

3. Problèmes rencontrés et attentes: 

Pour commencer, nous trouvons que malgré la disposition des TPs, il nous a été difficile d’avoir les résultats souhaités dans notre démarche ; en effet, plusieurs problèmes en cours de route sont survenus par manque de maîtrise du codage dans github.

Nous avons rencontré de nombreuses difficultés notamment pour le codage des différents modules javascript. C’est principalement des erreurs sémiologiques qui nous ont fait perdre du temps sur le développement de l’application. Nous avons passé du temps à obtenir le résultat souhaité pour le module js des espaces verts et parcs. Nous n’avons pas réussi à afficher les stations IQA avec les valeurs de l’indice associés. Malgré l'utilisation d’une fonction ainsi que les ressources disponibles dans les laboratoires, la couche ne parvient pas à s’afficher dans notre application. 

Le résultat final attendu était celui de créer une heatmap basée sur les valeurs IQA des stations afin d’obtenir une carte visuellement intéressante et plus moderne fournissant plus efficacement nos informations souhaitées. Cependant le codage du module heatmap.js n’a pas abouti.
