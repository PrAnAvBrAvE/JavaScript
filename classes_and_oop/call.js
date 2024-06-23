function SetUsername(username)
{
    // complex DB calls
    this.username = username
    // console.log("called");
}

function createUser(username, email, password)
{
    // SetUsername(username) // here it will just give reference of above function. It is getting 
    // called and executing but its reference or execution context is getting deleted. We have to
    // hold it so we use below method.

    SetUsername.call(this, username) // here by using call method we explicitly call above function 
    // method it will hold the reference of above function method. Here, we give our this to hold 
    // the value or reference of above function method because after executing above function 
    // method, this of above function method will be vanished. So, to store the value we give our 
    // this. Even if above function method delete its properties will be in current function method
    this.email = email
    this.password = password
}

const chai = new createUser("Pranav", "123@fb.com", "xyz") 
console.log(chai);