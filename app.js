// ----------------------- Objects -------------------------


let mysys = Symbol("Hum")

const userNme = {
    name : "satish",
    age : 22,
    mobileno : 7549357051,
    email_id : "satishsatyarth2002@gamil.com",
    location : "bhopal",
    college : "SIRT",
    password : "satish1234",
    "Full name" : "satish yadav",
    [mysys] : "Satyarth",
}

// console.log(userNme.college);
// console.log(userNme["Full name"]);  // Special case 
// console.log(userNme[mysys]);

userNme.age = 24;
// console.log(userNme);

// Object.freeze(userNme);  // After using freeze method we can't update

userNme.email_id = "satishyadav@gmail.com"
// console.log(userNme)

userNme.greeting = function(){
    console.log(`hello satish , ${this.college}`);
}
console.log(userNme.greeting());
