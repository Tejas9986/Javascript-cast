//console.log(Date);
let myDate = new Date()

// console.log(typeof(myDate));   //shows Date is OBJECT type 


// console.log(myDate);   // show date & time

// console.log(myDate.toDateString())  // shows day & date

// console.log(myDate.toLocaleString());  // shows DAte  & time in good format


let myCreatedDate = new Date(2023, 0, 25)   
//console.log(myCreatedDate.toDateString());

// In javascript the month number start from 0 not with 1.


let myTimestamp = Date.now()

// console.log(myTimestamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));  // the time is print sec and the floor is used get value without decimal

console.log(myDate.getDay());
