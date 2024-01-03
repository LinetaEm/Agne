// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”


// 

// function skaitmenuKiekisSkaiciuje(skaicius) {
//     if (typeof skaicius !== 'number' || isNaN(skaicius)) {
//         return "Pateikta netinkamo tipo reikšmė.";
//     }

//     const skaitmenuKiekis = String(Math.abs(skaicius)).length;

//     return skaitmenuKiekis;
// }

// console.log(skaitmenuKiekisSkaiciuje(5)); 
// console.log(skaitmenuKiekisSkaiciuje(781)); 
// console.log(skaitmenuKiekisSkaiciuje(37060123456)); 
// console.log(skaitmenuKiekisSkaiciuje(true));
// console.log(skaitmenuKiekisSkaiciuje("asd")); 
// console.log(skaitmenuKiekisSkaiciuje(NaN)); 


// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

// function daugyba(number1, number2) {
//     if (typeof number1 === 'number' && typeof number2 === 'number') {
//         let daugyba = number1 * number2;
//         return daugyba;
//     } else {
//         return 'Klaida, įveskite skaičius';
//     }
// }

// let number1 = 10;
// let number2 = 100;
// let number3 = 15;
// let number4 = 50;


// console.log(daugyba(number1, number2)); 
// console.log(daugyba(number3, number2));
// console.log( daugyba(number4, number2));



// function isrinktiRaides(tekstas, raidesEile) {
//     if (typeof tekstas !== 'string') {
//         return "Pirmasis kintamasis yra netinkamo tipo.";
//     }
//     if (tekstas === '' || tekstas.length > 100) {
//         return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
//     }
//     if (typeof raidesEile !== 'number') {
//         return "Antrasis kintamasis yra netinkamo tipo.";
//     }
//     if (raidesEile <= 0) {
//         return "Antrasis kintamasis turi būti didesnis už nulį.";
//     }
//     if (raidesEile > tekstas.length) {
//         return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
//     }

//     let rezultatas = '';
//     for (let i = raidesEile - 1; i < tekstas.length; i += raidesEile) {
//         rezultatas += tekstas[i];
//     }

//     return rezultatas;
// }

// console.log(isrinktiRaides("abcdefg", 2)); 
// console.log(isrinktiRaides("abcdefghijkl", 3)); 
// console.log(isrinktiRaides("abc", 0)); 
// console.log(isrinktiRaides("abc", 4)); 
// console.log(isrinktiRaides(1561, 2)); 

// function isrinktiRaides(tekstas, raidesEile) {
//     if (typeof tekstas !== 'string') {
//         return "Pirmasis kintamasis yra netinkamo tipo.";
//     }
//     if (tekstas === '' || tekstas.length > 100) {
//         return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
//     }
//     if (typeof raidesEile !== 'number') {
//         return "Antrasis kintamasis yra netinkamo tipo.";
//     }
//     if (raidesEile <= 0) {
//         return "Antrasis kintamasis turi būti didesnis už nulį.";
//     }
//     if (raidesEile > tekstas.length) {
//         return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
//     }
 
// let rezultatas = ''; 
//   for (let i = raidesEile - 1; i < tekstas.length; i += raidesEile) {
//       rezultatas += tekstas[i];
//     }     
//       return rezultatas;
// }

// console.log(isrinktiRaides("abcdefg", 2));
// console.log(isrinktiRaides("abcdefghijkl", 3)); 
// console.log(isrinktiRaides("abc", 0)); 
// console.log(isrinktiRaides("abc", 4)); 
// console.log(isrinktiRaides(1561, 2)); 

// Funkcija pavadinimu “didziausiasSkaiciusSarase”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių
//TESTAI:
//console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
//rezultatas: 1
//console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
//rezultatas: 3
//console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
//ezultatas: 78
//console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
//rezultatas: 69
//console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//rezultatas: -1
//console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
//console.log( didziausiasSkaiciusSarase( [] ) );
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”

// function didziausiasSkaiciusSarase(sarasas) {
//     if (!Array.isArray(sarasas)) {
//       return "Pateikta netinkamo tipo reikšmė.";
//     }
  
//     if (sarasas.length === 0) {
//       return "Pateiktas sąrašas negali būti tuščias.";
//     }
  
//     let max = sarasas[0];
  
//     for (let i = 1; i < sarasas.length; i++) {
//       if (sarasas[i] > max) {
//         max = sarasas[i];
//       }
//     }
  
//     return max;
//   }
  
//   let rezultatas = didziausiasSkaiciusSarase([1, 5, 3, 7, 2]);
//   console.log(rezultatas)


// function didziausiasSkaiciusSarase(sarasas) {
//   if (!Array.isArray(sarasas)) {
//     return "Pateikta netinkamo tipo reikšmė.";
//   }

//   if (sarasas.length === 0) {
//     return "Pateiktas sąrašas negali būti tuščias.";
//   } max = sarasas [0]
// for (let i = 1; i < sarasas.length; i++) {
//   if (sarasas[i] > max) {
//     max = sarasas[i];
//   }
// }
// return max
// }

// let rezultatas = didziausiasSkaiciusSarase([1, 5, 3, 7, 2]);
//   console.log(rezultatas)

function division(num1, num2) {
    if (typeof num1 !== 'number' || isNaN(num1)) {
        return "Error: The first variable must be a valid number.";
    }

    if (typeof num2 !== 'number' || isNaN(num2)) {
        return "Error: The second variable must be a valid number.";
    }
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    const result = num1 / num2;

    return result;
}

console.log(division(100, 50));  

console.log(division(10, 0)); 

console.log(division("abc", 5)); 

console.log(division(1, 2.5));  

console.log(division(2.5, "abc"));