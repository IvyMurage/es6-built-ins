var callbacks = [];
for (let i = 0; i < 10; i++) {
  callbacks.push(function () {
    console.log(i);
  });
}
callbacks[2]();
// The answer is 2. The variable i is declared with let, which, unlike var, creates a new binding every time the loop runs, making sure the callback functions created within the loop see a different i for each iteration.
// when var is used the output will be 10 because var gets hoisted to the top of the function and the value of i is 10 when the function is called.
// when let is used the output will be 2 because let is block scoped and the value of i is 2 when the function is called.
// when const is used the output will be 2 because const is block scoped and the value of i is 2 when the function is called.
