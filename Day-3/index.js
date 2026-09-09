let prompt = require('prompt-sync')()

let p = prompt('Enter principal:- ');
let r = prompt('Enter rate of intrest:- ');
let t = prompt('Enter time:- ') ;

console.log((p* Math.pow(1+(r/100),t)-p).toFixed(2));