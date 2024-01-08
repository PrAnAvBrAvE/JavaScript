// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"] // here we created an array.

coding.forEach( function (val) // here we use for each loop. It is an method of an array. It is a 
// callback function. In callback function there is no name to a function.
{
    // console.log(val);
} )

coding.forEach( (item) => // here we created an array function.
{
    // console.log(item);
} ) // here we just print the value of an array.

function printMe(item) // here create an function.
{
    console.log(item);
}

// coding.forEach(printMe) // here we print value of an array by passing function in it. 

coding.forEach( (item, index, arr)=> // here we create an array function using for each loop.
{
    // console.log(item,index, arr); // here we first print the item of an array then index of it and 
    // then print the whole array.
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
] // here we create an array and inside that array we take multiple objects. This common scenario is 
// used in for each loop multiple times.

myCoding.forEach( (item) => 
{    
    console.log(item.languageFileName); // here we simply access the arrays objects value and print 
    // it.
} )