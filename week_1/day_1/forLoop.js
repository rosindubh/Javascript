// phil welsby - 26 july 2021
// basic for loop
// var creates a function scoped variable
// while let and const create block scoped variables
// when using var the variable is available outside the function


function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

start();
