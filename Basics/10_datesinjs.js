let myDate = new Date()
// console.log(myDate); // it just gives a date and time which unreadable
// console.log(myDate.toString()); // it gives a date and time which is readable
// console.log(myDate.toDateString()); // it just gives a date
// console.log(myDate.toLocaleString()); // it gives a date and time
// console.log(typeof myDate); // it gives typeof mydate as a object because we created a object named date using new keyword.

// There are various methods to declare a datw. Few methods are used below.
// let myCreatedDate = new Date(2023,11,17) // here in js, month starts from 0 to 11. 
// let myCreatedDate = new Date(2023, 11, 17, 6, 33)
// let myCreatedDate = new Date("2023-12-17") // it gives date in YY/MM/DD format. Here month starts from 1 to 12.
let myCreatedDate = new Date("12-17-2023") // it gives date in MM/DD/YY format. In india this format is followed.
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// timestamp is nothing but a calculation of time between days which is calculated in integer. 
// For example. if there are polls of a competition and we have to know who answer the question 
// fast as possible then we use timestamp to decide the winner.

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // it gives values of a date in miliseconds.
// console.log(Math.floor(Date.now()/1000)); // it gives value of a date in seconds.
// if we divide it by 1000 then the values comes in decimal format so to remove that we simply use
// math.floor method.

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // here we do +1 because in js month starts from 0 to 11.
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default', 
    {
        weekday:"long", // it gives us days in full format like today is sunday.
        // timeStyle:"full" // it gives time in Coordinated Universal Time.
    }
  )
);