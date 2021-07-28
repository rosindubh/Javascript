// phil welsby - 28 july 2021

// Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// Using a nested loop iterate over both arrays and console.log out the
// matching follower.


let bobsFollowers = ['Tom', 'Mike', 'Jane', 'Lucy',]
let hannahsFollowers = ['Bill', 'Harry', 'Jane', 'Lucy',]

for (let i = 0; i < bobsFollowers.length; i++) {
  bName = bobsFollowers[i];
  for (let j = 0; j < hannahsFollowers.length; j++) {
   hName = hannahsFollowers[j];
    if (bName == hName) {
  console.log(bName + ' In both arrays');
}

}

}

