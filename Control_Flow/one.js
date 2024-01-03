const isUserloggedIn = true
const temperature = 41

if ( temperature === 41 ) // here, the strict equality ( === ) operator checks whether its two 
// operands are equal or not.
{
    // console.log("less than 50");
} 
else 
{
    // console.log("temperature is greater than 50");
}

// console.log("Execute"); // here it will simply print.

// Comparisons operator below:
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) 
{
    let power = "fly"
    // console.log(`User power: ${power}`); // here it will simply print the value.
}

// console.log(`User power: ${power}`); // by trying to print it, it will give error because it is
// declared outside the scope.


const balance = 1000

// if (balance > 500) console.log("test1"),console.log("test2"); // it is implicit scope. It can be 
// executed in a single line of code.

if (balance < 500) 
{
    // console.log("less than 500");
} 
else if (balance < 750) 
{
    // console.log("less than 750");
} 
else if (balance < 900) 
{
    // console.log("less than 750");  
} 
else 
{
    // console.log("less than 1200");
} // it is nothing but a nested if statement which is a conditional flow statement.

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) // The logical AND (&&) operator for a set of boolean operands will 
// be true if and only if all the operands are true. Otherwise it will be false.
{
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) // The logical OR (||) operator for a set of operands 
// is true if and only if one or more of its operands is true.
{
    console.log("User logged in");
}