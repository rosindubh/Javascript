// phil welsby - 28 july 2021

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

