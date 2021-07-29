// phil welsby - 29 july 2021

// objects

// ojects are stored in a key value pair
let time = Date.now(1000 * 60 *60 *24)

const cafe = {
    name: "Beans HQ",
    noOfTables: 40,
    hasDiscount: true,
    owner: "Pedro",
    isManager: false,
    hasMortgage: false,
    drinks:["Coffee", "Tea", "OJ", "Milk", "Water",]
}

// using indexing
console.log(cafe['name']);
// using dot notation
console.log(cafe.noOfTables);

console.log(time);
