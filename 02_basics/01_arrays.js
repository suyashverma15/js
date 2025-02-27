//Array

const myArray = [1,2,4,5,6,7,9,8];
const myHeros = ["vk", "msd", "rs"];

const myArray2 = new Array(1,2,3,4,5,6); // another declaration method

// console.log(myArray[2]);

// Arrays method

// myArray.push(6);
// myArray.push(10);
// myArray.pop(); // remove the last value of the array

// myArray.unshift(22); // add the value in the begining of array by which all the index of value will be chnage
// myArray.shift() // remove the value form the starting of index of array

// console.log(myArray.includes(10)); // value is present or not
// console.log(myArray.indexOf(5));





// console.log(myArray);


// const newArr = myArray.join(); // adds all the element of an array into string
// console.log(myArray);
// console.log(typeof newArr);

// slice and splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3); // range from 1 to 3 but not include 3
console.log(myn1);
console.log("B ", myArray);
 

const myn2 = myArray.splice(1, 3);
console.log(myn2);



