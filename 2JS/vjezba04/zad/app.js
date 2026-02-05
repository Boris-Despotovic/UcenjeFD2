
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    //console.log('1. zadatak');
    //console.log(a);
    
    // ovdje rješavam zadatak 1
    const x= Number(a)
    
    if(!x){
      rezultat.innerHTML='Unesite broj u polje A'
      return
    }
    
    const y= Number(b)
    if(!y){
      rezultat.innerHTML='Unosite broj u polje B'
      return
    }

   

    if(x>y){
      rezultat.innerHTML= x
    }else if(y>x){
      rezultat.innerHTML = y
    }
    else{
      rezultat.innerHTML = 'Brojevi su jednaki'
    }

    


    // ovdje je kraj zadatka 1
    


     /*

  [ZADATAK 4]
      Provjera punoljetnosti: 
    Korisnik unosi godinu rođenja u polje A. 
    Izračunaj njegovu dob u odnosu na tekuću godinu i ispiši je li punoljetan ili nije.

  [ZADATAK 5]
 Pozitivan, negativan ili nula: 
 Za uneseni broj u polju A ispiši poruku je li on pozitivan, negativan ili je nula.

 ----------------------------------------------------------------
 
 [ZADATAK 6]
 Parnost broja: 
 Provjeri je li uneseni broj u polju A paran ili neparan koristeći modulo operator (%).

 ----------------------------------------------------------------
 
 [ZADATAK 7]
 Ocjenjivanje: 
 Na temelju unesenog broja bodova (0-100) u polje A, ispiši ocjenu:
 90-100: Odličan, 80-89: Vrlo dobar, 70-79: Dobar, 60-69: Dovoljan, <60: Nedovoljan.

 ----------------------------------------------------------------
 
 [ZADATAK 8]
 Djeljivost: 
 Provjeri je li broj u polju A djeljiv s brojem u polju B bez ostatka. 
 Ispiši "Djeljiv je" ili "Nije djeljiv".  
  */

    
    return; // short curcuiting - prekidam funkciju
  }

  // Ovdje će doći drugi zadatak
if(zadatak==='5'){
    //  5. Upisanu vrijednost u polje c ispisi u rezultat
    rezultat.innerHTML=c





      return
      }

    //zadatak 6
    //Za upisanu vrijednost decimalnog broja u polje D ipiši samo decimalni dio

    if (zadatak === '6'){

      const cijeliBroj = parseInt(d)

      const decimalniBroj = parseFloat(d)

      if (!decimalniBroj){
        rezultat.innerHTML= 'Niste unijeli broj'
        return
      }

      console.log(cijeliBroj ,decimalniBroj)
      rezultat.innerHTML= decimalniBroj - cijeliBroj



      return
    } 
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



