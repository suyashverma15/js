// for of    loop (this is array specific loop)

// ["","",""] // string inside array
// [{},{},{}] // object insied array

// for (const element of object) {   // declaration of for of loop
    
// }

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     // console.log(num);
    
// }

// ***********for of loop for string ******************

// const greetings = "Hello World!";
// for (const greet of greetings) {
//     if(greet == " "){
//         console.log(" space is detected");
        
//         continue;   
//     }
//     console.log(`Each char is ${greet}`);
    
// }

// map


const map = new Map()
map.set('IN', "India")
map.set('usa', "United State Of America")
map.set('Fr', "France")
 // console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key,value] of map) {
    console.log(key, ':-' , value);
    
}

// for of loop for object -> omyObject is not iterable

const myObject = {
    'game1': 'bgmi',
    'game2': 'nfs'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}

