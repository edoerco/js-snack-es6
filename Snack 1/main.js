// Creare un array di oggetti
let bici = [
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    {
        nome: 'graziella',
        peso: 10
    },
    {
        nome: 'mortadella',
        peso: 8
    },
    { 
        nome: 'frittella',
        peso: 12
    }
];

// console.log(bici);

let biciLeggera = bici[0];
for (let i = 0; i < bici.length - 1; i++) {
    
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
};
// console.log(biciLeggera);

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let {nome, peso} = biciLeggera;
console.log(
    `nome bicicletta: ${nome}, peso bicicletta: ${peso}`
);

// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

let lightBike = () => {
    for (let i = 0; i < bici.length - 1; i++) {
        if (bici[i].peso < biciLeggera.peso) {
            biciLeggera = bici[i];
        }
    }
    return biciLeggera;
};

console.log(lightBike());