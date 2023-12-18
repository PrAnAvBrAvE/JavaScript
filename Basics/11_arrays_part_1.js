// array

const myArr = [15, 10, 2, 8, 3, 7]
const myHeros = ["Ironman", "Superman","Batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // it gives the value of index 1.
// console.log(myHeros[1]); // it gives the value of index 1.

// Array methods

// myArr.push(20) // it add the element to last in array.
// myArr.pop() // here, we dont pass any parameters to remove a particular element. 
// It simply remove the last element from array.

// myArr.unshift(50) // it add the element to start of the array.
// myArr.shift() // it remove the starting element of the array.

// console.log(myArr.includes(9)); // it simply states that is 9 available in an array or not. 
// If available then it return boolean value true and if not then returns boolean value false.

// console.log(myArr.indexOf(12)); // it checks the element is present in an array or not. 
// If present then returns its index position and if not then returns -1.

const newArr = myArr.join() // it addds elemets of an array into a string. 
// Simply array is converted into string format. 

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1, 3) // it simply print values from index 1 to 3 where 3rd index value 
// is not included. 
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3) // it first remove the unwanted index values. Then print the wanted 
// index values from index 1 to index 3 including index 3 value also.
console.log("C", myArr);
console.log(myn2);