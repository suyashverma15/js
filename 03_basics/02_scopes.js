// let a = 20;
// const b = 10;
// var c = 30;

if(true){
    let a = 20;
    const b = 10;
    var c = 30;
}

// console.log(a); // not printed
// console.log(b); // not printed
// console.log(c);  // will be printed

function one(){
        const username =  "suyash"
        function two(){
            const website = "Youtube"
            console.log(username);
            
        }
        // console.log(website); // it gives the error because it is out of scope
        two();
        
}
// one();


//..............
 // now if condition ka nested 

 if(true){
    const username = "suyash"
    if(username === "suyash"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website); //it gives the error because it is out of scope
    
 }
 // console.log(username); // it gives the error because it is out of scope
 

 // ********************************some importent topic****************

 function addone(num){
    return num + 1
 }
 console.log(addone(5));

const addtwo = function(num){
    return num + 2
} 
console.log(addtwo(5)) // agar hm addtwo function ko line 51 me likh deta to error aa jata ...hum access nhi kar pate isi ko hum hoisting bolte h ()
                        // function ko kisi variable me store krke aur function ke uper access krne ki kosis ko hoisting bolte h

