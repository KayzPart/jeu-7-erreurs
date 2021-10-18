const container = document.querySelector('.main');
console.log(container)
const original = document.getElementById('original');
console.log(original)
const checkErreur = document.getElementById('check-erreur');
console.log(checkErreur)
const rejouerBtn = document.getElementById('rejouer');
console.log(rejouerBtn);
const jeu = document.getElementById('jeu');
console.log(jeu);
const niveauxJeu = document.querySelector('.niveaux-jeu');
console.log(niveauxJeu);
const facile = document.querySelector('.jeuFacile');
console.log(facile);
const moyen = document.querySelector('.jeuMoyen');
console.log(moyen);
const difficile = document.querySelector('.jeuDifficile');
console.log(difficile);

// Niveau facile 
facile.addEventListener('click', function(){
    var imgOriginal = document.createElement('img');
    imgOriginal.src = "./Ressources/salon-original.gif" ;
    imgOriginal.alt = "image-original-salon" ;
    original.appendChild(imgOriginal);

    var imgErreur = document.createElement('img');
    imgErreur.src = "./Ressources/salon-erreur.gif";
    imgErreur.alt = "salon-chercher-les-erreurs";
    checkErreur.appendChild(imgErreur);
    
    // Erreur chien
        var imgErrOne = document.createElement('img');
        imgErrOne.src = "./Ressources/chien.gif";
        imgErrOne.alt = "chien";
        imgErrOne.id = "erreur-chien";
        checkErreur.appendChild(imgErrOne);

    // Erreur lampe-chien
        var imgErrTwo = document.createElement('img');
        imgErrTwo.src = "./Ressources/lampe-rouge.gif";
        imgErrTwo.alt = "lampe-rouge";
        imgErrTwo.id = "erreur-lampe";
        checkErreur.appendChild(imgErrTwo);

    // Erreur livre
        var imgErrThree = document.createElement('img');
        imgErrThree.src = "./Ressources/livre.gif";
        imgErrThree.alt = "livre";
        imgErrThree.id = "erreur-livre";
        checkErreur.appendChild(imgErrThree);

    // Erreur Obj Etagère
        var imgErrFour = document.createElement('img');
        imgErrFour.src = "./Ressources/objet-etagere.gif";
        imgErrFour.alt = "erreur-objet-etagere";
        imgErrFour.id = "objet-etagere";
        checkErreur.appendChild(imgErrFour);

    // Erreur P-mur
        var imgErrFive = document.createElement('img');
        imgErrFive.src = "./Ressources/point-mur.gif";
        imgErrFive.alt = "erreur-point-mur";
        imgErrFive.id = "point-mur";
        checkErreur.appendChild(imgErrFive);

    // Erreur sol
        var imgErrSix = document.createElement('img');
        imgErrSix.src = "./Ressources/sol.gif";
        imgErrSix.alt = "erreur-sol";
        imgErrSix.id = "sol";
        checkErreur.appendChild(imgErrSix);

    // Erreur statue 
        var imgErrSeven = document.createElement('img');
        imgErrSeven.src = "./Ressources/statue.gif";
        imgErrSeven.alt = "erreur-statue";
        imgErrSeven.id = "statue";
        checkErreur.appendChild(imgErrSeven);

        var tabErreur = [imgErrOne,imgErrTwo,imgErrThree,imgErrFour,imgErrFive,imgErrSix,imgErrSeven];
        tabErreur.forEach(function(element){
            element.addEventListener('click', function (){
                element.style.opacity = 1;
            });
        })
    facile.disabled = true;   
})





// Bouton rejouer 
rejouerBtn.addEventListener('click', () => {
    document.location.reload(true);
})
