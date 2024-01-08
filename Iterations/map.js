// Map in javascript.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {num + 10}) // here we use map method and stored it 
// in a variable. Map automatically returns the value. It is same as filter, if we open a scope then
// we have to type return keyword to get the value otherwise it will return undefined.

// Below we use chaining method in javascript.

const newNums = myNumbers
                .map((num) => num * 10 ) // here it will multipy the num value by 10.
                .map( (num) => num + 1) // here it will add 1 to latest value of num after
                // multiplying it with 10.
                .filter( (num) => num >= 40) // here, it will check the condition.

console.log(newNums);