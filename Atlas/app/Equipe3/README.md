<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ajouter un bouton avec JavaScript</title>
</head>
<body>

<!-- Div pour contenir le bouton -->
<div id="boutonContainer"></div>

<script>
// Création du bouton
var bouton = document.createElement("button");
bouton.innerHTML = "Cliquez ici"; // Texte du bouton

// Ajout d'un gestionnaire d'événements (optionnel)
bouton.addEventListener("click", function() {
  alert("Bouton cliqué !");
});

// Ajout du bouton au conteneur
document.getElementById("boutonContainer").appendChild(bouton);
</script>

</body>
</html>
