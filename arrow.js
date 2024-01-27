const obj = {
  name: "amir",
  age: 45,
  hellofromme: function () {
    console.log(`Hello from ${this.age}`);
  },
};
obj.hellofromme();

// Immediately Invoked function

(function chai() {
  // named IIFE
  console.log("heeloe from unique person");
})(); //use semicolon to end immediately invoked function like i have used it here

((name) => {
  // simple IIFE
  console.log(`khana khalo mere dost${name} `);
})("namit");
