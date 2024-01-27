// Types of loops

let array = [1, 4, 6, 7, 4, 444, 6, 63];
// whenever break is used it totally break the loop
// for (let i = 0; i < array.length; i++) {
//   if (i == 4) {
//     console.log(array[i]);
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }
// Output
// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3

// Whenever one continue is used one statement is skipped
for (let i = 0; i < array.length; i++) {
  if (i == 4) {
    console.log(array[i]);
    continue;
  }
  console.log(`value of i is ${i}`);
}
// Output
// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3
// 4
// value of i is 5
// value of i is 6
// value of i is 7
