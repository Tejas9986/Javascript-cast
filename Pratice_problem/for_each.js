//forEach loop Array: Higher order functions/ methods

// const arr =[1,2,3,5,6]

// arr.forEach((val, value) => {
//     console.log(val, value);
// });

// console.log("Hello");

//find the 90+ value 

let marks = [77, 94, 89, 91, 99,];
let toppers =marks.filter((val) => {
    return val > 90;
    // if(val > 90){
    //     console.log(val)
    // }

     console.log(val);
})
///console.log(toppers);


let n = prompt("Enter the number");
let arr = []

for(i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);