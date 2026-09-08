//Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333
console.log(a % b); // 1
console.log(a ** b); // 1000


//Relational Operators



console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
console.log(a === b); // false

//== vs ===

console.log(5 == "5");  // true
console.log(5 === "5"); // false


//Logical Operators

//&& AND
let age = 20;

console.log(age >= 18 && age <= 60);  // true

//|| OR

console.log(age < 18 || age > 60); // false

//! NOT

let isLoggedIn = true;

console.log(!isLoggedIn); // false

let isLoggedIn1 = false;

console.log(!isLoggedIn1);  // true


 // Unary Operators



a++;

console.log(a); // 11



a--;

console.log(a); // 9

//typeof

let name = "Manish";

console.log(typeof name); // string