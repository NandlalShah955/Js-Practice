// ABout date
// Simple way to get date is
let tareek = new Date();
console.log(tareek.toDateString());
console.log(tareek.toLocaleString());
console.log(typeof tareek);

// Array advance conecpts

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
let all_heroes = avengers.concat(indiansuperheros); //[   'ironman','superman','captionamoerica',  'blackwitch', 'Bheem', 'Shaktimaan', 'Mr Jaat' ] finalheros
let finalheros = [...avengers, ...indiansuperheros]; //[   'ironman','superman','captionamoerica',  'blackwitch', 'Bheem', 'Shaktimaan', 'Mr Jaat' ] finalheros
console.log(finalheros, "finalheros");

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Objects Advance concepts

let mySym = Symbol("myKey");
const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
console.log(JsUser, "JsUser");

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const finalobj = { ...obj1, ...obj2, ...obj4 };
console.log("finalobj", finalobj); //finalobj { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const objfinal = Object.assign(obj1, obj2, obj4);
console.log("objfinal", objfinal); //objfinal { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
