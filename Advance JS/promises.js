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