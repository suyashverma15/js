// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("print 5"); 
//     }
//     console.log(i);   
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 2; j < 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop value ${i}`);

       // console.log(i + '*' + j + '=' + i*j);
       
    }
}

let myArray = ["falsh", "batman", "thor"]
//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);   
}


// break and continue   

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`5 is detected`);
//         break;
//     }
//     console.log(`value of i is ${i}`);    
// }


for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`5 is detected`);
        continue;
    }
    console.log(`value of i is ${i}`);    
}

