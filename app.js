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

console.log(userNme.college);
console.log(userNme["Full name"]);  // Special case 
console.log(userNme[mysys]);