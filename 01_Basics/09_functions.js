function myfun(){
    console.log("hello functions, have fun!");
}

// myfun()
for(let i =0; i <5; i++){
    //console.log(myfun());
  //  myfun()

}

// function sum(num1, num2){
//     console.log(num1 + num2);
// }

// sum(4, 7)


function sum(num1, num2){
    // let result = num1+num2    // its has to declare in function then it will print out otherwise it gives "undefined"
    // return result

    return num1 * num2
}
const result = sum(6, 8)
// console.log("Result :", result);


function User(username){
    return `${username} user logged in`
}

console.log(User("Tejas Waditke"));
