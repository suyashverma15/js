// const coding = ["js","cpp","java","py","js"]

// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
    
// })
// console.log(value);


// const nums = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = nums.filter( (it) => it > 4)   // in the line 15 when we write {} swe must use return keyword

// const newNums = nums.filter( (it) => {
//     return it > 4
// })

// console.log(newNums);


// print upper array using foreach loop

const nums = [1,2,3,4,5,6,7,8,9,10];

const newNums = []
nums.forEach( (it) => {
    if(it > 4){
        newNums.push(it)
        
    }
})
console.log(newNums);




