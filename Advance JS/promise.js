const promiseone = new Promise(function(resolve,reject){ // here we simply created a promise by 
    // using new keyword. In promise we simply use function and in that function there are two types
    // 1st is resolve and 2nd is reject
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() // it connects the resolve directly with .then
    }, 1000)
})

promiseone.then(function(){ // here .then is directly connected to resolve. In .then we get a call-
    //back function in which any value which is created or given while creating promise are returned
    // here.
    console.log("Promise Consumed");
}) 

new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("Asynchronous");
        resolve()
    },1000)
}).then(function(){
    console.log("Executed Successfully");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log();
        resolve({user:"Pranav",email:"hello@gmail.com"}) // here we simply add the data or add the
        // parameters to resolve.
    },1000)
})

promiseThree.then(function(crazy){ // here we can assume that any data will come here because when
    // we use .then method then it comes directly in contact with resolve, so any data that is 
    // within resolve can come here so to print it we simply pass crazy in function.
    console.log(crazy); // here we can access resolve data by using object named crazy. 
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"Pranav", password:"123"})
        }
        else
        {
            reject("Error:Something went wrong")
        }
    },1000)
})

promisefour
.then(function(user){
    console.log(user.username);
})
// .then(function(username){ // here the value came as is called as chaining. The value which came 
//     // from above .then method. The above .then return the value username so we pass the username  
//     // in function
//     //console.log(username);
// }) // it is optional.
.catch(function(hello){ // here we can name value as anything we like so we name it as error. 
    console.log(hello);
})
.finally(function () {console.log("Finally is invoked")} ) // it will get call always either promise
// get resolved or rejected.

