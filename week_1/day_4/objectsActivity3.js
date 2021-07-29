// phil welsby - 29 july 2021

let drink1 = 'latte';
let drink2 = 'tea';
let food1 = 'sandwich';
let food2 = 'cake';

const coffeeShop = {
  branch: 'Manchester',
  latte: 1.60,
  espresso: 1.20,
  tea: 1.10,
  water: 0.90,
  OJ: 1.25,
  muffins: 1.44,
  sandwich: 1.85,
  cake: 2.25,
  pizza: 2.75,

  drinksOrdered: function () {
    console.log('You ordered these drinks > ' + drink1 + ' £' + this.latte.toFixed(2) + ' ' + drink2 + ' £' + this.tea.toFixed(2))
  },
  foodOrdered: function () {
    console.log('You ordered this food > ' + food1 + ' £' + this.sandwich.toFixed(2) + ' ' + food2 + ' £' + this.cake.toFixed(2))
  },
  totalCost: function () {
    cost = this.latte + this.tea + this.sandwich + this.cake;
    console.log('\nThank you for your custom\n');
    console.log('Your bill is £' + cost.toFixed(2) + '\nHave a great day')
  }
}

coffeeShop.drinksOrdered()
coffeeShop.foodOrdered()
coffeeShop.totalCost()

