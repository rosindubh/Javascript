// phil welsby - 27 july 2021

// calculate number of days till my next birthday

let today = new Date("07/27/2021");
let myBirthday = new Date("01/06/2022");
let timeDifference = myBirthday.getTime() - today.getTime();

//calculate days difference by dividing total milliseconds in a day
let numDaysDifference = timeDifference / (1000 * 60 * 60 * 24);

console.log('The number of days until my birthday is ' + Math.floor(numDaysDifference))


// calculate number of days since I was born

let birthdate = new Date("01/06/1960");
//let today = new Date("07/27/2021");

//calculate time difference
timeDifference = today.getTime() - birthdate.getTime();

//calculate days difference by dividing total milliseconds in a day
let daysDifference = timeDifference / (1000 * 60 * 60 * 24);

console.log('The number of days since I was born is ' + Math.floor(daysDifference))


