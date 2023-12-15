// stack (Primitive)

let myname = "Pranav"

let anothername = myname
myname = "Panu"

console.log(myname);
console.log(anothername);

// Heap (Non-Primitive)

let emp1 =
{
    empname: "Sujay",
    age: 20
}

let emp2 = emp1

emp2.age = 21

console.log(emp1.age);
console.log(emp2.age);