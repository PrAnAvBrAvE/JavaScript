const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // here we simply push the elements stored in dc_heros array 
// to marvel_heros array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // here we accessed the element of array's array.

// const allHeros = marvel_heros.concat(dc_heros) // here, it combines all elements of both array into 
// new array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // here, we use spread operator that is (...)
// operator to combine both elements present in arrays into new array. This operator is used 
// commonly in js to combine elements of two or more arrays into one array. Here each one element is
// individual.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity) // here, we want all elements in a single
// array but problem is that there is array inside a array and there is an array inside array's 
// array. so to combine all elements into a single array we use #flat method. In flat method we 
// have to give a proper depth to combine elements but we can use infinity parameter to make it 
// look easy. 
// console.log(real_another_array);

// console.log(Array.isArray([1,2,3])) // it simply checks the given value is array or not. If yes 
// it returns boolean true value and if not then it returns boolean false value.
// console.log(Array.from("Pranav")) // it simply convert string into an array.
// console.log(Array.from({name: "Pranav"})) // interesting. Here, we have to specify that make an 
// array from key's(name) or values("Pranav") 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // it returns a new array from set of elements.