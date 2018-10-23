console.log('it works');

let myName = 'this is a string';

// tuples
let address: [string, number]= ['hurstbourne', 99];

// enums
enum Colour {
  Grey, // 0
  Green, // 1
  Blue, // 2
}

enum Band{
  Grey,
  Green = 100,
  Blue
}

let colour: Colour = Colour.Green;
console.log('colour', colour); // 1

let band: Band = Band.Blue; // 101
console.log('band', band);
