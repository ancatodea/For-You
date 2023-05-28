// INTERVIU: Problema FizzBuzz
// Se da un numar.
// Daca numarul e divizibil cu 3 afiseaza "Fizz".
// Daca numarul e divizibil cu 5 afiseaza "Buzz".
// Daca numarul e divizibil si cu 3 si cu 5 afiseaza "FizzBuzz".
// Altfel afiseaza numarul.


// Esential: Conditia cea mai stricta este pusa prima! Altfel, una mai putin stricta ar fi evaluata la true si nu s-ar mai ajunge niciodata la conditia stricta.

// var numar = prompt('Introduceti un numar');

function checkFizzBuzz(nr) {
  if (nr % 15 == 0 ) {
      console.log('FizzBuzz');
  } else if (nr % 5 == 0) {
      console.log('Buzzz' );
   } else if (nr % 3 == 0) {
     console.log('Fizz');
   } else {
     console.log(nr);
   }
}

// var checkVar = checkFizzBuzz(numar);

// SWITCH:

// // Se da o variabila care reprezinta o codificare pentru rezultatul unui meci de fotbal.
// Daca are valoarea '1', gazdele au castigat.
// Daca are valoarea 'X', este egalitate.
// Daca are valoare '2', oaspetii au castigat.
// Orice alta valoare este invalida.
// a. Folosind switch, afiseaza mesajele corepunzatoare.
// b. Acelasi lucru, facut cu if


var rezultatMeci = 'x';

function winner(rez) {

  switch(rez) {
    case '1' :
      console.log('Gazdele au castigat');
      break;
    case 'x' :
      console.log('Egalitate');
      break;
    case '2' :
      console.log('Oaspetii au castigat');
      break;
    default :
    console.log('Valoare invalida');
  }
}

// var winnerResult = winner(rezultatMeci);

var rezMeci = '1';


function winner2(rez) {
  if (rez == '1') {
    console.log('Gazdele au castigat');
  } else if (rez == 'x') {
    console.log('Egalitate');
  }else if (rez == 'X') {
    console.log('Egalitate');
  }else if (rez == '2') {
    console.log('Oaspetii au castigat');
  }else {
    console.log('Valoare invalida');
  }
}

// var checkWinner = winner2(rezMeci);

// TERNARY:

// Se da o variabila care reprezinta varsta unui utilizator. 
// Verificati (in functie de varsta) ce bautura poate comanda un utilizator - alcoolica sau nu

var varsta = 20;

function checkAge (age) {

  age >= 18 ? console.log('Puteti comanda si bauturi alcolice') : console.log('Nu aveti voie sa consumati alcool');
}

// var rezultatVarsta = checkAge(varsta);


// La un hotel pentru animale:

// Implementati urmatoarele functii:

// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare

var numberOfDogs = 12;
var numerOfCats = 5;
var numberOfEmployees = 3;
var numberOfPets = numberOfDogs + numerOfCats;


function capacityDogs (dogs) {
  if (dogs >= 15 ) {
    console.log('S-a atins capacitatea maxima pt catei');
  } else if (dogs >= 0) {
    var calcCapacity = (15 - dogs);
    console.log(calcCapacity);
  }
}

var resultCapacityDogs = capacityDogs(numberOfDogs);

// // b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat

function maxCapacity (pets) {
  var allPets = 30 - pets;

  if (pets  >= 30  ) {
    console.log ('We have full house, right now there are no free spots');
  } else {
    console.log('we have ', allPets, 'spots left');
  }
}

var checkCapacity = maxCapacity(numberOfPets);

// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.

function availableToys (dogs, cats) {
  var toys = (5 *  dogs) + (3 * cats);
  console.log('Right now we need ', toys, 'toys');
}

var checkToys = availableToys(numberOfDogs, numerOfCats);

// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare

function careWell (pets, employees) {
  if ((pets < 20) || (employees > 5)) {
    console.log('All pets get the proper care')
  } else {
    console.log('We could use an extra pair of hands')
  }
}

var checkCare = careWell(numberOfPets, numberOfEmployees);

// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.

function visitBoss (pets, employees) {
  var ownerHere = true;
  if ((ownerHere == true) && (pets % 7 == 0)) {
    var bonusEmployees = 100 * employees;
    console.log('The total bonus is', bonusEmployees);
  } else {
    console.log('There is no match for you to get bonus today');
  }
}

var checkBonus = visitBoss(numberOfPets, numberOfEmployees);

// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI" 
// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"

function oddNumberPets (dogs, cats) {
  if ((dogs % 2 == 1) && (cats % 2 == 1)){
    console.log('Imparitate Si');
  } else if ((dogs % 2 == 1) || (cats % 2 == 1)){
    console.log('Imparitate Sau');
  }
}

var checkOddNumberPets = oddNumberPets(numberOfDogs, numerOfCats);

