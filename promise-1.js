/**
 * 
 let promise = new Promise((resolve, reject) => {
  //
  if (success) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});
 */

let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failure");
      }
    }, 1000);
  });
}

const promise1 = getUsers();
// getUsers() function
// ...

getUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Completed");
  });
promise1.then(
  (users) => console.log(users),
  (error) => console.log(error)
);

promise1.catch((error) => console.log("Error: ", error));
