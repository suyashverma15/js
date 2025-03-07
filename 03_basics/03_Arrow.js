// this keyword is reffered to the current context.

const user = {
    username: "suyash",
    price: 999,
    welcomeMassage: function(){
        console.log(`${this.username}  , Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMassage()
// user.username = "Sam"
// user.welcomeMassage();

// console.log(this);

//************** function **************

// function chai(){
//     let username = "suyash"
//     console.log(this.username);  // function ke andar this keyword gives undefined 
    
// }
// chai()


// const chai = function(){
//     let username = "suyash"
//     console.log(this.username);
// }
// chai()

//**********Arrow Function */

// const chai = () =>{          // this is arrow function declaration method
//     let username = "suyash"
//     console.log(this.username);
// }
// chai()


// const addTwo = (num1, num2) => {
//         return num1 + num2
// }
// console.log(addTwo(3,4));

//*********another method for arrow function */


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "suaysh"})   // object on arrow function 




console.log(addTwo(3,4));






