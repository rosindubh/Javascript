// phil welsby - 26 july 2021
// ifelse 

// this will return true
if (1 == '1') {
  console.log(true);
}
else {
  console.log(false);
}


// this will return false
if (1 === '1') {
  console.log(true);
}
else {
  console.log(false);
}

// this will return false
if (1 != '1') {
  console.log(true);
}
else {
  console.log(false);
}

// this will return true
if (1 !== '1') {
  console.log(true)
}
else {
  console.log(false)
}

// weather report
let place = 'Manc';
let weather = 'Cloudy';

if (place == 'Manc' && weather == 'Sunny') {
  console.log('Check again');
}
else if (place == 'Manc' && weather == 'Rain') {
  console.log('obvs');
}
else {
  console.log("What it isn't raining?");
}


// using or
let day = 'Saturday';
if (day == 'Saturday' || day == 'Sunday') {
  console.log("It's weekend!");
}
else {
  console.log("When's the weekend?");
}

// else if
let car = 'Peugeot';

if (car == 'Ford' || car == 'GM'){
  console.log("You've got an American car!");
}
else if (car == 'Peugeot' || car == 'Citroen'){
  console.log("You've got a French boy!");
}
else if (car == 'Honda' || car == 'Toyota' || car == 'Suzuki'){
  console.log("Japanese cars are dead quiet");
}
else if (car == 'Mercedes'){
  console.log('You are a proper posh German');
}
else if (car == 'Hyundai' || car == 'Kia'){
  console.log('South Korean cars are getting popular');
}
else {
  console.log('Your car is not in the top ten companies');
}
