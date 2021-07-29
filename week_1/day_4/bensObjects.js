// phil welsby - 29 july 2021
// code done by Ben on day 4 of course

// 
// OBJECTS
// 
// To understand the concept of an object 
// To access data from within an object
// To use functions with objects
// To understand and use the 'this' keyword.
const cafe = {
    name: "Beans HQ",
    noOfTables: 40,
    hasDiscount: true,
    drinks: [
        "Coffee",
        "Tea",
        "OJ",
        "Milk",
        "Water"
    ],
    owner: {
        name: "Pedro",
        isManager: false,
        hasMortgage: false
    },
    morningOffer: "Free pastry with any hot drink",
    lunchOffer: "Free Coffee with any sandwich",
    openCafe () {
        // this keyword means the current object
        if (this.hasDiscount) {
            return "Come in and take a look at our special offers"
        } else {
            return "Come on in"
        }
    },
    // More modern way with ES6
    closeCafe () {
        return "Come back later we are closed right now."
    }
}
console.log(cafe.hasDiscount)
// 2 different ways to access properties from object.
// console.log(cafe.name)
// console.log(cafe["name"])
// Use the values in an object to define what will happen in conditional statement
// let time = new Date()
// if (time.getHours() < 12 && cafe.hasDiscount) {
//     console.log("Breakfast offer is on, details:")
//     console.log(cafe.morningOffer)
// } else if (time.getHours() >= 12 && time.getHours() <= 16 && cafe.hasDiscount) {
//     console.log("Lunch offer is on, details:")
//     console.log(cafe.lunchOffer)
// } else {
//     console.log("No offers at this time")
// }
// OBJECTS ARE MUTABLE
// cafe.drinks.push("Hot chocolate")
// cafe["drinks"].push("Mocha")
// cafe.food = ["Sandwich", "Cookie", "Muffin"]
// USING FUNCTIONS WITH OBJECTS
console.log(cafe.openCafe())
