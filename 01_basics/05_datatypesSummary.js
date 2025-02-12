// kis tarah se data ko memory me rakha jata h aur usko kaise access kiya jata h iske basis pe data
// ka categirisation kiya jata h 1) premitive 2) non-premitive

// # primitive datatype - 7 types -> (it is call by value(that means data ka value copy krke diiya jata h insipte of reference of that data) )
//                           1) string 2) number 3)null 4) undefined 5) boolean 6) Symbol(value ko unique banae ke liye use kiya jata h)
//                           7) BigInt

// 

const score  = 100
const scoreValue = 100.3
const isLoggesIn  = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
// console.log(Id === anotherId);

// # Reference type (Non primitive): in this values ka reference memory me direct allocate kiya ja skta h)
//                               eg - Array,  Object, Function.

const player = ["rs", "vk", "msd"];
let myObj = {
    name: "Suyash",
    age: 23,
}

let myFunction = function(){
    // console.log("Hello World");
    
}


// **********************************************************************************

// Stack(primitive)       Heap(Non-primitive)

let myCtiy = "Ayodhya"
let anotherCity = myCtiy
anotherCity = "Lucknow"

console.log(myCtiy);
console.log(anotherCity);

let userOne = {
    email: "one@Paytm.com",
    transaction: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "two@google.com"

console.log(userOne.email);
console.log(userTwo.email);









