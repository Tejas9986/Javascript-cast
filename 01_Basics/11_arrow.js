//this; function  
        // to represnt current contest


const user = {
    userName : "Hitesh",
    price : 999,

    welcome : function() {
        console.log(`${this.userName}, welcome to website`) // this is used to represnt current contest
       console.log(this);
    }
   
}

// console.log(user.welcome());

// console.log(this);

// user.userName = "Tejas"
// user.welcome();


// const chai = function() {
//     let username = 'tejas'
//     console.log(this);
// }


// Arrow function

const chai = () => {
    let username = 'tejas'
        console.log(this);
}

// chai();

// simple format arrow function
// const sum = (num1, num2) => {
//     return num1 + num2
// }

// console.log(sum(2, 6));

// implicit type of arrow functiion // no need to put parenthisis {}

// const sum = (num1, num2) => num1 + num2

// console.log(sum(3, 8));

// curly braces, 
// const sum = (num1, num2) => (num1 + num2)    // if` `u add {} then you have used return

// console.log(sum(3, 8));

//  for object

const sum = (num1, num2) => ({username : "tejas waditke"});  // u can't use directly parenthisis have to rap into curly braces

console.log(sum(3, 8));

