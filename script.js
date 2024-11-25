// // ex 1

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// const original = "Hello, World!";
// const reversedString = reverseString(original);
// console.log("Original String:", original);
// console.log("Reversed String:", reversedString);

// // ex 2

// function count(c){
//     let x = 0;
//     while (x[i]){
//         x++;
//         i++;
//     }
//     return x;
// }

// const c = "hello"
// let msg = count(c);
// console.log(msg);

// ex 3

// function capitalizeWords(sentence) {
//     let result = "";
//     let capitalizeNext = true;

//     for (let i = 0; i < sentence.length; i++) {
//         let char = sentence[i];
//         if (char === " ") {
//             capitalizeNext = true;
//             result += char;
//         } else {
//             if (capitalizeNext) {
//                 result += char.toUpperCase();
//                 capitalizeNext = false;
//             } else {
//                 result += char;
//             }
//         }
//     }

//     return result;
// }

// console.log(capitalizeWords("hello world! how are you?")); 


// ex 4

// function numberMax(array){
//     let max = 0;
//     if (array.length===0) return null;
//     for (let i of array){
//         if (max<i){
//             max = i;
//         }
//     }
       
//     return max;
// }

// function numberMin(array){
//     let min = array[0];
//     if (array.length===0) return null;
//     for (let i of array){
//         if (i  < min){
//             min = i;
//         }
//     }
//     return min;
// }

// const array = [12, 15, 2, 19];
// let maxNumber = numberMax(array);
// let minNumber = numberMin(array);
// console.log(array, maxNumber, minNumber)

// ex 5

// function sum (array){
//     let s = 0;
//     for (let k of array){
//         s += k;
//     }
//     return s;
// }

// const array = [15, 13, 14, 236]

// console.log(sum(array));

// ex6

// function filterArray(array, cond) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       if (cond(array[i])) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const isEven = (num) => num % 2 === 0;
  
//   const evenNumbers = filterArray(numbers, isEven);
//   console.log(numbers, evenNumbers);
  
// ex7

// function factorial(num) {
//     if (num < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// let number = 5;
// console.log(`Factorial of ${number} is ${factorial(number)}`);

// ex 8

// function isPrime(num) {
//     if (num <= 1) {
//         return false; 
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// let number = 29;
// console.log(`${number} is prime: ${isPrime(number)}`);

// ex 9
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
  
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
  }
  
  console.log(generateFibonacci(6)); 
  


