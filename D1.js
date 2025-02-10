/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Abbiamo diversi datatype tra questi ci sono:String,number,booleani,undefined,null
/* 1)String= String questo datatype si differenzia dagli altri perchè viene delimitato dalle virgolette ex "Ottaviano" in questo caso possiamo immaginare la nostra variabile come una scatola
 contenente al suo interno un fogliettino con scritto Ottaviano ecco, la variabile è la scatola mentre il valore è quello dato da quello che c'è scritto  all'interno delle  "" in questo caso
Ottaviano ma puo essere anche un valore numerico come 100 ecc ecc*/

/*2)Di tipo Number ecco questo è simile al datatype String solo che come valori accetta solo numeri es 10,100,1000 ecc ecc e non è delimitato dalle "" che caraterizzano le stringe
 */
/* 3) Di tipo booleani che sono dei valori che tu assegni ad una variabile, i valori accettati in questo caso sono due e sono true/false
 */
/* 4) Di tipo Undefined, undefined sta per `non definito` ovvero quando non assegnamo un valore ad una variabile ma la lasciamo in stand-by finche non le assegniamo un valore
 */
/* 5) Di tipo Null che tradotto dal inglese sta per `nulla` è quando ad una variabile diamo il valore di nulla prova ad immaginare sempre la variabile come una scatola
dentro la quale non ci metto nulla,È simile al undefined ma il valore del undefined puo essere modificato come menzionato sopra

/* ESERCIZIO 2
Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Ottaviano";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number12 = 12;
let number20 = 20;
let number32 = number12 + number20;
console.log(number32);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
  */

/* SCRIVI QUI LA TUA RISPOSTA */
myName = `Radulescu`;
console.log(myName);
const MyName = `Ottaviano`;
MyName = `Radulescu`;
console.log(MyName);

/* in questo caso dove abbiamo provato a cambiare il nome alla costante MyName nella console ci darà un errore in quanto abbiamo cambiato il valore di una costante la quale
valore non si può cambiare appunto da come ci dice il nome stesso della variabile è una costante ovvero il suo valore è uno solo ed assoluto 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x); /* il risultato riportato nella consola sarà -8 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = `john`;
let name2 = `John`;
console.log(  name1 === name2); /* risultato nella consola sarà falso in quanto le due stringe sono diverse tra di loro perchè hanno la j minuscola e l`altra maiuscola*/
console.log(  name1 !== name2); /* qui abbiamo usato l`operatore not `!` per invertire il risultato reale della verifica d`ugualianza*/
console.log(name1.toLowerCase === name2.toLowerCase) /* qui abbiamo verificato la loro ugualianza se entrambe le variabbili avessero avuto lo stesso valore di john con le minuscole*/
