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
// console.log(userNme.greeting());

const tinder = new Object();    // Singleton object

const tinder2 = {}

tinder2.name1 = "satish"
tinder2.name2 = "sagar"
tinder2.name3 = "shiva"
tinder2.name4 = "sikku"
// console.log(tinder2);

let obj2 = {1:"a", 2:"b",3:"c"}
let obj3 = {4:"a", 5:"b", 6:"c"}

/* const obj4= Object.assign({}, obj2, obj3)    -> Object.assign id used to combin two object literals 
in one like array.*/
// console.log(obj4)

let obj5 = {...obj2,...obj3}  
// console.log(obj5);           -> (...)Spread method is used for combine two object in one like array

let marks = {
    Science : {
        phy : 69,
        chem : 98,
        bio : 96,
    },

    Socialscience : {
        history:{
            ancient_history: 59,
            medieval_history:65,
            modern_history:89,
        },

        civic:59,
        poltics:89,
        geography:67,
    },

    math : 99,
    english :100,
}       

// console.log(marks.Socialscience);


const arr = [
    {
        id:"s@gmail.com",
        pass:"1233"
    },

    {
        id:"sk@gmail.com",
        pass:"12315",
    }, 

    {

    }
]

console.log(arr[1].id);

console.log(Object.keys(marks));     //The Object.keys() method returns an array with the keys of an object.
console.log(Object.values(marks));
console.log(Object.entries(arr));
