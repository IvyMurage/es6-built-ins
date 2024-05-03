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
  let objNew = {};
  let objList = Object.entries(obj).sort((a, b) => b[0] - a[0]);
  objList.map((item) => {
    const unique = [...new Set(item[1])];
    return [item[0], unique];
  });

  for (let i = 0; i < objList.length; i++) {
    for (let j = 0; j < objList.length; j++) {
      if (i !== j) {
        if (objList[j] !== undefined && objList[j][0] > objList[j][0]) {
          objList[i][1].forEach((el) => {
            if (objList[j][1].includes(el)) {
              objList[j][1] = objList[j][1].filter((item) => item !== el);
            }
          });
        }
      }
    }
  }
  objList.forEach((item) => {
    objNew[item[0]] = [...new Set(item[1])];
  });
  return objNew;
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
