// const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (it) => it + 10)
// console.log(newNums);

// chaining method

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers.map( (it) => it * 10)
                         .map( (it) => it + 1)
                         .filter( (it) => it >= 40)
console.log(newNums);


