  //let prompt = require('prompt-sync')()


 
// let computer = Math.floor((Math.random()*100)+1)
// let user , attempt = 0
// do{
//     attempt++
//     user = Number(prompt('Enter a Number between 1 to 100 '))
//     if (user>computer) {
//         console.log('Too large');
        
//     }else if(user < computer){
//         console.log('Too small');
        
//     }else if (user == computer) {
//         console.log('congratulation, you guessed number correctly in this attempt '+ attempt);
        
//     }else{
//         console.log('Invalid number')
//     }
// }while (user != computer) 


// let prompt = require('prompt-sync')();

// let computer = Math.floor(Math.random() * 100) + 1;

// let user;
// let attempt = 0;

// console.log("🤝 Chalo bhai, ek game khelte hain!");
// console.log("😎 Maine 1 se 100 ke beech ek number soch liya hai.");
// console.log("🎯 Ab dekhte hain tu kitni jaldi guess karta hai!\n");

// do {
//     attempt++;

//     user = Number(prompt(`Bhai, apna guess bata (Attempt ${attempt}): `));

//     if (user > computer) {
//         console.log("😂 Arre bhai, thoda chhota number soch... ye toh zyada bada hai!\n");

//     } else if (user < computer) {
//         console.log("😅 Nahi bhai, aur bada number try kar... tu chhota soch raha hai!\n");

//     } else if (user === computer) {
//         console.log("\n🔥 OHHH BHAI! Sahi pakda!");
//         console.log(`🎉 Number tha ${computer}`);
//         console.log(`🏆 Tune sirf ${attempt} attempts mein guess kar liya!`);
//         console.log("😎 Maan gaya bhai, tu toh pro nikla!\n");

//     } else {
//         console.log("🤨 Bhai, valid number daal... 1 se 100 ke beech!\n");
//     }

// } while (user !== computer);

// console.log("🤝 Chal bhai, next round kabhi aur!");


// let n;

// do {
//     console.log('\n===== CALCULATOR =====');
//     console.log('Enter 1 for addition');
//     console.log('Enter 2 for subtraction');
//     console.log('Enter 3 for multiplication');
//     console.log('Enter 4 for division');

//     n = Number(prompt('Bhai, kya karna hai? '));

//     switch (n) {

//         case 1: {
//             let a = Number(prompt('Enter first number: '));
//             let b = Number(prompt('Enter second number: '));

//             console.log('Addition = ' + (a + b));
//             break;
//         }

//         case 2: {
//             let a = Number(prompt('Enter first number: '));
//             let b = Number(prompt('Enter second number: '));

//             console.log('Subtraction = ' + (a - b));
//             break;
//         }

//         case 3: {
//             let a = Number(prompt('Enter first number: '));
//             let b = Number(prompt('Enter second number: '));

//             console.log('Multiplication = ' + (a * b));
//             break;
//         }

//         case 4: {
//             let a = Number(prompt('Enter first number: '));
//             let b = Number(prompt('Enter second number: '));

//             if (b === 0) {
//                 console.log('Bhai, 0 se divide nahi kar sakte 😅');
//             } else {
//                 console.log('Division = ' + (a / b));
//             }

//             break;
//         }

//         default: {
//             console.log('Bhai, 1 se 4 ke beech option choose kar 😄');
//         }
//     }

//     n = Number(prompt('Continue karna hai? 10 dabao: '));

// } while (n === 10);


//Harshad Number

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// let temp = n;
// let sum = 0;

// do {
//     sum = sum + (temp % 10);
//     temp = Math.floor(temp / 10);
// } while (temp > 0);

// if (n % sum === 0) {
//     console.log("Harshad Number");
// } else {
//     console.log("Not a Harshad Number");
// }



//Automorphic Number

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// let square = n * n;
// let temp = n;
// let divisor = 1;

// do {
//     divisor = divisor * 10;
//     temp = Math.floor(temp / 10);
// } while (temp > 0);

// if (square % divisor === n) {
//     console.log("Automorphic Number");
// } else {
//     console.log("Not Automorphic Number");
// }


//Prime factors

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));
// let i = 2;

// console.log("Prime factors:");

// do {
//     if (n % i === 0) {
//         console.log(i);
//         n = n / i;
//     } else {
//         i++;
//     }
// } while (n > 1);


//Neon Number

// const prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// let square = n * n;
// let temp = square;
// let sum = 0;

// do {
//     sum = sum + (temp % 10);
//     temp = Math.floor(temp / 10);
// } while (temp > 0);

// if (sum === n) {
//     console.log("Neon Number");
// } else {
//     console.log("Not a Neon Number");
// }


//Armstrong Number


const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

let temp = n;
let digits = 0;
let sum = 0;
do {
    digits++;
    temp = Math.floor(temp / 10);
} while (temp > 0);
temp = n;

do {
    let digit = temp % 10;
    sum = sum + Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
} while (temp > 0);

if (sum === n) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}