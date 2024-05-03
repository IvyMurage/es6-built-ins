let student1 = { name: "James", age: 26, gender: "male" };
let student2 = { name: "Julia", age: 27, gender: "female" };
let student3 = { name: "Richard", age: 31, gender: "male" };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
// roster.add('Amanda')

// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Avoid infinite recursion
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);

const uniqueFlavors = new WeakSet();

let flavour1 = { flavor: "chocolate" };
let flavour2 = { flavor: "strawberry" };

uniqueFlavors.add(flavour1, flavour2);
console.log('unqiue',uniqueFlavors);
