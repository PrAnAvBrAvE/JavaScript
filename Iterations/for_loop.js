// for loop 

for (let i = 0; i <= 10; i++) 
{
    const element = i;
    if (element == 5) 
    {
        // console.log("5 is best number");
        // break
    }
    // console.log(element);
    
}

// console.log(element); here we cannot print the value of element because it is called outside the
// scope.

for (let i = 1; i <= 10; i++) 
{
    // console.log(`Outer loop value: ${i}`); // here we print the outer loop.
    for (let j = 1; j <= 10; j++) 
    {
        // console.log(`Inner loop value ${j}`); // here we print the inner loop.
        // console.log(i + '*' + j + ' = ' + i*j ); // here we multiply i to j.
   }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length); // here we simply print the length of myArray.

for (let index = 0; index < myArray.length; index++) 
{
    const element = myArray[index];
    // console.log(element); // here we print the value of myArray.
    
}

// break and continue

for (let index = 1; index <= 20; index++) 
{
    if (index == 5) 
    {
        // console.log(`Detected 5`);
        break // here when we detect the value 5, then we simply break the loop and dont print the
        // value after 5 and come out of the for loop.
    }
    // console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) 
{
    if (index == 5) 
    {
        console.log(`Detected 5`);
        continue // here we just skip the iteration 5 and dont print when we detect it.
    }
    console.log(`Value of i is ${index}`);
    
}