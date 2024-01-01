const user = 
{
    username: "Pranav",
    price: 999,

    welcomeMessage: function() 
    {
        console.log(`${this.username} welcome to website`);// here we use this keyword to refer to 
        // current context of scope.
        console.log(this); // it will print the all current context of object and will print its 
        // values.
    }
}

user.welcomeMessage() // here we simply call the function and it will print the values of objects
// which we declared inside a object.
// user.username = "Sangram" // here we assign new value to username.
// user.price = 1999 // here we assign new value to price.
// user.welcomeMessage() // here again we call the function and it will print the values of object
// which we declared above.

// console.log(this); // here it will print empty because we are in node environment and in node 
// environment this keyword will refer to empty object.

// function fun()
{
    // console.log(this); // here we declared this keyword inside a function so we get lots of values.
    // Also we print the values which are inside a this keyword.
}

// fun() // here we simply call the function definition.

// function fun()
{
    // let username = "Pranav"
    // console.log(this.username); // it will print undefined because we cannot use this keyword in
    // function to access any type of value. We use it only in object or simply this keyword will
    // work in object.
}

// fun() // here we simply call the function definition.

// const hello = function () // here we declare a function in a variable or stored it in a variable.
{
    // let username = "Pranav"
    // console.log(this.username); // here it will also print value undefined.
}

// const hello =  () => // here we declared a function in format of arrow function.
{
    // let username = "Pranav"
    // console.log(this); // here it will print empty brackets.
}

// hello()

// const addTwo = (num1, num2) => 
{
    // return num1 + num2 
} // it is a basic arrow function. In curly braces in arrow function we have to use return keyword. 

// const addTwo = (num1, num2) =>  num1 + num2 // it is a implicit return.

// const addTwo = (num1, num2) => ( num1 + num2 ) // In parenthesis in arrow function we do not have
// to use return keyword.

// const addTwo = (num1, num2) => {username: "Pranav"} // here we return object using parenthesis. 
// Always remeber to use parenthesis while printing or returnin the object in arrow function.

// console.log(addTwo(6, 4))

// const myArray = [2, 5, 3, 7, 8] // here we simply create a array and add values in it.

// myArray.forEach() // here, there are lots of methods in array, one of is forEach loop. In forEach 
// loop we sometimes use arrow function, classic funtion. It is an simple overview of loop.