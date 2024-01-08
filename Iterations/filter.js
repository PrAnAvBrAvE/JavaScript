const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => // here we created an for each loop and stored it in value
// varible.
{
    // console.log(item);
    return item
} ) // Here we get to know that for each does not return any value.

//console.log(values);

// Filter in Javascript

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => // here we use filter method and store it in a varibale.
// filter method is nothing but use to give condition and if condition is true it will return value
// and if condition is false then it will not return anything.
// {
    // return num > 4
// } ) // always remember that filter return the values unlike for each loop.

const newNums = []

myNums.forEach( (num) => 
{
    if (num > 4) 
    {
        newNums.push(num)
    }
} )

// console.log(newNums);

const books =
[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter( (bk) => 
{ 
    return bk.publish >= 1995 && bk.genre == "Science"
})

console.log(userBooks);