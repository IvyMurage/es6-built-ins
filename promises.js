setTimeout(function () {
  console.log("This will be called after two seconds!");
}, 2000);

function doSlowMath(num1, num2, fn) {
  setTimeout(function () {
    let res = num1 * num2;
    fn(res);
  }, 2000);
}

function doSlowMath(num1, num2, fn) {
  setTimeout(function () {
    let value = num1 * num2;
    fn(value);
  }, 2000);
}

doSlowMath(2, 2, (answer) => {
  return `It took awhile, but 2 times 2 is ${answer}`;
});

function doSlowMath(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let value = num1 * num2;
      resolve(value);
    }, 2000);
  });
}

doSlowMath(2, 2)
  .then((answer) => answer + 10)
  .then((answer) => answer - 3)
  .then((answer) => answer + 7)
  .then((answer) => console.log(answer));

function getUsers() {
  let users = [];
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 1000);
  return users;
}

function findUser(username) {
  const users = getUsers(); // A
  const user = users.find((user) => user.username === username); // B
  return user;
}

console.log("value", findUser("john"));

function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 1000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser("john", console.log);
