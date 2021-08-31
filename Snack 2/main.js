// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
let team = [
    {nome: 'inter', punti: 0, falli: 0},     //forza inter 
    {nome: 'roma', punti: 0, falli: 0},
    {nome: 'juve', punti: 0, falli: 0},
    {nome: 'lazio', punti: 0, falli: 0},
    {nome: 'milan', punti: 0, falli: 0},
];

console.log(team);

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
for (let key in team) {
    team[key].punti = random(10,50);
    team[key].falli = random(1,20);
};

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let squadre = [];
for (let i = 0; i < team.length; i++) {
    let {nome, falli} = team[i];
    squadre.push({nome, falli});
};

console.log(squadre);


// funzioni
function random(min, max) {
    return Math.floor(Math.random()* max) + min;
};