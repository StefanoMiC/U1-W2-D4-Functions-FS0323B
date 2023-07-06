const myString = "Fun Fun Function";
console.log("STRING", myString);

// myString.splice(3, 1) // non esiste il metodo splice su una stringa (vedi documentazione per metodi di stringhe e array)

// per poter usare un qualsiasi metodo degli array su una stringa dovremmo convertirla in un vero array di caratteri
// per farlo arriva in soccorso un metodo utilissimo: .split()

// split vuole sapere attorno a quale carattere cominciare a segmentare la stringa
// nel nostro caso se esplicitiamo di voler separare le parole sugli spazi faremo:

const words = myString.split(" "); // inserisco il carattere di spazio come argomento, ottengo un array di singole parole
console.log("WORDS:", words);

// se invece voglio mantenere tutti i caratteri ma trasformare la stringa in un vero array farò:

const characters = myString.split(""); // mi crea un array con tutti i caratteri (spazi inclusi) separati da virgole
console.log("CHARACTERS:", characters);

for (let i = 0; i < characters.length; i++) {
  const currentChar = characters[i];
  if (currentChar === " ") {
    characters.splice(i, 1); // ATTENZIONE, questo metodo muta l'array originario
    // potrebbe valer la pena clonare l'array di origine e utilizzare splice sul clone, come visto a lezione
    // in alternativa potete creare un NUOVO array vuoto che riempirete solo dei caratteri diversi da " "
  }
}
// a questo punto dopo il ciclo for, l'array di lettere "characters" non ha più gli spazi
// possiamo decidere di ricomporre le lettere in una stringa senza spazi

const myNewString = characters.join("");
console.log("NEW STRING", myNewString);
