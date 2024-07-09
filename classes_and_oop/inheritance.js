class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Hello1 = new Teacher("Pranav", "Pranav@teacher.com", "123")

Hello1.logMe()

const Hello2 = new User("Sangram")
Hello2.logMe()

console.log(Hello1 instanceof User);