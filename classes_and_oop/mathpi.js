// it tell's us more about hidden properties of objects. By using below property we can access 
// property of particular object
const descripter = Object.getOwnPropertyDescriptor(Math,'PI') 

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    email : "chai@gmail.com",

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// by using below property we can access property of particular object.
console.log(Object.getOwnPropertyDescriptor(chai, 'email'));

// By using below property we can Add or change an object property
Object.defineProperty(chai, 'email', {
    // writable: false,
    enumerable: false,
}) 

// here if we don't want enumeration then we cannot use loop on object.
console.log(Object.getOwnPropertyDescriptor(chai, 'email' ));

// for (let [key, value]  of chai) {
//     console.log(`${key} : ${value}`);
// } // it will give error as chai is not iteratable because chai is an object. So to iterate over an
// object we use following property.

// to iterate over object we use following property
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}