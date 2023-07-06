// APPROCCIO DRY - Don't Repeat Yourself

// FUNZIONI

// una funzione è un blocco di codice riutilizzabile
// PUO' ricevere dei dati in input (parametri o argomenti)
// PUO' tornare un risultato (valore di ritorno)

// definiamo una funzione semplice SENZA INPUT e SENZA OUTPUT
function bark() {
  // all'interno del body o scope della funzione vado a definire le operazioni da eseguire in sequenza dall'alto verso il basso
  console.log("BAU");
}

// in console in questo momento non c'è NULLA!
// DICHIARARE (o definire) una funzione non significa ESEGUIRLA...!

// utilizzare le parentesi dopo l'identificativo della funzione si definisce INVOCAZIONE o ESECUZIONE della funzione
bark();

// VALORI DI RITORNO - Quando la funzione ha un OUTPUT (facoltativo)
function sum() {
  // la variabile result è interna e sarà necessario ritornarne il valore per averne accesso
  let result = 10 + 1;
  //   console.log("result", result);
  return result;
}

// console.log(result) // ❌ result non esiste nel contesto esterno alla funzione
console.log("LOG ESTERNO", sum());

const x = sum(); // eseguire una funzione fruttifera equivale a ricevere il suo valore di ritorno
const y = bark();

// il risultato tornato dall'eseguire sum(), lo possiamo combinare con altre operazioni
const z = x + 10;
const j = x + " !";

console.log(x, y, z, j);

// Esempio di VOID function (non fruttifera)
// la variabile è esterna e sarà sempre leggibile da qualsiasi punto successivo del nostro file
let number = 0;

function sum2() {
  // side effect - modifica qualcosa nel contesto esterno, e NON RITORNA NULLA
  number += 2 + 6; // number = number + (2+6)
}

console.log(number); // 0
sum2();
console.log(number); // 8
sum2();
console.log(number); // 16

const animals = ["Parrot", "Mouse", "Dog", "Cat", "Goldfish", "Horse", "Bunny"];

function replaceElement() {
  //   const copiedArray = animals.concat();
  const copiedArray = animals.slice(); // nuovo array in memoria identico ad animals (nel primo livello)
  const newElement = "Dragon";
  let positionIndex = null;

  for (let i = 0; i < copiedArray.length; i++) {
    const stringToVerify = copiedArray[i];
    if (stringToVerify === "Bunny") {
      // se siamo qua l'indice i è quello che cerchiamo!
      positionIndex = i;
    }
  }

  copiedArray.splice(positionIndex, 1, newElement);

  return copiedArray;
  console.log("non mi vedrete mai HAHAHAHAHA");
}

const replacedAnimals = replaceElement();

console.log("REPLACED ARR", replacedAnimals);

function crazySum() {
  const randNum = Math.floor(Math.random() * 50);
  const total = randNum + 20;
  return total;
}

// Quando una funzione riceve dei valori in ingresso: INPUT
// gli input nella definizione sono chiamati PARAMETRI

// nella DEFINIZIONE di funzione io stabilisco la POSSIBILITA' di ricevere valori in ingresso
// rappresentati da dei segnaposto che assumeranno i valori passati come ARGOMENTO al momento dell'esecuzione della funzione
function smartSum(n1, n2) {
  const total = n1 + n2;
  return total;
}

console.log(crazySum());

// gli input nella esecuzione della funzione sono chiamati ARGOMENTI della funzione
console.log(smartSum(5, 8));
console.log(smartSum(10, 5));
console.log(smartSum(1000, 1));

// funzione statica, non accetta dati in input, produrrà sempre lo stesso risultato (la stessa stringa)
function sayHi() {
  console.log("Ciao! Ragazzi benvenuti in EPICODE!");
}

sayHi("Ciao"); // questa stringa "Ciao" verrà ignorata in quanto la funzione NON si aspetta parametri (dati in ingresso)

// avendo definito un PARAMETRO, ci possiamo aspettare dati differenti per ogni volta che la funzione si eseguirà
function sayHiTo(name, specialChar) {
  console.log("Ciao! " + name + " benvenuto in EPICODE" + specialChar);
}

sayHiTo("Alessia", "!");
sayHiTo("Massimo", "*");

const arrOfNames = ["Alessia", "Emanuele", "Vittorio", "Lorenzo"];

for (let i = 0; i < arrOfNames.length; i++) {
  sayHiTo(arrOfNames[i], "!!!");
}

// il terzo parametro ha un valore di default nel caso in cui non gli venga fornito al momento dell'esecuzione della funzione
function replaceElementCustom(arr, positionIndex, newElement = "Dragon") {
  //   const copiedArray = animals.concat();
  const copiedArray = arr.slice(); // nuovo array in memoria identico ad animals (nel primo livello)
  //   const newElement = "Dragon";
  //   let positionIndex = null;

  // for (let i = 0; i < copiedArray.length; i++) {
  //   const stringToVerify = copiedArray[i];
  //   if (stringToVerify === "Bunny") {
  //     // se siamo qua l'indice i è quello che cerchiamo!
  //     positionIndex = i;
  //   }
  // }

  copiedArray.splice(positionIndex, 1, newElement);

  return copiedArray;
}

const newAnimals = replaceElementCustom(animals, 3); // "Dragon" è il valore di default del terzo argomento mancante
const newAnimals2 = replaceElementCustom(["Cavallo", "Mucca", "Topo", "Colibrì"], 2, "Mickey");

console.log(newAnimals);
console.log(newAnimals2);

test();
function test() {
  console.log("ciao");
}

const test2 = function () {
  console.log("ariciao");
};
test2();
