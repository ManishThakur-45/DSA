let prompt = require('prompt-sync')()
let n = Number(prompt('Enter n  '))

if (n <= 1) {
    console.log("Not Prime")
} else {
    let isPrime = true;   // maan lo prime hai

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;   // divisor mil gaya
            break;             // loop se bahar nikal jao
        }
    }

    if (isPrime) {
        console.log("Prime")
    } else {
        console.log("Not Prime")
    }
}
   

let prompt = require('prompt-sync')()
let a = Number(prompt('Enter base (a): '))
let b = Number(prompt('Enter exponent (b): '))

let result = 1;
if (b < 0) {
    for (let i = 1; i <= -b; i++) {
        result = result * a;
    }
    result = 1 / result;
} else {
    for (let i = 1; i <= b; i++) {
        result = result * a;
    }
}

console.log(result);