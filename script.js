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

//   1.3 Triangle d’étoiles
//   Il semblerait donc que nous pouvons nous inspirer du comportement de notre précédente fonction pour en définir une nouvelle afficherTriangleDroite(n)
  
//   ℹ️ ’Droite’ parce que ce triangle servira à la partie droite du sapin

function afficherTriangleDroite(n) {
    for (let index = 1; index <= n; index++){// En s'inspirant de la fonction afficherRectangle(),
        afficherEtoiles(index)// comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
  }
}
  afficherTriangleDroite(5)

// 1.4 Seconde moitié et espaces
// Nous pouvons maintenant faire la seconde moitié de la pointe du sapin en faisant le symétrique !

function afficherTriangleGauche(n) {
    for (let index = 1; index <= n; index++) {
        let ligne = ''
        // Ajouter des espaces
        for (let espace = 1; espace <= n - index; espace++) {
            ligne += ' '
        }
        // Ajouter les étoiles
       for (let etoile = 1; etoile <= index; etoile++) {
        ligne += '*';
    }
        console.log(ligne)
} 
}
  afficherTriangleGauche(5)

// 1.5 Assemblage et décorations
// Dernière étape, nous allons combiner le travail effectué sur afficherTriangleGauche() & afficherTriangleDroite() pour réaliser une nouvelle fonction afficherPointeSapin(), en ajoutant le tronc | et l’étoile + au milieu !

function afficherPointeSapin(n) {
    // Première ligne avec l'étoile
    let espaceMilieu = '';
    for (let i = 0; i < n; i++) {
        espaceMilieu += ' ';
    }
    console.log(espaceMilieu + '+');

    // Triangle gauche et droit avec tronc au centre
    for (let index = 1; index <= n; index++) {
        let ligne = '';

        // Ajouter des espaces à gauche du triangle gauche
        for (let espace = 1; espace <= n - index; espace++) {
            ligne += ' ';
        }

        // Ajouter les étoiles du triangle gauche
        for (let etoile = 1; etoile <= index; etoile++) {
            ligne += '*';
        }

        // Ajouter le tronc
        ligne += ' | ';

        // Ajouter les étoiles du triangle droit
        for (let etoile = 1; etoile <= index; etoile++) {
            ligne += '*';
        }

        // Afficher la ligne complète
        console.log(ligne);
    }
}
afficherPointeSapin(3)

// Etape 2.1 : Début d'éffichage d'un sapin à étages
// function afficherSapin() {
//     afficherPointeSapin(1)
//     afficherPointeSapin(2)
//     afficherPointeSapin(3)
//   }
  
//   afficherSapin(3, 3)

// fonction qui pour l'instant ne donne qu'un sapin aux étages identiques
function afficherEtage(n) {
   // Triangle gauche et droit avec tronc au centre
   for (let index = 1; index <= n; index++) {
    let ligne = '';

    // Ajouter des espaces à gauche du triangle gauche
    for (let espace = 1; espace <= n - index; espace++) {
        ligne += ' ';
    }

    // Ajouter les étoiles du triangle gauche
    for (let etoile = 1; etoile <= index; etoile++) {
        ligne += '*';
    }

    // Ajouter le tronc
    ligne += ' | ';

    // Ajouter les étoiles du triangle droit
    for (let etoile = 1; etoile <= index; etoile++) {
        ligne += '*';
    }

    // Afficher la ligne complète
    console.log(ligne);
}
 }
 
 afficherEtage(3, 0) // les 3 premières lignes
 afficherEtage(3, 1) // affiche à partir de la deuxième ligne, et continue sur 3 lignes
 afficherEtage(3, 2) // affiche à partie de la troisième lige, et continue sur 3 lignes
