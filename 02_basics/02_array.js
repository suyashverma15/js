const cric = ["virat","rohit","gill","boom"];
const hero = ["rk","vk","bigb","srk"];

cric.push(hero);
// console.log(cric);

// const all_superstar = cric.concat(hero);
// console.log(all_superstar);

const all_superstar = [...cric, ...hero];
// console.log(all_superstar);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("suyash")); // check given input is array or not
// console.log(Array.from("Suyash")); // convert the given string into array

// console.log(Array.from({name: "suyash"})); // this will give empty array (importent for interview)


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // 
 


