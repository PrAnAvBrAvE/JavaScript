// for of loop 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5] // here we created an array.
for (const num of arr) // here we use for of loop.
{
    // console.log(num); // here we simply print the value of array.
}

const greetings = 'Hello' // here we created an string.
for (const greet of greetings) // here we use for of loop.
{
    // console.log(`Each character of greet is ${greet}`) // here we simply print the value of 
    // string.
}

// Maps 

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Map
// itself is a object in javascript.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map); // here we simply print the key-value of map. It prints the value as key-value
// pair.

for (const [key, value] of map) // here we use for of loop.
{
    // console.log(key,':-',value); // here we print the value of map using for of loop.
}

const myObject = 
{
    game1: 'NFS',
    game2: 'Spiderman'
} // here we create a object

for (const [key, value] of myObject) // here we use for of loop.
{
    console.log(key, ':-', value); // here we simply print the key and values of object but objects
    // are not iterable using for of loop.
    
}