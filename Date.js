// Simple way to get date is
let tareek = new Date();
console.log(tareek.toDateString());
console.log(tareek.toLocaleString());
console.log(typeof tareek);

// SLice and splice in the nodejs

let myarr = [0, 1, 2, 3, 4, 5];

let slicekro = myarr.slice(0, 3);
console.log("myarr", myarr);
// Slice  doesn't change the original array
console.log("slicekro", slicekro); //[0, 1, 2,]

let splice = myarr.splice(1, 3);
// Splice change the original array and removes that part from array whatever you have spliced
console.log("myarr", myarr); //[0,4,5]
console.log("splice", splice); //[1,2,3]

const avengers = ["ironman", "superman", "captionamoerica", "blackwitch"];
const indiansuperheros = ["Bheem", "Shaktimaan", "Mr Jaat"];
// avengers.push(indiansuperheros);
console.log(avengers, "avengers");
// let all_heroes = avengers.concat(indiansuperheros);//[   'ironman','superman','captionamoerica',  'blackwitch', 'Bheem', 'Shaktimaan', 'Mr Jaat' ] finalheros
let finalheros = [...avengers, ...indiansuperheros]; //[   'ironman','superman','captionamoerica',  'blackwitch', 'Bheem', 'Shaktimaan', 'Mr Jaat' ] finalheros
console.log(finalheros, "finalheros");
