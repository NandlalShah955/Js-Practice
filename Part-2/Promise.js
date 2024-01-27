console.log("first");
// A basic promise example
// let naam = "namit";
const promise = new Promise((resolve, reject) => {
  let num = 4;
  if (num == 5) {
    resolve({ username: "amit", password: "12345" });
  } else {
    reject("Error");
  }
});
promise
  .then((naam) => {
    // console.log("Success", naam);
    return naam.username;
  })
  .catch(() => {
    console.log("error");
  });

//   Or

async function consumePromise() {
  try {
    let res = await promise;
    console.log(res, "res");
  } catch (error) {
    console.log(error);
  }
}
consumePromise();
