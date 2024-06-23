// below is object literal. Objects are nothing but a collection
const user = {
    username : "Pranav",
    logincount : 8,         // this all are properties of object
    signedIn  : true,

    getDetails : function() { // this is the method of an object
        // console.log("Here, we get the details!!!");
        // console.log(`Username: ${this.username} `); // this keyword refers to the current context 
        // of code. Most typically, it is used in object methods, where this refers to the object 
        // that the method is attached to,
        // console.log(this);
    }   

}

// console.log(user.username);
// console.log(user.getDetails());

// constructor function woking = It allows user to create multiple instances from one object. 

// const Promiseone = new Promise() // here basically the new keyword is a constructor function. In
// JS the new keyword helps us to create a new context which is called as constructor function.
// const date = new date() 

// How do these constructor functions work?

function User(username, logincount, isloggedin) 
{
    this.username = username
    this.logincount = logincount // all this are properties of object
    this.isloggedin = isloggedin

    this.details = function() // it is method of object
    {
        console.log(`Welcome ${this.username}`); 
    }

    return this // It is optional. If we use it or not use it, it doesn't matter. The value will 
    // get automatically printed implicitly. 

}

const data = new User('pranav', 10, 2)
const data1 = new User('sangram', 12, 5) // here this overrides the value of data even though it is 
// not printed. So, to avoid it we use new keyword which everytime creates a new context for each 
// function, object, promise, etc. Also it is referred as constructor function which gives you a new
// copy or new instance and whatever we do in it is belongs to that only, the original one or others
// cannot get disturbed.

// console.log(data);
// console.log(data1);
// console.log(data1.constructor); // here constructor property is nothing but a reference of your 
// context,data,function,object,etc.

console.log(data instanceof User); // by using instaceof operator we can check that data or data1 is 
// different from each other or not.

// new keyword info = 
// step 1 : when we use new keyword an empty object is created which is known as instance.
// step 2 : constructor function is called due to new keyword and it packs the all arguments and 
// gives to user.
// step 3 : here, all arguments which are written gets injected in this keyword.
// step 4 : you gets the arguments or data in function.