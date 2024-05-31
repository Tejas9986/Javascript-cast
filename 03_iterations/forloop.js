// forloop

for(let i = 0; i <= 10; i++){
    let element = i
    if(i==5){
       // console.log("5 is equal to index");
    }
    // console.log(element);
}



for(let i = 0; i<=10; i++){
    //console.log(`Outer loop value is : ${i}`);
    for(let j = 1; j<=10; j++){
       // console.log(i, '*', j, '=', i*j);
    }
}

// Using Arry fun
let myArray = ["flash", "batman", "Ironman", "Hulk"]

console.log(myArray.length);
for(let i=0; i<myArray.length; i++){    // in array u cannot put "<=" it will print undefined
    const element = myArray[i]
    console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}