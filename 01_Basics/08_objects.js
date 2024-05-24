//singleton
// declare with literals they are not singleton but it made with constructor(Object.create) then it is singleton

//  object literals

mysym = Symbol("mykey1")   // for this also to line(10)
const JsUser = {
    name : "Tejas",
    age : 22,
    [mysym]:"Mykey5",   // have to add square bracket([]) to sign out symbol key
    email : "tejaswaditke@gamil.com",
    area : "Rahatani",
    isLoggedin : false,
    lastLoginDays : ["Mon", "Tues", "Wed"]
}

// console.log(JsUser["name"]);
// console.log(JsUser.area);
// console.log(JsUser.isLoggedin);
// console.log(JsUser.lastLoginDays[2]);
// console.log(JsUser[mysym]);
JsUser.email = "tejaswaditke35@gmail.com"
// Object.freeze(JsUser);

JsUser.email = "tejaswaditke72@gmail.com"
//console.log(JsUser.email);

JsUser.greeting = function(){
    //console.log(`Hello JsUser `);
}

JsUser.greetingTwo = function(){
    //console.log(`Hello JsUser ${this.lastLoginDays}`);  // 'this' is used to use key of OBJECT directly
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// use case use the dot to declare the object values or key
// use [] for 'symbol' to declare inside the object


// Non singleton Objects

// const tinderUser = new Object() // its singleton object

const tinderUser = {}   // its non singleton object

tinderUser.Id = "Tej22"
tinderUser.name = "Hitesh"
tinderUser.isLoggedin = true
//console.log(tinderUser.isLoggedin);

const tcs = {
    employeeId : 1267,
    fullName:{
        firstName : "Sam",
        middleName : "Wilson",
        lastName : "Potter"
    },
    domain : "techie support",
    isLoggedoff : false,
}

// console.log(tcs.fullName.middleName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)    // assign operator is used

const obj3 = {...obj1, ...obj2}     // (...) spread operator is used  it is easy
// console.log(obj3);  // o/p= combines in obj3.

// console.log(Object.entries(tinderUser));  // keys and values of object will print

// console.log(tinderUser.hasOwnProperty('isLoggedin'));



//############   OBJECT DE-STRUCTURED  #################################################

const course = {
    courseName : "javascript Tutorial",
    instructor : "Hitesh",
    timeSpan : "2 months",
}

console.log(course.instructor)  // simple method regular use

const {timeSpan: Time}= course  // de-structured method
console.log(Time)



// {
//     "name":"tejas",
//     "coyrsename: 'js in hindi",
//     'price': "free"
// }







