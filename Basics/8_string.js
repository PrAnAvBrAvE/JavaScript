const name = "Pranav"
const age = 20

// console.log(name + repoCount + " Value"); simple concatination of string

// console.log(`Hello my name is ${name} and my age is ${age}`); // `` = it is known as backtick. Nowadays, programmers use this to concat string

const gameName = new String('Pranav-hc-com')

// console.log(gameName[5]); // we here give index value and in return we get string index value.
// console.log(gameName.__proto__); // it gives {} as a object which looks empty but it is not.

// console.log(gameName.length); it gives length of string
// console.log(gameName.toUpperCase()); it cases all string in uppercase

// console.log(gameName.charAt(2)); // we here give index value and in return we get character which is present at that index in string.
// console.log(gameName.indexOf('t')); // here we give character to get index value from string.

const newString = gameName.substring(1, 5) // it divides the string into subpart and print it. It only takes positive value.
console.log(newString); 

const anotherString = gameName.slice(1, -7) // here if we can give negative as well as positive value and negative value starts from revese of string.
console.log(anotherString); 

const newStringOne = "   Pranav    "
// console.log(newStringOne); // it will print as it is with spaces.
// console.log(newStringOne.trim()); // it will eliminate the blank spaces.

const url = "https://Pranav.com/Pranav%20Patil"

// console.log(url.replace('%20', '-')) // it will replace %20 by '-'

// console.log(url.includes('sundar')) // it will return boolean value false because there is no sundar is url.

// console.log(gameName.split('-')); // it will split the string into an array by '-' or 'spaces'.