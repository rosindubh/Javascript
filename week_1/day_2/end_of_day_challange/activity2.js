// phil welsby - 27 july 2021

// using swich instead of or

// pizza
let pizza = 'anchovies';


// toppings
let cheese = 'cheese';
let pepperoni = 'pepperoni';
let ham = 'ham';
let pinapple = 'pineapple';
let anchovies = 'anchovies';

switch(pizza) {
  case 'cheese':
    console.log(`I don't mind having ${cheese} on my pizza`);
    break;
  case 'pepperoni':
    console.log(`I don't mind having ${pepperoni} on my pizza`);
    break;
  case 'ham':
    console.log(`I don't mind having ${ham} on my pizza`);
    break;
  case 'pineapple':
    console.log(`{pineapple} should not be on a pizza`)
    break;
  case 'anchovies':
    console.log(`{anchovies} should not be on a pizza`)
    break;
}

