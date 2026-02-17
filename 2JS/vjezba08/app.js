
// beskonačna while petlja
while(true){
    console.log('Edunova');
    break;
}


let brojac=0;
console.time('while petlja');
while(brojac++<100){
    // console.log(brojac);
    // if(brojac%50 ===0){
       // console.timeLog('while petlja');
    // }
}
console.timeEnd('while petlja');

// zbroji sve znamenke danog broja
let brojUnos='1262'; //11
console.time('ZB1');

let zbroj=0;
for(let i=0;i<brojUnos.length;i++){
    zbroj += parseInt(brojUnos[i]);
}
console.log(zbroj);
console.timeEnd('ZB1');

console.time('ZB2');

let broj = parseInt(brojUnos); // sigurno sam pozvao samo jednom

zbroj=0; // reuse varijablu zbroj
while(broj>0){
    zbroj += broj % 10; // tu sam uzeo zadnji broj (npr 2) i nadodao ga na zbroj
    broj = broj - (broj % 10); // skidam zadnji broj na 0
    broj = broj / 10; // ovo ovdje moram u 2 koraka broj JS Number
}
console.log(zbroj);

console.timeEnd('ZB2');

// čitati više o optimizaciji
// Big O notacija

let br = 5; // ovo ne znamo koja će biti vrijednost

for(let i=0;i>br;i--){
    console.log('Ušao u petlju', i);
}

let podaciSAPI = // [
//   {
//        ime: 'Pero'
//    },
//    {
//        ime: 'Marko'
//    }
//   ];

while(podaciSAPI.length>0){
    console.log('Ušao u while petlju', podaciSAPI.pop()?.ime);
}

