// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); // here we want method to make not property.

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
myHeros.heyRahul() // it will run only for array because its power is cannot accessed by anyone like 
// string,function,etc. because this power is only given to array only. But it can give access to 
// the path where it comes from.
// heroPower.heyRahul() 