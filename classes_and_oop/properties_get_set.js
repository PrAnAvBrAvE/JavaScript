// Old syntax means getters and setters are set through properties. 

// It is function based syntax.

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', { // here we give 'this' by ourselves. It does not have 
        // this by itself. Second parameter is given which we want to override it.
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const Pranav = new User("Pranav@gmail.com", "chai")

console.log(Pranav.email);

console.log(Pranav.password);