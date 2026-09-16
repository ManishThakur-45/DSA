let prompt = require('prompt-sync')()


let n  =  Number(prompt('Enter a number '))
for (let i = 1; i <= n ; i++ ) {
    console.log('Hello World')   
}


let n  =  Number(prompt('Enter a number '))
for (let i = 1; i <= n ; i++ ) {
    console.log(i)   
}


let n = Number(prompt("Enter a number "));

let result = "";

for (let i = 1; i <= n; i++) {
    result += i + " ";
}

console.log(result);

let n = Number(prompt("Enter a number "));

let result = "";

for (let i = n; i >= 1; i--) {
    result += i + " ";
}

console.log(result);


let n = Number(prompt("Enter a number "));


let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i   
}
console.log(sum)


let n = Number(prompt('Enter a no '))
let fact = 1
for(let i = 1; i <= n; i++){
 fact = fact * i
}
console.log(fact)



let n = Number(prompt('Enater a no '))
for(let i = 1; i<=n; i++){
  if(n%i==0) {
    console.log(i)
  }
}


let n = 10;

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i;
    } else {
        oddSum = oddSum + i;
    }
}

console.log("Even Sum:", evenSum);
console.log("Odd Sum:", oddSum);