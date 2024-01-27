console.log("first");
// forEach example
// For each doesn't return anything
let LaxmiPG = ["mukul", "Vishalsir", "nandlal", "sandeep"];
let finalperson = LaxmiPG.forEach((el) => {
  console.log(el, "elin loops ");
  return el;
});
console.log("finalperson", finalperson);
// Map return the value

let allperson = LaxmiPG.map((el) => {
  console.log(el, "el in loops");
  return el;
});

console.log("allperson", allperson);

// Reduce method
let arr = [2, 4, 6, 6, 76, 23];
