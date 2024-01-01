// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to control the pollution of global scope.

(function fun()
{
    // Named IIFE
    console.log(`DB CONNECTED` ); // here we simply print the string

})(); // here first parenthesis is for function definition and second parenthesis is for function
// execution. Always remember that if we are declaring two iffe's we have to give semicolon after
// first iife. without it, it will give error. Here we explicitly give semicolon to end the code.

( (name) => 
{
    // Simple/Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Pranav') // here we declare a function in format of array function.
