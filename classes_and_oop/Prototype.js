// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); // here we want method, not property. It is solved using method
// at last of this code.

// it is a array
let myHeros = ["thor", "spiderman"] 

let heroPower = // it is a object
{
    // this both are properties
    thor: "hammer", 
    spiderman: "sling",

    // this is method
    getSpiderPower: function() 
    {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// here we create a function of object 
Object.prototype.Rahul = function() 
{
    console.log(`Rahul is present in all objects`);
} // this power can be accessed by everyone like array,string,etc. because all are objects.

Array.prototype.heyRahul = function() // here we create a function of array.
{
    console.log(`Rahul says hello`);
} // this power cannot accessed by anyone like string,function,etc. because this power is only given
// to array only. But it can give access to the path where it comes from.

// heroPower.Rahul() 
// myHeros.Rahul() // here we can access object function because all things which goes through object 
// can be accessed by anyone like array,string,etc. because all are objects.
// myHeros.heyRahul() // it will run only for array because its power is cannot accessed by anyone like 
// string,function,etc. because this power is only given to array only. But it can give access to 
// the path where it comes from.
// heroPower.heyRahul() 

// Prototypal Inheritance. It is old sytanx and outdated approach for getting properties of one
// object into another using __proto__.

const User = 
{
    name: "Pranav",
    email: "123@google.com"
}

const Teacher = 
{
    makeVideo: true
}

const TeachingSupport = 
{
    isAvailable: false
}

const TASupport = 
{
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // here by using __proto__ we access the object - Teachingsupport and
    // its properties.
}

Teacher.__proto__ = User // here by using __proto__ we access the object - User and its properties.

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // here teachingsupport will access all properties
// of teacher which means it will inherit propeties of teacher into it.

let Username = "Clash of clans"

String.prototype.trueLength = function() // this will add new method which is truelength
{
    console.log(`${this}`); // it refers to the string instance on which trueLength was called
    console.log(`True length is: ${this.trim().length}`); // here we use trim method to remove white
    // spaces from both sides of string.
}

Username.trueLength()
"Pranav is brave".trueLength()
"Cold Coffee".trueLength()