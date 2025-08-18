/*
arithmatic expression is a combination of...
operands (values, variables, etc.)
operators (+, -, *, /, %)
that can  evaluated to a value
ex. y = x * 5;
*/

let students = 20;

//students = students - 1; || students -= 1; // Decrementing the value of students by 1
//students = students + 2; || students += 1; // Incrementing the value of students by 2
//students = students * 2; || students *= 1; // Doubling the value of students
//students = students / 2; || students /= 1; // Halving the value of students   
//students = students % 5; // Getting the remainder when students is divided by 5 

//console.log(students); // Output: 21


//////////////////////////////////

// Exponetiation

students = students ** 2; // Squaring the value of students 

console.log(students); // Output: 400


///////////////////////////////////

/*
   operators precedence
    1. Parentheses ()
    2. Exponentiation (**)
    3. Multiplication (*) and Division (/)
    4. Addition (+) and Subtraction (-)
*/

let result = 1 + 2 * (3 + 4);

console.log(result); // Output: 15