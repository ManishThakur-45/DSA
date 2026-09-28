// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number: "));
// let arr = new Array(n);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt('Enter a value: '));
// }   
// console.log("The array is: ", arr);



// Sum of array elements
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("The sum is: ", sum);





// Max element in an array

// let arr = [10, 2, 35, 4, 56];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log("The maximum element is: ", max);




// // Min element in an array

// let arr1 = [10, 2, 35, 4, 56];
// let min = arr1[0];
// for (let i = 1; i < arr1.length; i++) {
//     if (arr1[i] < min) {
//         min = arr1[i];
//     }
// }
// console.log("The minimum element is: ", min);





// Second largest element in an array

// let arr = [20, 45, 78, 95, 34];
// let max = Math.max(arr[0], arr[1]);
// let secondMax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] != max) {
//         secondMax = arr[i];
//     }
// }
// console.log("The second largest element is: ", secondMax);




// Second smallest element in an array

// let arr = [20, 45, 78, 95, 34];
// let min = Math.min(arr[0], arr[1]);
// let secondMin = Math.max(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] < min) {
//         secondMin = min;
//         min = arr[i];
//     } else if (arr[i] < secondMin && arr[i] != min) {
//         secondMin = arr[i];
//     }
// }
// console.log("The second smallest element is: ", secondMin);



// Reverse an array

// let arr = [10, 20, 30, 40, 50];
// let reversedArr = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     reversedArr[i] = arr[arr.length - 1 - i];
// }
// console.log("The reversed array is: ", reversedArr);




// Reverse an array using a temporary array
// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);
// let i = arr.length - 1;
// for (let j = 0; j < temp.length; j++) {
//     temp[j] = arr[i];
//     i--;
// }
// console.log("The original array is: ", arr);
// console.log("The reversed array is: ", temp);



// Reverse an array using swapping
// let arr = [10, 20, 30, 40, 50];
// let i = 0; let j = arr.length - 1;

// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log("The original array is: ", arr);
// console.log("The reversed array is: ", arr);    
   


// Reverse an array using a single loop
// let arr = [10, 20, 30, 40, 50];
// console.log("The original array is: ", arr);
// let n = arr.length; 
// for (let i = 0; i < Math.floor(n / 2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[n - 1 - i];
//     arr[n - 1 - i] = temp;
// }
// console.log("The reversed array is: ", arr);




// All the zeros to left and all the ones to right in an array

let arr = [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1];
let left = 0 ,temp ;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
         temp = arr[i];
        arr[i] = arr[left];
        arr[left] = temp;
        left++;
    }
}
console.log("The array with zeros on the left and ones on the right is: ", arr);    