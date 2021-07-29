// phil welsby - 29 july 2021

//Create an object called pet with the key values of:
//name, typeOfPet, age, colour
//And methods called eat and drink. They should return a
//string saying [Your Pet Name] is eating/drinking.

const pet = {
  name: 'Toby',
  typeOfPet: 'Dog',
  age: 7,
  colour: 'Blue',

  eat: function () {
    console.log(this.name + ' is eating');
  },
  drink: function () {
    console.log(this.name + ' is drinking');
  }

}

pet.eat()
pet.drink();


