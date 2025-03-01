// singleton -> jb bhi constructor ke through object banta h to singleton bnta hai

// Object.create     -> creating the object using constructor method

// Object literals

const mysymb = Symbol("key1")

const Jsuser = {
    name: "suyash",
    age: 24,
    email: "suyash@google.com",
    location: "Delhi",
    isloggedIn: false,
    lastLoginDate: ["Monday", "Saturday"],  
    "fullname": "Suaysh Verma", 
    [mysymb]: "mykey1"     
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["fullname"]);
// console.log(Jsuser[mysymb]);


Jsuser.email = "suyash@chat.com" // value can change ie override value

Object.freeze(Jsuser) // after freez nothing will change 
Jsuser.email = "suyash@micro.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello js user");    
}
Jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());






