texte a ajouter dans le HTML

PM2.5 : particules en suspensions inférieur à 2.5 micromètres.
PM10 : particules en suspensions inférieur à 2.5 micromètres.
Les particules fines pénètrent en profondeur dans les poumonpulmonairess et peuvent être à l’origine d’inflammations et de l’aggravation de l’état de santé des personnes atteintes de maladies cardiaques et pulmonaires.

NO2 : Dioxyde d'azote générées par les activités humaines. De par sa très petite taille ce gaz va pénétrer dans les plus fines ramifications respiratoires et se tranforme en acide nitrique dans l'atmosphère acidifiant les précipitaitons.

Ozone: Se forme à partir des transformations chimiques des oxydes d’azote (NOx), des composés organiques volatils (COV) dont le méthane et le monoxyde de carbone. Sa formation dépendant des conditions métérologiques et est surveillé pour ses effets néfastes sur les écosystèmes, en particulier les forêts et les cultures.

<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Échelle de couleurs</title>
    <style>
        /* Styles pour les différentes tranches */
        .tranche0_50 {
            background-color: #ff0000; /* Rouge */
        }
        .tranche50_100 {
            background-color: #ffa500; /* Orange */
        }
        .tranche100_150 {
            background-color: #ffff00; /* Jaune */
        }
        .tranche150_200 {
            background-color: #008000; /* Vert */
        }
        .echelle {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .tranche {
            width: 25%;
            height: 20px;
        }
    </style>
</head>
<body>
    <div class="echelle">
        <!-- Tranche de 0 à 50 -->
        <div class="tranche tranche0_50"></div>
        <!-- Tranche de 50 à 100 -->
        <div class="tranche tranche50_100"></div>
        <!-- Tranche de 100 à 150 -->
        <div class="tranche tranche100_150"></div>
        <!-- Tranche de 150 à 200 -->
        <div class="tranche tranche150_200"></div>
    </div>
</body>
</html>
