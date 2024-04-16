GEO7630H24 - EXAM #2

16 avril 2024 17h30 

Salle A-4160

Chargé de cours : Clément Glogowski

Démonstrateur : Alexis-Raphael Gauthier


## Information sur l’examen

3h réparties comme vous le souhaitez


## Première partie

Questionnaire à choix multiples **(1 seule réponse par question ! )**

Répondre aux questions directement dans le fichier **GOOGLE FORM** ci-joint : 

[GEO7630H24 - EXAM #2](https://docs.google.com/forms/d/1LE0kX1vUTpD_M6LYjiW7JM-V0YtsESqSVPLht5M1OZQ)

![](https://lh7-us.googleusercontent.com/NerGuCII0uClB6xn19mLNdTr-5ytaTVi5RJX6fgm-wI9MxKOTuKQxCKIPr9Kscbsd80JPnFwqgNIdfxEbtKcaFJlLk3Hg49KRf_5HT6E2E3I_wPFXE-2-rhmLnGMaErWHv95bLK-MjneG3OS-cdlmGc)


## Deuxième partie 

### Rédaction technique d’un module cartographique javascript

**Pré-requis :** 

1. Ouvrir github : <https://github.com/Captain-Oski/GEO7630_H24>

2. Lancer Codespace sur la branche main 

![](https://lh7-us.googleusercontent.com/JCYazoCe9Got5ahBgA5jt7Z3i0lfVALd5-iAqCg-8s_RAhse8zHUh0Apz68AULIjVsbq4CKF5qLynG0hnVvgs0JlNgMDBMSRGGODrqBxhbY25WrhjrtCj60yfFi-3Gp_VPAv4i5tnrIcyBoBx6B-3gw)

3. Démarrer le docker-compose

![](https://lh7-us.googleusercontent.com/o16FRIK1sKD96mCQs4NT8e63_0i3ZGhZ8KaUhJu9kxqSb2JbAV0nDVPhxvKyq7VvGVWSKd9C24wi7HSw8DZI3xXM4iuXVxtrHfLpFjUQF-Bp6P_vYRKpSKIOueDvMyY9aTmwLLUtSV6EGK5dtiRn8lA)

4. Vérifier que l’application fonctionne correctement en allant sur la page. 

   1. Attention il se peut que vous ayez à changer le début de l’url avec votre propre url de codespace

   2. [https://**solid-robot-66qj67v4535v7g**-8000.app.github.dev/exam2/app/#9/45.55/-73.55](https://solid-robot-66qj67v4535v7g-8000.app.github.dev/exam2/app/#9/45.55/-73.55)

![](https://lh7-us.googleusercontent.com/oTjaZyfWgroqY_e2t-Au8GN23CXh4qfBYbHjRonh1cNwkwJk6MBRNsEcp0zwvbHpI17QSwpRDq2q72C6S1ngxObid9c5_aaQgM5e9xvyD4uBv8sqg9y7U3JPLr-B6wg6qBLFMzFvnZyvrmhkEzpmneY)

![](https://lh7-us.googleusercontent.com/uREElehCdASKRUnITWUjA7rDYTn8yl38z0y24DXdhDaQ2eJSMR4phZY-sPIF997J0DEaqFGTWhGcfkjvgOl5Jd8XLXvVq5QzF5t5zXLKb4zOkWoeCAJZzv-EqlI9p4enVHJv4yCRuE93cFVOZU67gmk)

Lorsque vous éditez les fichiers **exam2.js** et **app.js** les changements se répercutent automatiquement il suffit de **recharger** la page web de l’application. 

Vous pouvez compléter les trous dans l’ordre suggéré :

1\. Créer un buffer (turf.buffer) de 75m autour des lignes de métro (ligne\_metro.js)

2\. Trouver un set de point (stations\_bixi.js) qui tombe dans ce buffer (turf.pointwithin)

3\. Collecter (turf.collect) la propriété ‘route\_name’

4\. Ajouter une source et un layer à partir de la couche de points qui tombent dans le rayon de 75m

5\. Colorier les points en fonction de leur ligne

6\. Ajouter popup sur le nom de la propriété ‘route\_name’

7\. Lorsque je clique sur le bouton ma couche s’ajoute à la carte

8\. Lorsque je clique sur le point mon popup me montre la valeur de la propriété

9\. **Bonus** : montrer le nombre de station à l’écran dynamiquement


## Résultat final attendu lorsqu’on clique sur le bouton

- Les stations de bixi qui se trouvent dans un rayon de 75m d’une station de métro

- La couleur des stations en fonction de la ligne la plus proche

- Un popup qui indique la couleur de la ligne quand on clique dessus

- Le nombre de stations qui s’affichent à l’écran

![](https://lh7-us.googleusercontent.com/-LAQnVum5BTst-oA4qnrUE3D7y1N7-y8Hm1ZLtdx7gvQ04_Zjc210Bc5TIsXx5BQrOtgIG0nWRnmZlEVcAxLfIgGmhSyGDc5N5tQ0br3rzvkmaonllwrvSESbSHqLUUKgh3b6TG5e1GdLpj8O0yazco)
