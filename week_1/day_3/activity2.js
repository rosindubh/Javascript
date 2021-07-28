// phil welsby - 28 july 2021

// generate 6 random numbers between 1-50

// Returns a random number:
//let num = Math.floor(Math.random()*10);
//console.log(num);

/**
 * Returns a random number between min (inclusive) and max (inclusive)
 */
for (let i = 0; i < 6; i++) {
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

// Example:

console.log(  
  between(10, 50)
)
}
// 200 (this may vary for you :) )
