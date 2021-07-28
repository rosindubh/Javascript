// phil welsby - 27 july 2021

// program to check if the string is palindrome or not

let str = '20202';
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}

