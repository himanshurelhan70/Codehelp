// 1) Write a function that takes two numbers as arguments and returns their sum.

function sumNumbers(a, b){
    const sum =  a+b;
    return sum;
}

console.log(sumNumbers(6, 9));

// 2) Write a function that takes a string as an argument and returns its length.

function stringLength(str){
    return typeof str === 'string' ? str.length : "only strings are accepted";
    // return string.length;
}

console.log(stringLength(686));


// 3) Write a program that takes two numbers and displays their sum, difference, product, and quotient.

function calculateNums(num1, num2){
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 % num2);
}

calculateNums(5, 4);

//4) Write a function that takes two numbers as arguments and returns the larger number.
function getLarger(num1, num2){
    return num1>num2 ? num1 : num2;
}

console.log('larger number is : ', getLarger(7, 8));


// 5)  Write a program that displays a string in reverse order.
function reverseStr(str){
    const strArr = str.split("");
    const strArrRev =  strArr.reverse();
    const strRev = strArrRev.join("")
    return strRev;
}


// 6) Write a program that takes a number and checks whether it is positive, negative, or zero.
function checkNum(num){
   if(num > 0) return 'positive';
   else if(num < 0) return 'negative';
   else return 'zero';
}

console.log(`Number is ${checkNum(0)}`);


// 7) Write a program that takes a number and prints the multiplication table for that number.
function printTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

console.log(printTable(6));

// 8) Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function sumTillNum(num){
    // let sum = 0;
    // for(let i=1; i<=num; i++){
    //     sum += i;
    // }
    // return sum;

    return (num*(num+1))/2;
}


console.log(sumTillNum(10));

// 9) Write a program that takes a string and prints out the number of vowels in the string.
function countVowels(str){
    let count = 0;
    tempStr = str.toLowerCase();

    for(let i=0; i<tempStr.length; i++){
            if( tempStr.charAt(i) === 'a' || 
                tempStr.charAt(i) === 'e' || 
                tempStr.charAt(i) === 'i' || 
                tempStr.charAt(i) === 'o' || 
                tempStr.charAt(i) === 'u' )
                {
                    count++;
            }
    }
    return count;
}

console.log(countVowels('himanshU'));

// 10) Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays,
//  without any duplicates. The returned array should be sorted in ascending order.

function getCommonValues(arr1, arr2){
    arr1.forEacg
}


// console.log(reverseStr("himanshu"));

// // 6) Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// function sumArray(arr){
//    return  arr.reduce((element, acc) => acc + element, 0);
// }

// console.log(sumArray([1, 2, 3, 4, 5]));


// // 7) Write a function that takes an array of strings as an argument and returns a new array 
// // with only the strings that have a length greater than 5.

// function filterStrArr(arr){
//     return arr.filter((element) => element.length > 5);
// }

// console.log(filterStrArr(['himanshu', 'relhan', 'is', 'an', 'MCA', 'student']));



// // 8) Write a function that takes an object and returns an array of all the keys in the object.
// function getkeysArr(obj){
//     const newArr = [];
//     Object.keys(obj).forEach((key) => newArr.push(key));
//     return newArr;
// }

// console.log(getkeysArr({
//     name: 'himanshu',
//     age: 69,
//     height: "5'11"
// }));


// // 9) Write a function that takes an array of objects and returns an array of all the 
// // values of a specified property name.

// function getValuesArr(arr){
//     const newArr = [];
//     Object.keys(obj).forEach((key) => newArr.push(key));
//     return newArr;
// }

// console.log(
//     getkeysArr([
//         {
//             name: 'himanshu',
//             age: 69,
//             height: "5'11"
//         },
//     ])
// );


// // 10) Write a function that takes an array of objects and returns the object with the highest
// //  value for a specified property name.