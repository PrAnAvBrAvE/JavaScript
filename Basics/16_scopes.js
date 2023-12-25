//var c = 300 // here, in js var is not local to the scope. It is global to the scope. So we avoid
// it using in js. Insted of it we use let to declare a variable and assign values to it.
let a = 300
if (true) 
{
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);


function one()
{
    const username = "hitesh"

    function two()
    {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) 
{
    const username = "hitesh"
    if (username === "hitesh") 
    {
        // const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num)
{
    return num + 1
}

// addTwo(5)
const addTwo = function(num)
{
    return num + 2
}