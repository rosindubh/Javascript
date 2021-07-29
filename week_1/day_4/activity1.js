// phil welsby - 29 july 2021

// Activity1 question
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

// Activity1 answer
const factorial2 = (n) => {
if ((n === 0) || (n === 1)) {
  return 1;
} else {
  return (n * factorial2(n-1));
  }
}
console.log(factorial2(33)); // outputs 8.683317618811886e+36


