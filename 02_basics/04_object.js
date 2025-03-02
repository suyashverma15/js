// const tinderUser = new Object()  // singleton object

const tinderUser = {} // non singleton object
tinderUser.id = "123abc"
tinderUser.name = "xyz"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularuser = {
    email : "xyz@google.com",
    fullname: {
        username:{
            firstname: "suyash",
            lastname: "verma"
        }
    }

}

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.username);
// console.log(regularuser.fullname.username.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3} // this is spread method  and we will use it most of the time
// console.log(obj4);

const user = [
    {
        id:1,
        email:"suyash@google.com"
    },
    {
        id:2,
        email2:"gyhu@fh.com"
    }
]

user[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename: "javascript",
    fee: "999",
    courseInstructor: "Hitesh"
}
const {courseInstructor} = course
console.log(courseInstructor);

//api
{
    "name": "suyash",
    "coursename":"javascipt",
    "fee":"free"
}









