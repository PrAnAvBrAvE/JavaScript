// for in loop

const myObject = 
{
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
} // here we create an object. for in loop is best suitable for objects.

for (const key in myObject) // here we use for in loop.
{
    console.log(`${key} shortcut is for ${myObject[key]}`); // here we print the object.
}

const programming = ["js", "rb", "py", "java", "cpp"] // here created an array.

for (const key in programming) // here we use for in loop.
{
    // console.log(programming[key]); // here we print the array using for in loop. If we just print 
    // the key here then it will print the keys of arrays.
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) 
{
    console.log(key(map));
} // here we print the value of map but it will don't print anything because while using for in loop
// we cannot iterate through map.