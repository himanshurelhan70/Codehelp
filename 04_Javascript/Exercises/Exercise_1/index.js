// ## Topics covered:
// - Variables, data types, and operators
// - Conditional statements and loops


// 1) Write a function that takes two numbers as arguments and returns their sum.
function sumNumbers(num1, num2){
    const sum = num1+num2;
    return sum;
}
console.log(`//////// Answer 1 => ${sumNumbers(6, 9)}`);


// 2) Write a function that takes a string as an argument and returns its length.
function getStringLength(str){
    return typeof str === 'string' ? str.length : "only strings are accepted";
    // return string.length;
}
console.log(`//////// Answer 2 => ${getStringLength('himanshu')}`);


// 3) Write a program that takes two numbers and displays their sum, difference, product, and quotient.
function calculateNums(num1, num2){
    console.log(`//////// Answer 3 => `);
    console.log(`Sum: ${num1 + num2}`); // Sum: 64
    console.log(`Difference: ${num1 - num2}`); // Difference: -22
    console.log(`Product: ${num1 * num2}`); // Product: 903
    console.log(`Quotient: ${num1 / num2}`);
}
calculateNums(69, 2);


//4) Write a function that takes two numbers as arguments and returns the larger number.
function findLargerNumber(num1, num2){
    return num1>num2 ? num1 : num2;
}
console.log(`//////// Answer 4 => Larger number is ${findLargerNumber(7, 8)}`);


// 5)  Write a program that displays a string in reverse order.
function reverseString(str){
    const strArr = str.split("");
    const strArrRev =  strArr.reverse();
    const strRev = strArrRev.join("")
    return strRev;
}
console.log(`//////// Answer 5 => Reverse String ${reverseString('himanshu')}`);


// 6) Write a program that takes a number and checks whether it is positive, negative, or zero.
function checkNum(num){
   if(num > 0) return 'positive';
   else if(num < 0) return 'negative';
   else return 'zero';
}
console.log(`//////// Answer 6 => Number is ${checkNum(6)}`);


// 7) Write a program that takes a number and prints the multiplication table for that number.
function printTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
const num = 3;
console.log(`//////// Answer 7 => multiplication Table of ${num}`);
printTable(num);


// 8) Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function sumTillNum(num){
    // let sum = 0;
    // for(let i=1; i<=num; i++){
    //     sum += i;
    // }
    // return sum;

    return (num*(num+1))/2;
}
const num2 = 10;
console.log(`//////// Answer 8 => Sum of ${num2} numbers is ${sumTillNum(num2)}`);


// 9) Write a program that takes a string and prints out the number of vowels in the string.
function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
}
const str = 'himanshu';
console.log(`//////// Answer 9 => Number of Vowels in ${str} are ${countVowels(str)}`);



// 10) Write a function that takes two arrays of integers as arguments and returns an array of the common elements 
// in both arrays, without any duplicates. The returned array should be sorted in ascending order.

function findCommonElements(arr1, arr2) {
    // Create an empty array to hold the common elements
    let commonElements = [];
  
    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
      // Check if the current element is in arr2
      if (arr2.includes(arr1[i])) {
        // If the element is in arr2 and not already in commonElements array, add it
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    // Sort the commonElements array in ascending order
    commonElements.sort((a, b) => a - b);
  
    // Return the commonElements array
    return commonElements;
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(arr1, arr2);
//   console.log(commonElements); // Outputs: [3, 4, 5]

   console.log(`//////// Answer 10 => Common Elements of ${arr1} and ${arr2} are ${commonElements}`);