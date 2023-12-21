// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // it is a primitive as well as unique datatype.

const JsUser = 
{
    name: "Pranav",
    "full name": "Pranav Patil", 
    [mySym]: "mykey1", // if we want to use symbol we have to use compulsory square brackets. without
    // using square notations symbol is a string not a symbol.
    age: 20,
    location: "Pune",
    email: "pranav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // it is second way to define email.
// console.log(JsUser["full name"]) // here we cannot access the full name with .(dot) because we 
// declare the full name as a string, so to access it we use [] square notations and in that square
// notations we give value in string or in double quotes "". 
// console.log(JsUser[mySym]) // if we want to access symbol we have to use square brackets compulsory.

JsUser.email = "Pranav@chatgpt.com"
// Object.freeze(JsUser) // here it freeze or lock the object which means even if we change the value 
// of any key's like here we change value of key "email". Even though we change the value of email
// the changed value will not reflect in email because we already lock the object.
// JsUser.email = "Pranav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`); // here, we want to reference a name which is in 
    // object. To refer it we use backticks which is string interpolation.
}

console.log(JsUser.greeting()); // if we give just . then it will not execute function and when we
// not use parenthesis then it will return just function returnback which means function reference. 
console.log(JsUser.greetingTwo());