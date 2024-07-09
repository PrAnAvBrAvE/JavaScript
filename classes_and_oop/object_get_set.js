const User = {
    _email: 'Sangram@gmail.com', // here _ defines private property.
    _password: "abc",

    get email(){ // here, getter override the value
        return this._email.toUpperCase()
    }, 

    set email(value){ // Here, for setter, email is not a method it is property.
        this._email = value
    }
}

const Hello = Object.create(User)
console.log(Hello.email);
console.log(Hello.password);