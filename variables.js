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
  console.log("a", a);
}
let finalval = hello();

console.log("hello", finalval);
console.log("hello", typeof hello);
console.log("first");
