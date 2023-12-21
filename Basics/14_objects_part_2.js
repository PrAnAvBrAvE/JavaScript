// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123"
tinderUser.name = "Pranav"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // here we simply print the values of tinderUser.

const regularUser = 
{
    email: "Pranav@gmail.com",
    fullname: 
    {
        userfullname: 
        {
            firstname: "Pranav",
            lastname: "Patil"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // here we print objects value of 
// objects values value.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // here we simply combine the both objects value and print it.
// const obj3 = Object.assign({}, obj1, obj2, obj4) // here we use assign() method to combine 
// objects value and print it/

const obj3 = {...obj1, ...obj2, ...obj4} // here we use (...) operator to combine objects value in one object
// and print it.

// console.log(obj3);


const users = 
[
    {
        id: 1,
        email: "Pranav@gmail.com"
    },
    {
        id: 2,
        email: "Sangram@gmail.com"
    },
    {
        id: 3,
        email: "Sujay@gmail.com"
    },
]

users[1].email
// console.log(users[1].email); // here we simply print objects value which is in array format.

// console.log(tinderUser); // here we simply print key-value as a pair.

// console.log(Object.keys(tinderUser)); // here we simply print keys of objects in array format.
// console.log(Object.values(tinderUser)); // here we simply print values of objects in array format.
// console.log(Object.entries(tinderUser)); // here we simply print key-value of objects in pair in
// array format.

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // here we simply check that if there is any 
// value for "isLoggedin" in an object. If yes then we will simply return boolean value true and 
// if not then we simply return the boolean value false.

// Destruturing of Objects in react.

const course = 
{
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Pranav"
}

// console.log(course.courseInstructor); // here we simply print object key's value where key = 
// courseInstructor and value = "JS in hindi".

// const {price: Price} = course // it is another method to print the object key's value where key =
// price and value = "999".
// console.log(Price);

// API's in JS, It is also concept of JSON(Javascript Object Notation)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } // here key's and values are written in string only. Here in API's there are no names to 
// objects. Here we sometimes get API's in object format.

[
    {},
    {},
    {}
] // Here, we sometimes get API's in array's format as well.