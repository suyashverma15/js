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
console.log(calculateCartPrice(100,200,300,400,500));





