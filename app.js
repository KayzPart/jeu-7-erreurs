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

// Niveau moyen
moyen.addEventListener('click', function(){
    imgOriginal = document.createElement('img');
    imgOriginal.src = "./Ressources/cuisine.jpg" ;
    imgOriginal.alt = "image-original-cuisine" ;
    original.appendChild(imgOriginal);

    imgErreur = document.createElement('img');
    imgErreur.src = "./Ressources/cuisineErreur.gif";
    imgErreur.alt = "cuisine-chercher-les-erreurs";
    checkErreur.appendChild(imgErreur);

    // Erreur bouton trancheuse
    var imgErrOne = document.createElement('img');
        imgErrOne.src = "./Ressources/bouton-trancheuse.png";
        imgErrOne.alt = "erreur-bouton-trancheuse";
        imgErrOne.id = "bouton-trancheuse";
        checkErreur.appendChild(imgErrOne);

    // Erreur couleur assiette
        var imgErrTwo = document.createElement('img');
        imgErrTwo.src = "./Ressources/couleur-assiette.png";
        imgErrTwo.alt = "erreur-couleur-assiette";
        imgErrTwo.id = "couleur-assiette";
        checkErreur.appendChild(imgErrTwo);

    // Erreur fissure
        var imgErrThree = document.createElement('img');
        imgErrThree.src = "./Ressources/fissure.png";
        imgErrThree.alt = "erreur-fissure";
        imgErrThree.id = "fissure";
        checkErreur.appendChild(imgErrThree);

    // Erreur fleur-plat
        var imgErrFour = document.createElement('img');
        imgErrFour.src = "./Ressources/fleur-plat.png";
        imgErrFour.alt = "erreur-fleur-plat";
        imgErrFour.id = "fleur-plat";
        checkErreur.appendChild(imgErrFour);

    // Erreur fleur serviette
        var imgErrFive = document.createElement('img');
        imgErrFive.src = "./Ressources/fleur-serviette.png";
        imgErrFive.alt = "erreur-fleur-serviette";
        imgErrFive.id = "fleur-serviette";
        checkErreur.appendChild(imgErrFive);

    // Erreur manche cuivre
        var imgErrSix = document.createElement('img');
        imgErrSix.src = "./Ressources/manche-cuivre.png";
        imgErrSix.alt = "erreur-manche-cuivre";
        imgErrSix.id = "manche-cuivre";
        checkErreur.appendChild(imgErrSix);

    // Erreur mosaïque
        var imgErrSeven = document.createElement('img');
        imgErrSeven.src = "./Ressources/mosaîque.png";
        imgErrSeven.alt = "erreur-mosaique";
        imgErrSeven.id = "mosaique";
        checkErreur.appendChild(imgErrSeven);

    // Erreur plaque-trancheuse
        var imgErrHeight = document.createElement('img')
        imgErrHeight.src = "./Ressources/plaque-trancheuse.png";
        imgErrHeight.alt = "erreur-plaque-trancheuse";
        imgErrHeight.id = "plaque-trancheuse";
        checkErreur.appendChild(imgErrHeight);

    //  Erreur poignée porte
        var imgErrNine = document.createElement('img')
        imgErrNine.src = "./Ressources/poignée-porte.png";
        imgErrNine.alt = "erreur-poignée-porte";
        imgErrNine.id = "poignée-porte";
        checkErreur.appendChild(imgErrNine);

    // Erreur pomme
        var imgErrTen = document.createElement('img')
        imgErrTen.src = "./Ressources/pomme.png";
        imgErrTen.alt = "erreur-pomme";
        imgErrTen.id = "pomme";
        checkErreur.appendChild(imgErrTen);

    // Erreur pot-couleur
        var imgErrEleven = document.createElement('img')
        imgErrEleven.src = "./Ressources/pot-couleur.png";
        imgErrEleven.alt = "erreur-pot-couleur";
        imgErrEleven.id = "pot-couleur";
        checkErreur.appendChild(imgErrEleven);

    // Erreur prise
        var imgErrTwelve = document.createElement('img')
        imgErrTwelve.src = "./Ressources/prise.png";
        imgErrTwelve.alt = "erreur-prise";
        imgErrTwelve.id = "prise";
        checkErreur.appendChild(imgErrTwelve);

    tabErreur = [imgErrOne,imgErrTwo,imgErrThree,imgErrFour,imgErrFive,imgErrSix,imgErrSeven,imgErrHeight,imgErrNine,imgErrTen,imgErrEleven,imgErrTwelve];
    tabErreur.forEach(function(element){
        element.addEventListener('click', function (){
            element.style.opacity = 1;
        });
    })
    moyen.disabled = true;
})

// Niveau Difficile 
difficile.addEventListener('click', function(){
    imgOriginal = document.createElement('img');
    imgOriginal.src = "./Ressources/times-square.jpg" ;
    imgOriginal.alt = "times-square-original" ;
    original.appendChild(imgOriginal);

    imgErreur = document.createElement('img');
    imgErreur.src = "./Ressources/times-square-erreur.png";
    imgErreur.alt = "times-square-chercher-les-erreurs";
    checkErreur.appendChild(imgErreur);

    // Erreur bouton aiguille
    var imgErrOne = document.createElement('img');
        imgErrOne.src = "./Ressources/aiguille.png";
        imgErrOne.alt = "erreur-aiguille";
        imgErrOne.id = "aiguille";
        checkErreur.appendChild(imgErrOne);

    // Erreur couleur colombe
        var imgErrTwo = document.createElement('img');
        imgErrTwo.src = "./Ressources/colombe.png";
        imgErrTwo.alt = "erreur-colombe";
        imgErrTwo.id = "colombe";
        checkErreur.appendChild(imgErrTwo);

    // Erreur D
        var imgErrThree = document.createElement('img');
        imgErrThree.src = "./Ressources/d.png";
        imgErrThree.alt = "erreur-d";
        imgErrThree.id = "d";
        checkErreur.appendChild(imgErrThree);

    // Erreur drapeau
        var imgErrFour = document.createElement('img');
        imgErrFour.src = "./Ressources/drapeau.png";
        imgErrFour.alt = "erreur-drapeau";
        imgErrFour.id = "drapeau";
        checkErreur.appendChild(imgErrFour);

    // Erreur femme
        var imgErrFive = document.createElement('img');
        imgErrFive.src = "./Ressources/femme.png";
        imgErrFive.alt = "erreur-femme";
        imgErrFive.id = "femme";
        checkErreur.appendChild(imgErrFive);

    // Erreur fenetre-b
        var imgErrSix = document.createElement('img');
        imgErrSix.src = "./Ressources/fenetre-b.png";
        imgErrSix.alt = "erreur-fenetre-b";
        imgErrSix.id = "fenetre-b";
        checkErreur.appendChild(imgErrSix);

    // Erreur fenetre
        var imgErrSeven = document.createElement('img');
        imgErrSeven.src = "./Ressources/fenetre.png";
        imgErrSeven.alt = "erreur-fenetre";
        imgErrSeven.id = "fenetre";
        checkErreur.appendChild(imgErrSeven);

    // Erreur h-affiche
        var imgErrHeight = document.createElement('img')
        imgErrHeight.src = "./Ressources/h-affiche.png";
        imgErrHeight.alt = "erreur-h-affiche";
        imgErrHeight.id = "h-affiche";
        checkErreur.appendChild(imgErrHeight);

    //  Erreur h
        var imgErrNine = document.createElement('img')
        imgErrNine.src = "./Ressources/h.png";
        imgErrNine.alt = "erreur-h";
        imgErrNine.id = "h";
        checkErreur.appendChild(imgErrNine);

    // Erreur horloge-nok
        var imgErrTen = document.createElement('img')
        imgErrTen.src = "./Ressources/horloge-nok.png";
        imgErrTen.alt = "erreur-horloge-nok";
        imgErrTen.id = "horloge-nok";
        checkErreur.appendChild(imgErrTen);

    // Erreur horloge-ok
        var imgErrEleven = document.createElement('img')
        imgErrEleven.src = "./Ressources/horloge-ok.png";
        imgErrEleven.alt = "erreur-horloge-ok";
        imgErrEleven.id = "horloge-ok";
        checkErreur.appendChild(imgErrEleven);

    // Erreur lampadaire
        var imgErrTwelve = document.createElement('img')
        imgErrTwelve.src = "./Ressources/lampadaire.png";
        imgErrTwelve.alt = "erreur-lampadaire";
        imgErrTwelve.id = "lampadaire";
        checkErreur.appendChild(imgErrTwelve);

    // Erreur lumiere
        var imgErrThirteen = document.createElement('img')
        imgErrThirteen.src = "./Ressources/lumiere.png";
        imgErrThirteen.alt = "erreur-lumiere";
        imgErrThirteen.id = "lumiere";
        checkErreur.appendChild(imgErrThirteen);

    // Erreur nuage
        var imgErrFourteen = document.createElement('img')
        imgErrFourteen.src = "./Ressources/nuage.png";
        imgErrFourteen.alt = "erreur-nuage";
        imgErrFourteen.id = "nuage";
        checkErreur.appendChild(imgErrFourteen);

    // Erreur parabol
        var imgErrFifteen = document.createElement('img')
        imgErrFifteen.src = "./Ressources/parabol.png";
        imgErrFifteen.alt = "erreur-parabol";
        imgErrFifteen.id = "parabol";
        checkErreur.appendChild(imgErrFifteen);

    // Erreur phare
        var imgErrSixteen = document.createElement('img')
        imgErrSixteen.src = "./Ressources/phare.png";
        imgErrSixteen.alt = "erreur-phare";
        imgErrSixteen.id = "phare";
        checkErreur.appendChild(imgErrSixteen);

    // vago
        var imgErrSeventeen = document.createElement('img')
        imgErrSeventeen.src = "./Ressources/vago-1.png";
        imgErrSeventeen.alt = "erreur-vago-1";
        imgErrSeventeen.id = "vago-1";
        checkErreur.appendChild(imgErrSeventeen);

        var imgErrSeventeen = document.createElement('img')

    tabErreur = [imgErrOne,imgErrTwo,imgErrThree,imgErrFour,imgErrFive,imgErrSix,imgErrSeven,imgErrHeight,imgErrNine,imgErrTwelve,imgErrThirteen,imgErrFifteen,imgErrSixteen,imgErrSeventeen];
    tabErreur.forEach(function(element){
        element.addEventListener('click', function (){
            element.style.opacity = 1;
        });
        imgErrFourteen.addEventListener('click', function(){
            imgErrFourteen.style.opacity = 0;
        })
        imgErrTen.addEventListener('click', function(){
            imgErrTen.style.opacity = 0;
            imgErrEleven.style.opacity = 1;
        })
    })
    difficile.disabled = true;
})


// Bouton rejouer 
rejouerBtn.addEventListener('click', () => {
    document.location.reload(true);
})
