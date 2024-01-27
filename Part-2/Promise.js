console.log("first");
// A basic promise example
const promise = new Promise((resolve, reject) => {
  let num = 4;
  if (num == 5) {
    resolve();
  } else {
    reject();
  }
});
promise
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("error");
  });
