const prompt = require('prompt-sync')()
let n = Number(prompt('Enter n number '))

switch (n) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')  
        
     case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')

    case 7:
        console.log('Sunday')    
    default:
        console.log('Kuchh bhi nahi hai yaha ')
        break;
}


let s =  prompt('Enter a string ')
let consonent = 0 , vowel = 0

for(let i = 0; i < s.length; i++){
     let ch = s.charAt(i)

     switch (ch) {
        case 'a':
        case 'e':
        case 'i':  
        case 'o':
        case 'aou': vowel++;
        break 

          default : consonent++
}
 
}

console.log('consonent '+ consonent)
console.log('vowel '+ vowel)


console.log('Entar 1 for area of rectangle ')
console.log('Entar 2 for area of square ')
console.log('Entar 3 for area of triangle ')
console.log('Entar 4 for area of circle ')

let n1 =Number( prompt())
switch (n1) {
    case 1:{
        let len = Number(prompt('Enter length '))
        let bre = Number(prompt('Enter breadth '))
        console.log("Area of Rectangle =", len * bre);
        break;
    }
    case 2:{
        let side = Number(prompt('Enter side '))
        console.log("Area of Square =", side * side);
        break;
    }
    case 3:{
            let height = Number(prompt('Enter height '))
            let base = Number(prompt('Enter base '))
            console.log("Area of Triangle =", (height * base) / 2);
            break;
    }
    case 4:{
        let  r = Number(prompt('Enter radius '))
        console.log("Area of Circle =", Math.PI * r * r);
        break
    }

    default:
        console.log('Invalid Number')
        break;
}