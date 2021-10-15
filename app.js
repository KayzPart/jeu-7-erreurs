const container = document.querySelector('.main');
console.log(container)
const original = document.getElementById('original');
console.log(original)
const checkErreur = document.getElementById('check-erreur');
console.log(checkErreur)



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

imgErrOne.addEventListener('click', function (){
    imgErrOne.style.opacity = 1;
})

// Erreur lampe-chien
var imgErrTwo = document.createElement('img');
imgErrTwo.src = "./Ressources/lampe-rouge.gif";
imgErrTwo.alt = "lampe-rouge";
imgErrTwo.id = "erreur-lampe";
checkErreur.appendChild(imgErrTwo);

imgErrTwo.addEventListener('click', function (){
    imgErrTwo.style.opacity = 1;
})

 // Erreur livre
var imgErrThree = document.createElement('img');
imgErrThree.src = "./Ressources/livre.gif";
imgErrThree.alt = "livre";
imgErrThree.id = "erreur-livre";
checkErreur.appendChild(imgErrThree);

imgErrThree.addEventListener('click', function (){
    imgErrThree.style.opacity = 1;
})

// Erreur Obj Etagère
var imgErrFour = document.createElement('img');
imgErrFour.src = "./Ressources/objet-etagere.gif";
imgErrFour.alt = "erreur-objet-etagere";
imgErrFour.id = "objet-etagere";
checkErreur.appendChild(imgErrFour);

imgErrFour.addEventListener('click', function (){
    imgErrFour.style.opacity = 1;
})

// Erreur P-mur
var imgErrFive = document.createElement('img');
imgErrFive.src = "./Ressources/point-mur.gif";
imgErrFive.alt = "erreur-point-mur";
imgErrFive.id = "point-mur";
checkErreur.appendChild(imgErrFive);

imgErrFive.addEventListener('click', function (){
    imgErrFive.style.opacity = 1;
})

// Erreur sol
var imgErrSix = document.createElement('img');
imgErrSix.src = "./Ressources/sol.gif";
imgErrSix.alt = "erreur-sol";
imgErrSix.id = "sol";
checkErreur.appendChild(imgErrSix);

imgErrSix.addEventListener('click', function (){
    imgErrSix.style.opacity = 1;
})

// Erreur statue 
var imgErrSeven = document.createElement('img');
imgErrSeven.src = "./Ressources/statue.gif";
imgErrSeven.alt = "erreur-statue";
imgErrSeven.id = "statue";
checkErreur.appendChild(imgErrSeven);

imgErrSeven.addEventListener('click', function (){
    imgErrSeven.style.opacity = 1;
})
