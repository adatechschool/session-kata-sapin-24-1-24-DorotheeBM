// Détails de l’étape 1
// 1.1 Une ligne d’étoiles
// Commençons par écrire une fonction afficherEtoiles(n) qui affiche une ligne de * en fonction du paramètre n

function afficherEtoiles(n) { // fonction pour afficher les étoiles
    let etoiles = '*' // création de la première étoile
    for (let index = 1; index < n; index++) { // pour chacune des n étoiles et initialisé à 1 car j'ai déjà créé une étoile au dessus
        etoiles += '*' //pour ajouter les étoiles sur une ligne
    }
    console.log(etoiles) //console log pour faire apparaitre les étoiles
}

afficherEtoiles(2)
afficherEtoiles(5)

// 1.2 Carré d’étoiles
// Nous allons maintenant définir une nouvelle fonction afficherRectangle(hauteur, largeur)

function afficherRectangle(hauteur, largeur) {
    for (let index = 0; index < hauteur; index++){// pour chaque "étage" de la hauteur
        afficherEtoiles(largeur)// appeler afficherEtoiles
  }
}
  afficherRectangle(5, 5)
