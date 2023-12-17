const score = 400 // here javascript automatically detects 400 as a number.
// console.log(score); 

const balance = new Number(100)
// console.log(balance); // here we exclusively defines datatype of 100 as a number.

// console.log(balance.toString().length); // it converts the number datatype into string datatype and gives its length.
// console.log(balance.toFixed(2)); // it give the exact decimal after the number.

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(4)); // it gives exact precise value of a given number.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // it separates the zero by comma and make it readable. 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // it has various properties listed in it.
// console.log(Math.abs(-4)); // it gives absolute value. It makes negative number into positive and positive remain positive only.
// console.log(Math.round()); // it roundup the value to its nearest integer
// console.log(Math.ceil(4.2)); // it always chooses big value to its nearest integer.
// console.log(Math.floor(4.9)); // it always chooses small value to its nearest integer.
// console.log(Math.min(1, 5, 15, 2)); // it give you lowest value in an array. 
// console.log(Math.max(5, 25, 55, 75)); // it gives you highest value in an array.