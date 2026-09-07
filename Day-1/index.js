let a = 10;
let b = 20;

console.log("a is " + a);
console.log("b is " + b);

// Swap using temporary variable
// let temp = a;
// a = b;
// b = temp;

// Swap using arithmetic
// a = a + b;
// b = a - b;
// a = a - b;

// Swap using destructuring
[a, b] = [b, a];

console.log("New a is " + a);
console.log("New b is " + b);




