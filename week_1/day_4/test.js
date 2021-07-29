// phil welsby - 29 july 2021
// this file is to be used for testing only

// Arrow function syntax
const myFunction = (num1, num2) => {
  return num1 * num2;
}

console.log(myFunction(2, 3));

const nameFunction = (fName, sName) => {
  console.log(`Hello my name is ${fName} ${sName} how are you today?`);
}

nameFunction('Phil','Welsby');


// Function Declaration
function square(num) {
  return num ** 2;
}

console.log(square(9));


// Function Expression / anonymous function
const add = function(num1, num2) {
  return num1 + num2;
}

console.log(add(12, 13));

// so to sum up the 3 ways are
// const myFunction = (num1, num2) => {
// const myFunction = function(num1, num2) {
// function myFunction(num1, num2) {

