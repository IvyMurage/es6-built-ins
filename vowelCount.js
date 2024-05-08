function vowelCount(str) {
  let strMap = new Map();
  for (let char of str) {
    if ("aeiou".includes(char)) {
      if (strMap.has(char)) {
        strMap.set(char, strMap.get(char) + 1);
      } else strMap.set(char, 1);
    }
  }
  return strMap;
}

console.log("result", vowelCount("awesomeeeeeaaa"));

function duplicates(arr) {
  let newArr = new Set(arr);
  return newArr.size !== arr.length;
}

console.log("duplicates: ", duplicates([1, 3, 2, 1]));
console.log("duplicates: ", duplicates([1, 5, -1, 4]));

// sort the enteries
const removeDuplicateIds = (obj) => {
  const existingValues = [];
  const reverseSortedKeys = Object.keys(obj).sort((v, n) => n - v);

  for (const key of reverseSortedKeys) {
    obj[key] = obj[key].filter((v) => {
      if (existingValues.includes(v)) return false;
      else {
        existingValues.push(v);
        return true;
      }
    });
  }
  return obj;
};
console.log(
  removeDuplicateIds({
    4: ["C", "F", "G"],
    2: ["A", "B", "C"],
    3: ["A", "B", "D"],
  })
);

console.log(
  removeDuplicateIds({
    432: ["A", "A", "B", "D"],
    53: ["L", "G", "B", "C"],
    236: ["L", "A", "X", "G", "H", "X"],
    11: ["P", "R", "S", "D"],
  })
);
