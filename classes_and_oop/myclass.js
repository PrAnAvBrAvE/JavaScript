// // ES6

// class User { 
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("pranav", "pranav@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

// if class functionality is not available then we can simply create user and its properties using
// function.

function User(username, email, password){ // here we call a function
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){ // here we created a function manually
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("sujay", "sujay@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());