// phil welsby - 28 july 2021
// arrays

let coffeeOrder = [
  "Alex - Cortado",
  "Ben - Cortado",
  "Charlie - Whatever's New!",
];

// call the array to stdout
console.log(coffeeOrder);

// indexing an item in the array
console.log(coffeeOrder[2]);

coffeeOrder[1] = "Ann - Vanilla latte!"

console.log(coffeeOrder);

// to find the lenth of the array
console.log(coffeeOrder.length);
// to find the length of a item in the array
console.log(coffeeOrder[1].length);

// to add a vale to the end of  a list
coffeeOrder.push("Donna - espresso")

console.log(coffeeOrder);

// to remove an item
coffeeOrder.pop();

console.log(coffeeOrder);

