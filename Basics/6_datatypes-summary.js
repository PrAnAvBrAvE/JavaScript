//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let empname = "Pranav"
// console.log(typeof empname); output = string

const score = 100
// console.log(typeof score); output = number

const scoreValue = 100.3
// console.log(typeof scoreValue); output = number

const isLoggedIn = false
// console.log(typeof isLoggedIn); output = boolean

const outsideTemp = null
// console.log(typeof outsideTemp); output = object

let userEmail;
// console.log(typeof userEmail); output = undefined

const id = Symbol("123")
const Id = Symbol("123")

// console.log(id === Id); output = false

// console.log(typeof id); output = symbol
// console.log(typeof Id); output = symbol

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Superman", "Batman"]
// console.log(typeof heros); output = object

let myObj = 
{
    name: "Pranav",
    age: 20,
}
// console.log(typeof myObj); output = object

const myFunction = function()
{
    console.log("Hello world");
}
// console.log(typeof myFunction); output = function

// https://262.ecma-international.org/5.1/#sec-11.4.3