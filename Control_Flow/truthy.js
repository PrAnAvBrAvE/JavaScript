const userEmail = []

if (userEmail) 
{
    // console.log("Got user email"); // here it will print the value this only if condition is true
} 
else 
{
    // console.log("Don't have user email"); // here it will print the value if a if condition is false.
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) 
{
    // console.log("Array is empty"); // here it will simply print the value when if condition is 
    // true.
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) 
{
    // console.log("Object is empty"); //  it will print the value when if condition is true.
}

// Nullish Coalescing Operator (??): null undefined
/* 
    It returns its right-hand side operand when its left-hand side operand is null or undefined, 
    and otherwise returns its left-hand side operand
*/

let val1;
val1 = 5 ?? 10 // here it will print 5 value
val1 = null ?? 10 // here it will print 10 value
val1 = undefined ?? 15 // here it will print 15 value
val1 = null ?? 10 ?? 25 // here it will print 10 value

// console.log(val1);

// Terniary Operator

// condition ? true : false // it is a syntax of terniray operator

const iceTeaPrice = 80
iceTeaPrice >= 100 ? console.log("Yes, 80 is less than 100") : console.log("No, 100 is more than 80") 
// here, we can write a single statement in a line of code. Here, it will print the value by 
// checking condition.

// ***************************Point to be noted********************************//

/* 
    If we use chrome's console and if we check that
    false == 0 then it will give true value &
    false == '' then it will also give true value &
    0 == '' then it will aslo give true value.
*/