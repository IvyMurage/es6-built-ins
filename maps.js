const members = new Map();

members.set("Evelyn", 75.68);
members.set("Liam", 20.16);
members.set("Sophia", 0);
members.set("Marcus", 10.25);

console.log("members", members);
console.log(members.has("Liam"));

console.log(members.delete("Liam"));
console.log("eneteries", members.entries());
for (let [key, value] of members.entries()) {
  console.log("This is the key", key, "this is the value", value);
}

let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };

let userRoles = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

console.log("userRoles", userRoles);

console.log("role:", userRoles.get(john));
console.log("size:", userRoles.size);

userRoles.forEach((role, user) => {
  console.log(`${user.name}: ${role}`);
});

const keys = [...userRoles.keys()];
console.log("keys:", keys);