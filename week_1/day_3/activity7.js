// phil welsby - 28 july 2021

// Research on do...while loop, find
// out about the difference between
// for loop, while loop and do...while
// loop. Give an example of each.
//What are the pros and cons?

// loops
console.log("\nHere are three was to loop any array.\n");


console.log("\nUsing: for (let i = 0; i < arr.length; i++)\n");
let arr = ['apple', 'orange', 'pear',];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


console.log("\nUsing: for (let i of arr)\n");
arr = ['apple', 'orange', 'pear',];
for (let i of arr) {
  console.log(i);
}


console.log("\nUsing: for (let key in arr)\n");
arr = ['apple', 'orange', 'pear',];
for (let key in arr) {
  console.log(arr[key]);
}


// while loops
console.log('\n\nWhile loops');
let age = 15;

while( age < 18 ){
  console.log("You're a child");
  age++
}

console.log("You're an adult");


// do while loop

console.log('\nExample of using do while');

let text = "";
let i = 0;
do {
  text += "The number is " + i + '\n';
  i++;
}
while (i < 5);
console.log(text);
