//splice
console.log(buah); 
let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];

buah.splice(2, 2, "Lemon", "Kiwi");

//Slice

let buah = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let  citrus = buah.slice(1);

let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih); 

 