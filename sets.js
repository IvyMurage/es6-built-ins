const months = new Set([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
console.log(months.size);
console.log("values", months.values());
console.log("keys", months.keys());

console.log('next month',months.values().next());


months.forEach(month => {
    console.log('month',month);
}) 