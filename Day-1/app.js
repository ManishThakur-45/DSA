// Sum of two integers 

// let a = 10
// let b = 20
// console.log(a+b)

// Accept and print the answer 

// let prompt = require('prompt-sync')()
// let age = prompt('Enter your age  ' )
// console.log( 'Your age is ' + age)


const prompt = require('prompt-sync')();

// Now use it to ask for input
const name = prompt('What is your name? ');
const age = prompt('Enter your age: ');

console.log(`Hello ${name}, you are ${age} years old.`);
