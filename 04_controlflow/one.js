// if

const isloggedin = true;


// if(isloggedin){
//     console.log("excuted");
    
// }
// console.log("executed independently");


// const temp = 50;
// if(temp < 100){
//     console.log("temp is less than 100");
    
// }
// console.log("temp is greater than 100");

// strict equality(===) => (ye velue ke sath sath data type bhi check krta h)

// const temp = 50;
// if(temp < 100){
//     console.log("temp is less than 100");  
// }
// else{
//     console.log("temp is greater than 100");
// }



// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`user power : ${power}` );
    
// }
// console.log(`user power : ${power}` );

// *****shorthand Notation*******************
 
// const balance = 1000
//  if(balance > 500) console.log("execute"); // ; is must and must be in single line

// const balance = 1000;

// if(balance < 500){
//     console.log("less than 500");   
// } else if(balance < 750){
//     console.log("less than 750");   
// } else if(balance < 900){
//     console.log("less than 900"); 
// }else{
//     console.log("les than 1200");
    
// }

const userloggedin = true
const debitcard = true
const loggedinfromGoogle = false
const loggedinfromemail = true

if(userloggedin && debitcard){
    console.log("allow to buy");
    
}

if(loggedinfromGoogle || loggedinfromemail){
    console.log("user logged in");
    
}
 


