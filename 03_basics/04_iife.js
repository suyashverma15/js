 // Immediately invoked function Expression (IIFE) => globle scope ke pollution variable ko htane ke liye iife ka use kiya jata h

 (function chai(){
    console.log(`DB connected`);
    
 })();  // jb bhi 2 iife ek sath likhne ho first function ke end me ; jarur lgao wrna erroe aayega

 // using arrow function

 ( (name) =>{
    console.log(`DB connected two ${name}`);
    
 } )('suyash')

