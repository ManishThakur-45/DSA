let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a Num '))

// let rev= 0
// while (n>0) {
//     rev = (rev * 10) + (n % 10)
//     n = Math.floor(n / 10)
// }
// console.log(rev);

// let sum= 0
// while (n>0) {
//     sum = sum + (n % 10)
//     n = Math.floor(n / 10)
// }
// console.log(sum);




let square = n * n
let temp = n
let flag = true

while (temp > 0) {
    if (temp % 10 !== square % 10) {
        flag = false
        break
    }

    temp = Math.floor(temp / 10)
    square = Math.floor(square / 10)
}

if (flag) {
    console.log('Automorphic Number')
} else {
    console.log('Not Automorphic Number')
}
