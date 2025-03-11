// const useremial = "a@abc.com";
// if (useremial) {
//     console.log("got the emial");   
// }
// else{
//     console.log("dont have email");
    
// }

// Flasy_value => false, 0, -0, "", NULL, BigInt(0n), undefined, NaN(not a number)
// except Falsy_value all is truthy value.
// Truthy_value => "0","false", " ",[]empty array, {}object, function(){}   

// const useremial = [];
// if(useremial.length===0){
//     console.log("Array is empty");
// }

// // for object

// const emptyObject = {}
// if(Object.keys(emptyObject).length === 0){    //Object.keys(emptyObject)=> this will give object element in the array 
//     console.log("object is empty");
// }

// nullish coalescing Operator(REPRESENTED AS ??) => in this we mailny focus on 2 keywords (NULL & UNDEFINED)

let val1;
// val1 = 5 ?? 10   // output will be 5
// val1 = null ?? 20   //  output will be 20
// val1 = undefined ?? 30  // output will be 30
 val1 = null ?? 40 ?? 50    // output will be 40
console.log(val1);


// **** Terniary Operator****************


// condition ? true : false (this is syntax)

const TeaPrice = 100;
TeaPrice > 80 ? console.log("Price is less than 80") : console.log("Price is greater than 80");

 
