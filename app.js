"use strict";
console.log('it works');
var myName = 'this is a string';
// tuples
var address = ['hurstbourne', 99];
// enums
var Colour;
(function (Colour) {
    Colour[Colour["Grey"] = 0] = "Grey";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
var Band;
(function (Band) {
    Band[Band["Grey"] = 0] = "Grey";
    Band[Band["Green"] = 100] = "Green";
    Band[Band["Blue"] = 101] = "Blue";
})(Band || (Band = {}));
var colour = Colour.Green;
console.log('colour', colour); // 1
var band = Band.Blue; // 101
console.log('band', band);
var count = 23;
count = "john";
