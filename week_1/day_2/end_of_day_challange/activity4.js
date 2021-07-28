// phil welsby - 27 july 2021

num = 15;

if (num % 3 == 0 && num % 5 == 0) {
  console.log('fizz buzz')
}
else if (num % 3 == 0) {
  console.log('fizz')
}
else if (num % 5 == 0) {
  console.log('buzz')
}
else
  console.log('Not divisable by 3 or 5')
