//Variable =  A container that store a value
//            Behaves as if it were the value it contains.

//1. declaration    let  x;
//2. assignment     x = 100;

let x; //declaration
x = 100; //assignment

console.log(x); //100


//or you can also use it in different way

let y = 200; //declaration and assignment in one line
console.log(y); //200

////////////////////////////////////
//Numbers
let age = 25;
let price = 10.99;
let gpa = 2.7;

console.log(typeof age);
console.log(`Your are ${age} years old `);
console.log(`The price is ${price}`);
console.log(`Your GPA is ${gpa}`);

/////////////////////////////////////
//Strings

let firstName = "Jokowi";
let favoriteFood = "Soto";
let email = "Mulyono123@example.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`Your favorite food is ${favoriteFood}`);
console.log(`Your email is ${email}`);  

/////////////////////////////////////
//Booleans

let online = true; 
let forSale = false;
let isStudent = true;

console.log(`Bro is online: ${online}`);
console.log(`is this car for sale? ${forSale}`);
console.log(`Is this person a student? ${isStudent}`);

/////////////////////////////////////
//Exercise 

let fullName = "Jokowi MuLYONO";
let age2 = 70;
let isGraduated = false;

document.getElementById("p1").textContent = `My name is : ${fullName}`;
document.getElementById("p2").textContent = `My age is : ${age2}`;
document.getElementById("p3").textContent = `Is graduated? : ${isGraduated}`;
