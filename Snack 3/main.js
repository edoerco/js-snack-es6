// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

let array = [1,2,3,4,5,6,7,8,9,10];
let a;
let b;

do {
    a = random(1, 10);
    b = random(1, 10);
} while (a >= b);

console.log(array);
console.log(a, b);



// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// let newArray = array.filter((element, i) => {
//     if (i >= a && i < b-1) {
//         return true;
//     }
//     return false;
// });

// console.log(newArray);

let newArray = [];

array.forEach((element, i) => {
    if (i >= a && i < b-1) {
        newArray.push(element);
    }
});
console.log(newArray);



// funzioni
function random(min, max) {
    return Math.floor(Math.random() * max) + min;
};