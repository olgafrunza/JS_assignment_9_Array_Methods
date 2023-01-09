// Assignment 1

// Write a JS code to filter strings that have more than 5 characters in the list below.
// Example : input= const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish']; => output= ["elephant", "desert",  "pumpkin"]

let arr = ["car", "elephant", "desert", "pumpkin", "eat", "fish", "dish"];
let newArr = arr.filter((word) => word.length > 5);
console.log(newArr);

// Assignment 2

// Write a JavaScript program to find duplicate values in a array.
// Example : input= [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6] => output=`["4", "7"]

let arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
let newArr = arr.filter((number, index) => arr.indexOf(number) !== index);
let noDuplicates = [...new Set(newArr)];
console.log(noDuplicates);

// Assignment 3

// Write a JavaScript program that squares the value of every element in the array.
// Example: input=' [1, 2, 3, 4, 5] => output= [1, 4, 9, 16, 25]

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((number) => number ** 2);
console.log(newArr);

// Assignment 4

// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// Example: input= "George Raymond Richard Martin" => output= "GRRM"

let str = "George Raymond Richard Martin";
let newStr = str.split(" ").reduce((accum, word) => {
  accum += word.slice(0, 1);
  return accum;
}, "");
console.log(newStr);
