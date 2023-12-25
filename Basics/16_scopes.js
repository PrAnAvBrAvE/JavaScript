//var c = 300 // here, in js var is not local to the scope. It is global to the scope. So we avoid
// it using in js. Insted of it we use let to declare a variable and assign values to it.
let a = 300
if (true) 
{
    let a = 10 // here we use let keyword. Let keyword have block scope. 
    // console.log("INNER: ", a);
    
}
// console.log(a);


// Nested Scope 

function one()
{
    const username = "Pranav"

    function two()
    {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // we cannot access value of above function outside of a function. To
    // access it we need to print it inside the function.

    two() // here we are executing the function two.

} // Here we declare a function inside a function. Here we use scopes in function definition.

one() // here we execute function one and it will print all the values inside it. 

if (true) 
{
    const username = "Pranav"
    if (username === "Pranav") 
    {
        const website = " youtube"
        // console.log(username + website); // it will print the value of username and website.
    }
    // console.log(website); here it will not print anything because it is printed outside the 
    // function we need it to print inside the function to print the value.
} // here we use scopes in if-else statement

// console.log(username); // here it will not print anything because it is printed outside the 
// function we need it to print inside the function to print the value.


// ++++++++++++++++++ interesting ++++++++++++++++++

// Two types of declaring function techniques are as follows:

console.log(addone(5)) // here it will print the value. It will not give error because here we just
// print the value of function which is declared below.

function addone(num) // here, It is a basic function.
{
    return num + 1
} 

// addTwo(5) // here it will give error because here we print the value of function which is 
// declared below, in which function definition is hold in a variable and then that variable return
// the value of function. 

//***************To avoid this there is a method called hoisting in js is used**************. 

const addTwo = function(num) // here, it is also a function but in js sometimes it is also called 
// as expression. In js it is like a variable. Variable in js are powerful, they can hold any kind
// of value like json values, function values, etc.
{
    return num + 2
}