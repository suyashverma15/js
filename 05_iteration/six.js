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

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = []
// nums.forEach( (it) => {
//     if(it > 4){
//         newNums.push(it)
        
//     }
// })
// console.log(newNums);


const books = [
    {title: 'book one', gener: 'fiction', publish: 1981, edition: 2004},
    {title: 'book two', gener: 'non-fiction', publish: 1992, edition: 2008},
    {title: 'book three', gener: 'history', publish: 1999, edition: 2007},
    {title: 'book four', gener: 'non-fiction', publish: 1989, edition: 2010 },
    {title: 'book five', gener: 'science', publish: 2009, edition: 2014},
    {title: 'book six', gener: 'fiction', publish: 1987, edition: 2010},
    {title: 'book seven', gener: 'history', publish: 1986, edition: 1996},
    {title: 'book eight', gener: 'science', publish: 2011, edition: 2016}

];

// let userBooks = books.filter( (bk) => bk.gener === 'science');

// userBooks = books.filter( (it) => {return it.edition >= 2002});

const userBook = books.filter( (it) => {
    return it.gener === "fiction" && it.edition >= 2000
})
console.log(userBook);








