// varijabla je prostor u memoriji
// može biti različith tipova podataka
// u JS ES6

// ulaz podatka u program
// prompt uvijek nosi string
const ime = 'Tomislav'; // prompt('Unesi svoje ime');
// simuliram da je svaki puta  s pomoću prompt uneseno Boris
// a to radim da ne moram svaki puta unositi

console.log(typeof ime, ime);

console.log(`Dobar dan ${ime}!`);

const unosGodina = '2026'; // simuiram unos kroz prompt

// konverzija podatka
const godina = Number(unosGodina);

console.log(typeof godina,godina+1); // ovjde uveća za 1
console.log(typeof unosGodina, unosGodina+1); // ovdje se stringu 2026

const cijeliBroj = parseInt('7');
console.log(typeof cijeliBroj, cijeliBroj);

const decimalniBroj = parseFloat('3.14'); // za decimalni dio piše

console.log(typeof decimalniBroj, decimalniBroj); 

// logička vrijednost

const LogickaVrijednost = true; // ili false

console.log(typeof LogickaVrijednost, LogickaVrijednost);

// const se ne može mijenjati
// LogickaVrijednost = false;

// ne može se redeklarirati const
// const LogickaVrijednost=false;

// sljedeći način definiranja varijable - pravi način let

let broj = 7;
console.log(typeof broj, broj);
broj = 8;
console.log(typeof broj, broj);
// let može promijeniti tip podatka
broj = '7';
console.log(typeof broj, broj);

// ne meže se redeklarirati
//let broj = true;

// staro ne koristiti - što ne znači da ne postoji

var x = 8;
console.log(typeof x, x);
x='8';
console.log(typeof x, x);
var x = true; // može se redeklarirati
console.log(typeof x, x);

const velikiBroj = 64165459454n;
console.log(typeof velikiBroj, velikiBroj);

// ne mogu deklarirati konstantu bez vrijednosti
// const i;

let i;
console.log(typeof i, i);

i=7;
console.log(typeof i, i);

let o = null;
console.log(typeof o, o);
o = 8;
console.log(typeof o ,o);

// JSON - JavaScript Object Notation
o = {
    id: 1001,
    ime: 'Pero',
    prezime: 'Perić',
    znaProgramirati: false
};
console.log(typeof o, o);
console.table(o);

// Array, niz, polje
let niz = [2, 2, 3, 2, 2]; // ALTGR+F daje [
console.log(typeof niz, niz); // kaže da je object
console.table(niz);

const backend = [
    {
        id: 1,
        ime: 'Marina',
        prezime: 'Generacija',
        znaProgramirati: true
    },
    {
        id: 2,
        ime: 'Karlo',
        prezime: 'Perić',
        znaProgramirati: false
    },
    {
        id: 3,
        ime: 'Maja',
        prezime: 'Katić',
        znaProgramirati: false
    },
];
console.log(typeof backend, backend);
console.table(backend);

// tijelo funkcije - stari način
function pozdrav(){
    console.log('Pozdrav 1');
}

console.log(typeof pozdrav, pozdrav);
// poziv funkcije
pozdrav();

const pozdravi = () => console.log('Pozdrav 2');
console.log(typeof pozdravi, pozdravi);
pozdravi();

const kompleksnije = (x,y) => {
    x = x + 3; // x = 5
    y = --y + x; // y = 6
    return x+y;
};

console.log(kompleksnije(2,2));

const id1 = Symbol('edunova');// edunova je opis, ali je vrijednost jedinstvena
const id2 = Symbol('edunova');

console.log(typeof id1, id2);

// operator uspoređivanja
// ==    -> provjerava samo po vrijednosti '2' je isto što i 2
// ===   -> provjerava i po tipu i po vrijednosti '2'  nije isto što i 2

console.log(id1 == id2);
console.log(id1 === id2);

