// phil welsby - 27 july 2021

// Activity(1):

// create an array of favorite websites
let favWebsites = ['https://planetradio.co.uk/planet-rock/',
                   'https://www.theregister.com/',
                   'https://www.jupiterbroadcasting.com/'
]

// display to console
console.log(favWebsites);

// add 2 websites to array
favWebsites.push('https://www.raspberrypi.org/')
favWebsites.push('https://distrowatch.com/')

// display to console
console.log()
console.log(favWebsites);

// remove last website
favWebsites.pop()

// display to console
console.log()
console.log(favWebsites);

// Activity 2
// research the follpwing methods
// map(), shift(), unshift(), slice(), splice()

//map()
let numbers = [4, 9, 16, 25]
console.log()
console.log('The contents of the array named numbers is ' + numbers);
console.log('Using the map() method on numbers');
numbers = numbers.map(Math.sqrt);
console.log(numbers);

//shift() will remove the first item from an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());

//unshift() add new items to the begining of an array
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.unshift("Lemon","Pineapple");
console.log(fruits);

//slice Select elements from an array
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
console.log(citrus);

//splice Add elements to an array:
fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
