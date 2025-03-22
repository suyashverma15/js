// const nums =  [1,2,3,4]

// const TotalSum = nums.reduce( function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and cuuVal: ${currentValue}`);
    
//     return accumulator + currentValue;
    
// },0);  // this zero indicates the initial value if accumulator.. this can be take as per your desire
// console.log(TotalSum);


// now try with arrow function


// const nums =  [1,2,3,4]

// const TotalSum  = nums.reduce( (acc, currVal) => (acc + currVal),0 ) 
// console.log(TotalSum);


const ShoppingCart = [
    {
        ItemName: "java",
        ItemPrice: 2999,
    },
    {
        ItemName: "cpp",
        ItemPrice: 1999,
    },
    {
        ItemName: "devOps",
        ItemPrice: 3999,
    },
    {
        ItemName: "ds",
        ItemPrice: 13999,
    },
]

const PriceToPay = ShoppingCart.reduce( (acc, price) => (acc + price.ItemPrice),0)
console.log(PriceToPay);

