// Getter and setter methods in JavaScript are used to control the access and modification of object
// properties. By using setter we store original value in database but when anyone want that value
// then by using getter we can give another value to user where they can work on another value 
// without changing the original value. 

// It is new syntax
 
class User {

    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // by using getter method we get the property value. If we use getter method then it is  
    // compulsory to use setter method. Here, getter always returns something.
    get email(){
        return this._email.toUpperCase() // here, _email becomes a private property. Here, when 
        // anyone try to access the email then getter method will give value in uppercase only.
    }

    // by using setter method we set the property value. Here, setter cannot be returned.
    set email(value){
        this._email = value // Here, _email becomes a private property. Here, setter will set the 
        // value as it is in database. 
    }

    get password(){
        // return this._password
        return `${this._password}Pranav` // it will create a new property. Here, we pass a password
        // manually and when anyone try to access or get our password then they will don't know 
        // what exact password is and will give another value to work on without changing the 
        // original value.
    }

    set password(value){
        this._password = value // By using setter we store original value in database.
    }
}

const Hello = new User("Pranav@gmail.com", "123abc")
// console.log(Hello.email);
console.log(Hello.password);