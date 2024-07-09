class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // here we use static keyword because we don't want to access this method to any object which
    // instantiates from this class. Static keyword will prevent it from that. For example if we
    // want to create a unique id for particular person and we don't want it to give to another 
    // person same id, so we use static keyword to avoid it or prevent it.
    static createId(){
        return `123`
    }

}

const Hello1 = new User("Pranav")
// console.log(Hello1.createId())

class Teacher extends User {
    constructor(username, email){
        super(username) // super keyword will call constructor of parent class that is username.
        this.email = email
    }
}

const Hello2 = new Teacher("Sangram", "Sangram@gmail.com")
Hello2.logMe(); // here we call method
// console.log(Hello2.createId());