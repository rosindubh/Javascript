// phil welsby 26 july 2021
// page to print a tic tac toe board

console.log('\n\nusing   <.charAt(7).toUpperCase()>   to find 7th character in a string')

console.log('All aroud the world'.charAt(7).toUpperCase());

console.log('\n\n')

x = '------------'
y = '   |    |   '

console.log()
console.log(y)
console.log(x)
console.log(y)
console.log(x)
console.log(y)

console.log('\n\n')

let space1 =  '   |   |   ';
let space2 =  ' x | o |   ';
let space3 =  '   |   |   ';
let space4 =  '-----------';
let space5 =  '   |   |   ';
let space6 =  ' x | x |   ';
let space7 =  '   |   |   ';
let space8 =  '-----------';
let space9 =  '   |   |   ';
let space10 = ' o |   |   ';
let space11 = '   |   |   ';

console.log(space1)
console.log(space2)
console.log(space3)
console.log(space4)
console.log(space5)
console.log(space6)
console.log(space7)
console.log(space8)
console.log(space9)
console.log(space10)
console.log(space11)

// create array of lines
console.log('\n\n');

space = [
'   |   |   ',
' x | o |   ',
'   |   |   ',
'-----------',
'   |   |   ',
' x | x |   ',
'   |   |   ',
'-----------',
'   |   |   ',
' o |   |   ',
'   |   |   ',
]

for (let i = 0; i < 11; i++) {
  console.log(space[i]);
}
