let macskaArray = {};
let macskak = [];
macskaArray.macskak = macskak;
//console.log(macskaArray);

let nev = " ";
let eletkor = " ";
let nevSzam = 0;

for (let index = 0; index < 20; index++) {
    
    nevSzam++
    nev = "Cirmos" + nevSzam
    eletkor = Math.floor(Math.random()* 10) + 2
    
    let cica = {
        nev,
        eletkor,
      };
      macskaArray.macskak.push(cica);

      if (cica.eletkor == 2) {
        console.log(JSON.stringify(macskaArray.macskak[index]));
    }
}


