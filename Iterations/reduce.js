// Reduce method in javascript.

// here, in reduce method there are two values namely accumulator and current value. Here accumulator
// is empty variable and it that we pass the initial value which we give. Simply accumulator will
// take initial value and add it with current value. After that, the result which came, will become
// accumulator value and again it will add it with current value. It will go on till array become
// empty. At last, when array will become empty, then we simply print the value.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) // here we use reduce method on basic 
// function which we stored in a variable.
// {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    // return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // here we use reduce method on arrow  
// function which we stored in a variable.

// console.log(myTotal);

const shoppingCart = 
[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, hello) => acc + hello.price, 0)

console.log(priceToPay);