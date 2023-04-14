const arr = [1, 2, 1, 2, 3, 4, 1, 2];
const newArr = arr.filter((value, index) => arr.indexOf(value) === index);
console.log(newArr); 

const arry = [1, 2, 1, 2, 3, 4, 1, 2];

const count = arry.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {});

console.log(count);


// const ary = [1, 2, 1, 2, 3, 4, 1, 2];
// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// const array = [1, 2, 1, 2, 3, 4, 1, 2];

// const max = Math.max(...arr); // 4
// const min = Math.min(...arr); // 1

// console.log("Maximum value:", max);
// console.log("Minimum value:", min);

// let string = "i love javascript";
// let reversedString = string.split("").reverse().join("");
// console.log(reversedString);

// let str = "I love JavaScript";
// let newString = string.replace("JavaScript", "Python");
// console.log(newString);

// const strg = "I love Javascript";
// const wordCount = string.split(" ").length;
// console.log(wordCount);

const fruits = [
  "Apple",
  "Lemon",
  "Grapes",
  "Banana",
  "Orange",
  "Orange",
  "Lemon",
  "Apple"
];

const unique = new Set(fruits);
console.log(unique)



