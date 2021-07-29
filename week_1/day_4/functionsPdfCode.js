// phil welsby - 28 july 2021
// all code taken from codenation pdf on functions

// basic function
const pressGrindBeans1 = () => {
  console.log('Grinding for 20 seconds.');
}

pressGrindBeans1(); // Outputs Grinding fo 20 seconds.

console.log();

// add an if else clause
let coffeeIsGrinding = false;

const pressGrindBeans2 = () => {
  if (coffeeIsGrinding) {
    console.log("Stopping the grind");
  } else {
      console.log("Grinding is about to begin");
      coffeeIsGrinding = true;
  }
}

pressGrindBeans2(); // outputs Grinding is about to begin

console.log();

// cash withdrawl function
const cashWithdrawl1 = (amount, accnum) => {
  console.log(`Withdrawing ${amount} from account ${accnum}`);

}

cashWithdrawl1(300, 50449921); // outputs Withdrawing 300 from account 50449921
cashWithdrawl1(30, 50449921);  // outputs Withdrawing 30 from account 50449921
cashWithdrawl1(200, 50447921); // outputs Withdrawing 200 from account 50447921

console.log();

// introducing global variables
let accnumber = 50449921;
const cashWithdrawl2 = (amount, accnum) => {
  console.log(`Withdrawing ${amount} from account ${accnum}`);

}

cashWithdrawl2(300, accnumber); // outputs Withdrawing 300 from account 50449921
cashWithdrawl2(30, 50449921);   // outputs Withdrawing 30 from account 50449921
cashWithdrawl2(200, 50447921);  // outputs Withdrawing 200 from account 50447921

console.log();

// the purpose of return
const addUp = (num1, num2) => {
  return num1 + num2;
}

addUp(7, 3);
console.log(addUp(2, 5)); // outputs 7

console.log();

// function to convert Farenheit to celcius
const multiplyByNineFiths = (celcius) => {
  return celcius * (9/5);
}

const getFarenheit  = (celcius) => {
  return multiplyByNineFiths(celcius) + 32;
}

console.log("The temperature is " + getFarenheit(15) + "F"); // outputs The temperature is 59F

console.log();

// different way to declair a function using Declaration ver 1
function square1(number) {
  return number * number;
}

console.log(square1(5)); // outputs 25

console.log();

// Declaration 2
function factorial (n) {
  if ((n === 0 ) || (n === 1)) {
  return 1;
  } else {
      return (n * factorial(n-1));
}
}
console.log(factorial(33)); // otputs 8.683317618811886e+36

console.log()

// Expression
const square2 = function(number) {
  return number * number;
}

console.log(square2(5)); // outputs 25

console.log();

// Arrow function syntax
const square3 = (number) => {
  return number * number;
}

console.log(square3(5)); // outputs 25

console.log();

// Activity Let's take this in
const takeOrder = (size, drinkType) => {
  console.log(`order received: ${size} ${drinkType}`);
}

takeOrder("Tall", "Latte"); // outputs order received: Tall Latte

console.log();

// Take this code and turn it into arrow function syntax
function factorial1 (n) {
if ((n === 0) || (n === 1)) {
return 1;
} else {
return (n * factorial1(n-1));
}
}
console.log(factorial1(33)); // outputs 8.683317618811886e+36

console.log();

// Activity
// Take this code and turn it into arrow function syntax
const factorial2 = (n) => {
if ((n === 0) || (n === 1)) {
return 1;
} else {
return (n * factorial2(n-1));
}
}
console.log(factorial2(33)); // outputs 8.683317618811886e+36
