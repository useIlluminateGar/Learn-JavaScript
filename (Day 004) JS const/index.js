// const = a variable that can't be changed

const pi = 3.14;
let radius;
let circumference;

radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);

//let pi = 231.69; //Imagine if we still using let to making a declaration, it'll changed whenever you put another same name of declarations (stacked).
//so you should change the previous variable into const to prevent changing.

circumference = 2 * pi * radius;

console.log(`The circumference is:`, circumference);
