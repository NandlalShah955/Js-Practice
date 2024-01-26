// "use strict"; // treat all Js code as new Version
// We can declare varaible without declaring them also
let a;
let b = null;

console.log(a, b, "result");

// Prefer not to use var instead try to use let and var

// Conversion
// Trying to convert string into number
// "123dfk"=NaN

let isLogged = 2;
let isfaltu = 0;

let faltu = Boolean(isfaltu);
let isBoolean = Boolean(isLogged);
console.log(isBoolean); //true
console.log(faltu); //false
// "htitesh" => true

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);
function hello() {
  let a = "My name is nandlal";
  return a;
}
let finalval = hello();

console.log("hello", finalval);
console.log("hello", typeof hello);

// All Primitive datatypes are pushed to Stack memory
// All Non - Primitive datatypes are pushed to Heap memory
// Primitive datatype goes into stack memory

let myname = "Amit verma";

var finale = myname;
finale = "putty";
console.log("finale", finale); //putty
console.log("myname", myname); //Amit verma

// Non - Primitive datatype goes into heap memory
const person = {
  name: "khurana",
  age: 34,
  city: "delhi",
  profession: "Developer",
};

let anotherperson = person;

anotherperson.city = "jaipur";
anotherperson.profession = "Mern Stack developer";
console.log(person, "person"); // {   "name": "khurana","age": 34,"city": "jaipur","profession": "Mern Stack developer"}
console.log(anotherperson, "anotherperson"); // {   "name": "khurana","age": 34,"city": "jaipur","profession": "Mern Stack developer"}

// Creating a random number
const randomNum = Math.ceil(Math.random() * 100 + 1);
console.log(randomNum, "randomNum");
