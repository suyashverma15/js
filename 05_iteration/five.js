// for each loop

const coding = ["js","cpp","java","py","js"]

// coding.forEach( function (items){
//     console.log(items);
    
// })

// now using arrow function

// coding.forEach( (item) => {
//     console.log(item);
    
// })


// function printMe(items){
//     console.log(items);   
// }
// coding.forEach(printMe)

// coding.forEach( (items, index, arr) => {
//     console.log(items, index, arr );
    
// })



const myCaoding = [
    {
        languageName: "javascript",
        languuageFileName: "js"
    },
    {
        languageName: "c++",
        languuageFileName: "cpp"
    },
    {
        languageName: "pthon",
        languuageFileName: "py"
    }
]
myCaoding.forEach( (item) => {
    console.log(item.languageName);
    
})



