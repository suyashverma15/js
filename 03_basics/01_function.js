// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);   
// }

 // addTwoNumbers(3,4)

 function addTwoNumbers(number1, number2){
   const res = number1 + number2
   return res;

}

const res = addTwoNumbers(3,4)
// console.log("Result :",  res);

function loginUsermessage(username){
    return  `${username} just loggedin`
}
// console.log(loginUsermessage("Suyash"));

// function calculateCartPrice(...num1){  // (... is rest operator)
//     return num1;
// }
// console.log(calculateCartPrice(200,300,100,400));

function calculateCartPrice(val1, val2, ...num1){
  return num1;
}
// console.log(calculateCartPrice(100,200,300,400,500));

const user = {
  username: "suyash",
  price: 199
}
function handleobject(anyobject){
    console.log(`user name is: ${anyobject.username} and price is: ${anyobject.price}`); 
}
// handleobject(user);

// handleobject({
//   username: "sam",
//   price: 199
// })


// array

const newArry = [100,200,300,400];

function  returnSecondValue(getArray){
    return getArray[1];
}


// console.log(returnSecondValue(newArry));  

// another method 

console.log(returnSecondValue([100,200,300,400]));







