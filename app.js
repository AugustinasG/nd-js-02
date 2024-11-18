console.log('Veikia');


//1 Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

const hTag1 = document.querySelector("#hTag")

let hTagai ='';




for (let i=1; i<=14; i++) {

hTagai += "<h1>4</h1>";

}

for (let i=1; i<=14;i++) {

hTagai += "<h4>1</h4>";


}
hTag1.innerHTML = hTagai;


//2 Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }


const nr2 = document.querySelector("#nr2")
let skaiciai ='';

for (let i=1; i<=44;i++) {

const number = rand(14,44);


if (number % 4 === 0) {

  skaiciai += `<span style="color:red;">${number}</span>`  
} else {

skaiciai += `<span style="color:blue;">${number}</span>`

}


}

nr2.innerHTML = skaiciai;

//3 Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.



const nr3 = document.querySelector('#nr3');
let circle = '';


for (let i = 1; i <=14; i++) {

circle += `<div></div>`;


}

nr3.innerHTML = circle;


//4 Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).




const nr4 = document.querySelector('#nr4');

let zebra = '';

for (let i=1; i<=8;i++) {

if (i%2 === 0) {

zebra += `<div class ="red"></div>`

} else {

  zebra += `<div class="blue"></div>`


}


}

nr4.innerHTML = zebra;

//5 Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.



const nr5 = document.querySelector('#nr5')

let daugyba = '';

for (let i=4;i<=14;i++) {

const four = 4;
const result = 4 * i;

daugyba += `<div>${four} * ${i} = ${result} </div>`;



}
nr5.innerHTML = daugyba;


//6 Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.


const nr6 = document.querySelector('#nr6');
let star = '';
let rowStars ='';
const number = 44;

for (let i=1; i<=444; i++) {

  rowStars += `<span>*</span>`
 
  if (i %number ===0 || i === 444) {
    star += `<div>${rowStars}</div>`;
    rowStars = '';

  } 


}

nr6.innerHTML = star;

//7 Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip


function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

const nr7 = document.querySelector('#nr7');
let kvadratas = 300;
let squares = '';

for (let i = 0; i < 14; i++) {
  let squareColor = randomColor();
  kvadratas -= 20;
  squares += `<div style="background-color: ${squareColor}; width: ${kvadratas}px; height: ${kvadratas}px; padding: 10px;">`;
}
squares += `</div></div></div></div></div></div></div></div></div></div></div></div></div></div>`;
nr7.innerHTML = squares;

//8 Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą turintį 41x41 šių simbolių. Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir papildomus tagus. #ciklasCikle


const nr8 = document.querySelector('#nr8');

let greenSquare = '';
for (let i=0; i<41; i++) {
  for (let j=0; j< 41; j++){
greenSquare += `<span> &#9632;</span>`;

  }
greenSquare += `<br>`;


}
nr8.innerHTML = greenSquare;

// 9 Uždavinyje prieš tai nupieštam kvadratui nupieškite geltonas istrižaides (geltonai nudažykite atitinkamus simbolius). #ciklasCikle


const nr9 = document.querySelector('#nr9');

let greenSquareYellow = '';
for (let i = 0; i < 41; i++) { 
  for (let j = 0; j < 41; j++) { 
    if (i === j || i + j === 40) {
      
      greenSquareYellow += `<span style="color:yellow">&#9632;</span>`;
    } else {
      
      greenSquareYellow += `<span style="color:green">&#9632;</span>`;
    }
  }
  greenSquareYellow += `<br>`; 
}

nr9.innerHTML = greenSquareYellow;