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

// Generic
function echo<T>(data: T): T {
  return data;
}

echo<string>('damien');
// deliberate mistake below
// echo<number>('damien'); // expecting a number as an argument

// class SimpleMath<T extends number> {
//   baseValue: T;
//   multiply: T;
//   calculate(): number {
//     return +this.baseValue * +this.multiply;
//   }
// }

class SimpleMath<T extends number | string, U extends number> {
  baseValue: T | undefined;
  multiply: U | undefined;

  calculate(): number {
    let result;

    if (this.baseValue && this.multiply) {
      result = +this.baseValue * +this.multiply;
    }

    return  result || 0;
  }
}
