const name = "Suyash"
const repoCount = 30
//  console.log(name + repoCount + " Vlaues"); // this is old version. 
 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   // this is new and best methio to  print 


const gameName = new String("Suyash-verma-com")
// console.log(gameName[0]); // letter position in string
// console.log(gameName.__proto__);  

// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); // convert string in uppercase

// console.log(gameName.charAt(3)); // this will give the char at 3rd index in the string

// console.log(gameName.indexOf('y')); // this will give the index of char y  in the string


const newString = gameName.substring(0,4);
//console.log(newString);

// const anotherString = gameName.slice(-6,4); // in the slice we can use negative value . It will count reverse
// console.log(anotherString);

const newStringOne = "   Suyash      "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // trim will remove the space from start and end both  

const url = "https://suaysh.com/suyash%20verma";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar')); // this will giive true or false value on the basis of stirng


console.log(gameName.split('-')); // this will convert into array based on '-'










