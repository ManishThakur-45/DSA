 let prompt = require('prompt-sync')()



let age = prompt('Enter your age: ')
if (age>=18) {
    console.log('Valid For vote!!!!')
} else {
    console.log('wait for 18+ && Ypu are not valid vor vote')
}



let prompt = require("prompt-sync")();

let marks = Number(prompt("Enter your marks: "));

if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
} else if (marks > 80) {
    console.log("Excellent");
} else if (marks > 65) {
    console.log("Very Good");
} else if (marks > 50) {
    console.log("Good");
} else {
    console.log("Poor");
}




let a = Number(prompt('Enter first no: '))
let b = Number(prompt('Enter second no: '))
let c = Number(prompt('Enter third no: '))

if(a>b){
    console.log('A is greater ')
}else{
    console.log('B is greater ')
}

if(a%2==0){
    console.log('Even No ')
}else{
    console.log('Odd no ')
}

if (a>b && a>c) {
    console.log("A is greater")
}else if (b>a && b>c) {
    console.log('B is greater')
} else if (c > a && c > b) {
    console.log("C is greater");
} else {
    console.log("Some values are equal");
}

if (a % 400 == 0 || (a % 4 == 0 && a % 100 !== 0)) {
    console.log('Leap Year')
}else{
    console.log('Not a Leap Year')
}


let amount = Number(prompt('Enter amount '));

let payableAmount = 0;

if (amount < 0) {
    console.log("Invalid Amount");
    return;
} else if (amount <= 5000) {
    payableAmount = amount;
} else if (amount <= 7000) {
    payableAmount = amount - (5 * amount) / 100;
} else if (amount <= 9000) {
    payableAmount = amount - (10 * amount) / 100;
} else {
    payableAmount = amount - (20 * amount) / 100;
}

console.log('Payable Amount ' + payableAmount);

let amount = Number(prompt("Enter amount "));
let discount = 0;

if (amount < 0) {
    console.log("Invalid Amount");
} else {
    if (amount <= 5000) {
        discount = 0;
    } else if (amount <= 7000) {
        discount = 5;
    } else if (amount <= 9000) {
        discount = 10;
    } else {
        discount = 20;
    }

    let payableAmount = amount - (amount * discount) / 100;

    console.log("Payable Amount " + payableAmount);
}


let unit = Number(prompt("Enter unit: "));
let bill = 0;

if (unit <= 100) {
    bill = unit * 4.2;

} else if (unit <= 200) {
    bill = (100 * 4.2) + ((unit - 100) * 6);

} else if (unit <= 400) {
    bill = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);

} else {
    bill = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
}

console.log("Bill =", bill);




let unit = Number(prompt("Enter unit: "));
let bill = 0;

if (unit > 400) {
    bill += (unit - 400) * 13;
    unit = 400;
}

if (unit > 200) {
    bill += (unit - 200) * 8;
    unit = 200;
}

if (unit > 100) {
    bill += (unit - 100) * 6;
    unit = 100;
}

if (unit > 0) {
    bill += unit * 4.2;
}

console.log("Bill =", bill);



let month = Number(prompt("Enter a month: "));
let year = Number(prompt("Enter a year: "));

let days = 0;

if (month == 2) {

    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        days = 29;
    } else {
        days = 28;
    }

} else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
) {

    days = 31;

} else if (
    month == 4 ||
    month == 6 ||
    month == 9 ||
    month == 11
) {

    days = 30;

} else {

    console.log("Invalid Month");

}

if (days > 0) {
    console.log("Days =", days);
}


