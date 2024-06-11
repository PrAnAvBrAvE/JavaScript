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

// --------------- It is first method (.then, .catch )to handle error using promise ------------- //

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
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
.then(function(username){ // here the value came as is called as chaining. The value which came 
    // from above .then method. The above .then return the value username so we pass the username  
    // in function
    //console.log(username);
}) // it is called as thennable
.catch(function(hello){ // here we can name value as anything we like so we name it as error. 
    console.log(hello);
})
.finally(function () {console.log("Finally is invoked")} ) // it will get call always either promise
// get resolved or rejected.

// -------------- It is second method (async-await) handle error using promise ----------------- // 

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function()
    {
        let error = false
        if(!error)
        {
            resolve({username:"Rahul", password:"12345"})
        }
        else
        {
            reject("Error:Something went wrong")
        }
    },1000)
})

async function consumePromiseFive() { // here, we use async-await method which is same like .then, 
    // .catch and it waits till the process or work get done and after that it will get executed
    // otherwise it will give error.
    // const asyncawait = await promisefive // here we cannot consume promisefive by using parenthesis()
    // // It is also an object. We handle it by holding it in a variable
    // console.log(asyncawait);

    try 
    {
        const asyncawait = await promisefive
        console.log(asyncawait);
    } 
    catch (error) 
    {
        console.log(error);
    }

} // if error came like this we have to use try catch block to handle it.

consumePromiseFive()

// Promise using JSON Response - 1st Method (async-await)
 
// async function getUser ()
// {
//     try 
//     {
//         const response  = await fetch('https://api.github.com/users/hiteshchoudhary') // here we 
//         // use fetch in which we pass a url. Fetch is known as object and it returns a promise.  
//         // We know that it will take time because it is a network request so we use await and   
//         // hold it's response in a variable.
//         console.log(response);
//         const data = await response.json() // here we simply parse the data because it is in a string  
//         // format and after that we hold hold that data it in a variable. Here, we use await 
//         // because we know that parsing of data will take time.
//         console.log(data);
//     } 
//     catch (error) 
//     {
//         console.log("Error: ",error);    
//     }
// }

// getUser()

// Promise using JSON Response - 2nd Method (.then, .catch)

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json() // here we parse the data which is in string and simply return it.
})
.then(function(data)
{
    console.log(data);
})
.catch(function(error) {console.log(error);})