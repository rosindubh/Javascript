// phil welsby - 28 july 2021

// create variable, generate a random number between 1 and 30 six times
// each random number generated, check if divisable by 7 ot not

// Returns a random number:
//let num = Math.floor(Math.random()*10);
//console.log(num);



for (let i = 0; i < 6; i++) {
const min = 1;
const max = 30;
const createRandom = (min, max) => {
   const diff = max - min;
   const random = Math.random();
   return Math.floor((random * diff) + min);
}
num = createRandom(min, max);
console.log('The number is ' + num);

if (num % 7 == 0) {
  console.log('True')
}
else {
  console.log('False');
}

}
