function sayMyName()
{
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}

// sayMyName // here it is just a reference of funtion. It does not print anything.

// sayMyName() // here it executes the function. It prints values inside it.

// function addTwoNumbers(number1, number2) // here we pass parameters. When we create a function 
// definition then we take a input, that input is known as parameters.
// {
    // console.log(number1 + number2); // here we simply do additions of two numbers.
// }

// addTwoNumbers(3, 5) // here we pass arguments. When calling a function we pass arguments.

// function addTwoNumbers(number1, number2)
{
    // let result = number1 + number2
    // return result // here return itself is a concept which returns a value. After using return
    // method function definition will not execute anything.
    // return number1 + number2
}

// const result = addTwoNumbers(3, 5) // here we stored a function in variable. We can store function
// in a variable is javascript.

// console.log("Result: ", result); // here we simply print the result by adding two numbers.


function loginUserMessage(username = "Sangram ") // here we assigned a default value to function definiton
// parameter. If in function definition nothing arguments are passed then it will execute default
// value.
{
    if(!username)
    {
        console.log("Please enter a username"); // here if nothing arguments or parameters are  
        // passed to function definition then it will print a warning message.
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pranav")) // here if we dont pass any values then it will return
// undefined. It will never return a null value. If we passed a empty string then it will execute
// the code and it will just return "just logged in".


function calculateCartPrice(val1, val2, ...num1) // here we use (...) which is rest operator. It is
// used in such a way that it will take as much as values written in a function and return it in a
// array format. // here we use val1 and val2, which takes values 200 and 400 and remaining values
// will be in num1. Here we pass value as parameters.
{
    return num1 // here we simply return the value in num1.
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // here we pass value as arguments.

const user = 
{
    username: "Pranav",
    prices: 299
} // here we declare values in a object.

function handleObject(anyobject) // here we pass the object in a function and use it in a function
// as a parameter.
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // here we
    // simply print the values of object.
}

// handleObject(user) // here we simply print the values of object which we declare above. 
// handleObject({
   // username: "sam",
   // price: 399
// }) // here we simply pass the values as a arguments in a function.

// const myNewArray = [200, 400, 100, 600] // here we create a array.

function returnSecondValue(getArray) // here we pass a array in a function and use it in a function
// as a parameter. Here we can give any name to parameter. 
{
    return getArray[1] // here we simply print the value of an array from basis of index. Here we
    // have to return function definition parameter not declared array. We have to focus only on
    // function definition parameter not on declared array.
}

// console.log(returnSecondValue(myNewArray)); // here we simply print the index value of an array 
// which we declare above in function.

console.log(returnSecondValue([200, 400, 500, 1000])); // here we simply assign the values to a 
// function in an array format and print the index value of an array which we give in a function.