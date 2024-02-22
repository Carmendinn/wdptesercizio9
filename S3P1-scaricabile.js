/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve 
 ritornare la loro somma moltiplicata per 3.
*/

/*function crazySum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
} console.log(crazySum(3, 3)); */


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e 
 ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*function boundary(n) {
    (n >= 20 && n <= 100 || n === 400); {
        return true;
    }
} console.log(boundary(25));*/



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita
  (es.: EPICODE => EDOCIPE).
*/

/*function reverseString(stringa) {
    return stringa.split("").reverse("").join("");
}
console.log(reverseString("CARMEN"));*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna 
 rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*function upperFirst(stringa) {
    let words = stringa.split(" ");
    let finalString = [];
    for (let i = 0; i < words.lenght; i++) {
        let maiuscola = words[i].charAt(0);
        let upCase = maiuscola.toUpperCase();
        let fraseMinuscola = words[i].slice(1);
        let final = upCase + fraseMinuscola;
        finalString.push(final);
    }
}
console.log(finalString.join(""))

upperFirst("Hi, guys!!");*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un
 array contenente n numeri random contenuti tra 0 e 10.
*/

/*function giveMeRandom(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 11))
    } return array;
}

console.log(giveMeRandom(9));*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*function area(l1, l2) {
    return (l1 * l2);
}
let areaReattangolo = area(11, 12);
console.log(areaReattangolo)
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*function crazyDiff (n) {
    let differenzaAssoluta = Math.abs (n - 19);
    if (differenzaAssoluta > 19) {
        return differenzaAssoluta *3;
    } else {
        return differenzaAssoluta;
    };
}
console.log (crazyDiff(4));
*/


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*function codify(stringa) {
     if (stringa.startsWith("code")) {
        return stringa;
     } else {
        return ("code " + stringa);
     }
};
console.log(codify("Hola"))
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*function check3and7(n) {
    if (n >0 && (n % 3 === 0 || n % 5 === 0)) {
        return true
    };
     
} console.log(check3and7(170));
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/*
function cutString(string) {
    if (string.length >= 0) {
        return string.slice(1, -1);
    }
    else {
        return "";
    }
}
console.log (cutString("Carmen"));
*/
