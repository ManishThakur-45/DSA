//  Rotate all the elements in an array to the left by 1 

// let arr = [10, 20, 30, 40, 50];
// let temp = arr[0];
// for(let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);


// Rotate all the elements in an array to the right by 1

//  let arr = [10, 20, 30, 40, 50];
// let temp = arr[arr.length - 1];
// for(let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);


// Array left rotation by k elements
// let arr = [10, 20, 30, 40, 50];
// let k = 3;

// for (let j = 0; j < k; j++) {
//     let temp = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         arr[i - 1] = arr[i];
//     }

//     arr[arr.length - 1] = temp;
// }

// console.log(arr);


// Array right rotation by k elements
// let arr = [10, 20, 30, 40, 50];
// let k = 2;
// for (let j = 0; j < k; j++) {
//     let temp = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = temp;
// }
// console.log(arr);



// Print the count of subarrays whome sum is equal to the target  both  subarrays have sum 12

let arr = [2, 4, 6, 6, 3];
let target = 12;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
        sum += arr[j];

        if (sum === target) {
            count++;
        }
    }
}

console.log(count);