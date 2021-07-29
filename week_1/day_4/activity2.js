// phil welsby - 29 july 2021

//Edit the below snippet to include two parameters and a
//running order count updated when the function is called:

let orderCount = 0;

const takeOrder1 = (topping) => {
  console.log(`Pizza with ${topping}`);
  orderCount++;
}

takeOrder1("pineapple");



// Answer
orderCount = 0;

const takeOrder2 = (topping1, topping2) => {
  console.log(`Pizza with ${topping1} and ${topping2}`);
  orderCount++;
}

takeOrder2("pineapple", "banana");
console.log('orderCount is now ' + orderCount);
