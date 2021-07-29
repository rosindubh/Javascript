favDrinks = ["Tea",
             "Coffee",
             "Beer",
]

console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);

console.log();

// using a loop
for (let i = 0; i < favDrinks.length; i++) {
console.log(favDrinks[i]);
}

let multiplesTwo = [];

for(let i = 0; i < 20; i++){
  if (i % 2 == 0){
    multiplesTwo.push(i);
    }
}

console.log(`Numbers divisble by 2 between 0 and 20 are: ${multiplesTwo}.`);

// while loops

let age = 15;

while( age < 18 ){
  console.log("You're a child");
  age++
}

console.log("You're an adult\n\n");



let cards = ['Diamond', 'Spade', 'Club', 'Heart',]
let currentCard = 'Club';

while(currentCard != 'Spade'){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);
