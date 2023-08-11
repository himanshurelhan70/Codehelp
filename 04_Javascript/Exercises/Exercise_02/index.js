// ## Topics covered:

// - Functions and scope
// - Arrays and objects

// 1) Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.
console.log("Answer 1");
// Define a function called greet that takes a name parameter
    function greet(name) {
        // Use a console.log statement to output a greeting message with the name parameter
        console.log(`Hello ${name}! How are you doing today?`);
    }
  
  // Call the greet function and pass in the name "Pranay" as an argument
  greet("Pranay"); // Output: Hello Pranay! How are you doing today?



// 2)  Write a function called 'getSquare' that takes a number parameter and returns its square.
console.log("Answer 2");
// Define a function called getSquare that takes a number parameter
    function getSquare(number) {
        // Use the exponent operator (**) to square the number parameter
        const square = number ** 2;
  
    // Return the square value to the calling code
    return square;
  }
  
  // Call the getSquare function and pass in the number 5 as an argument
  const result = getSquare(5);
  
  // Log the result to the console
  console.log(result); // Output: 25



// 3) Write a function called 'countLetters' that takes a string 
// parameter and returns an object that contains a count of each letter in the string.
console.log("Answer 3");
function countLetters(str) {
    // Create an empty object to store the letter counts
    const counts = {};
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is already in the counts object
      if (counts[char]) {
        // If it is, increment the count by 1
        counts[char]++;
      } else {
        // If it's not, add it to the object with a count of 1
        counts[char] = 1;
      }
    }
  
    // Return the counts object
    return counts;
  }
  
  // Example usage:
  const letterCounts = countLetters("WebDevelopment");
  
  console.log(letterCounts); // Output: { W: 1, e: 4, b: 1, D: 1, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }


// 4)  Write a function called 'createCounter' that returns a function. The returned function should increment 
//   a counter variable each time it is called and return the current count.
console.log("Answer 4");
function createCounter() {
    let count = 0; // initialize count to 0
  
    // define and return a function that increments count and returns its value
    return function () {
      count++; // increment count by 1
      return count; // return the new value of count
    };
  }
  
  // create a new counter function
  const counter = createCounter();
  
  // call the counter function multiple times and log the result
  console.log(counter()); // prints 1
  console.log(counter()); // prints 2
  console.log(counter()); // prints 3


// 5) Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all
//    even numbers in the array.
console.log("Answer 5");
function sumEvenNumbers(numbers) {
    let sum = 0; // initialize sum to 0
  
    // loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
      // check if the current number is even
      if (numbers[i] % 2 === 0) {
        sum += numbers[i]; // add the current number to sum
      }
    }
  
    return sum; // return the final sum of even numbers
  }
  
  // test the function with an example array
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(sumEvenNumbers(numbers)); // prints 12



// // 6) Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// Function to calculate the sum of all numbers in an array
console.log("Answer 6");
function sumArrayNumbers(arr) {
    let sum = 0; // Initialize sum variable to zero
    for (let i = 0; i < arr.length; i++) {
      // Loop through the array
      sum += arr[i]; // Add each number to sum
    }
    return sum; // Return the final sum
  }
  
  // Test cases
  const numbers1 = [1, 2, 3, 4, 5];
  console.log(sumArrayNumbers(numbers1)); // Output: 15
  
  const numbers2 = [10, 20, 30];
  console.log(sumArrayNumbers(numbers2)); // Output: 60
  
  const numbers3 = [-1, 2, -3, 4, -5];
  console.log(sumArrayNumbers(numbers3)); // Output: -3


// // 7) Write a function that takes an array of strings as an argument and returns a new array with 
// only the strings that have a length greater than 5.
console.log("Answer 7");
function filterLongStrings(arr) {
    // create an empty array to store the filtered strings
    let filteredArr = [];
  
    // loop through each string in the original array
    for (let i = 0; i < arr.length; i++) {
      // check if the string's length is greater than 5
      if (arr[i].length > 5) {
        // if it is, push the string to the filtered array
        filteredArr.push(arr[i]);
      }
    }
  
    // return the filtered array
    return filteredArr;
  }
  
  // Test cases
  console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"])); // ['watermelon', 'orange']
  console.log(filterLongStrings(["cat", "dog", "elephant", "giraffe"])); // ['elephant', 'giraffe']
  console.log(filterLongStrings(["car", "bike", "bus", "train"])); // []
  
  console.log(filterLongStrings(["123456", "123", "123456789"])); // ["123456", "123456789"]
  
  console.log(filterLongStrings([])); // []


// // 8) Write a function that takes an object and returns an array of all the keys in the object.
console.log("Answer 8");
function getKeys(obj) {
    // Using Object.keys() method to get all the keys in the object
    const keys = Object.keys(obj);
  
    return keys;
  }
  
  // Test cases
  const person = {
    name: "John",
    age: 30,
    gender: "male",
    city: "New York",
  };
  
  console.log(getKeys(person)); // ["name", "age", "gender", "city"]
  console.log(getKeys({})); // []

// // 9) Write a function that takes an array of objects and returns an array of all the values 
// of a specified property name.
console.log("Answer 9");
function getPropertyValues(arr, propName) {
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);
  
    return values;
  }
  
  // Test cases
  const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
  ];
  
  console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
  console.log(getPropertyValues(people, "age")); //  [20, 21, 21]
  console.log(getPropertyValues(people, "gender")); // ["male", "female", "male"]
  console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]


// // 10) Write a function that takes an array of objects and returns the object with the highest
//  value for a specified property name.
console.log("Answer 10");
function findMaxByProperty(arr, prop) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];
  
    // Loop through the array starting at second object
    for (let i = 1; i < arr.length; i++) {
      // Check if the current object's property value is greater than maxObj's property value
      if (arr[i][prop] > maxObj[prop]) {
        // If yes, update maxObj to current object
        maxObj = arr[i];
      }
    }
  
    // Return the object with highest value for the specified property
    return maxObj;
  }
  
  // Test case 1
  const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ];
  const maxObj1 = findMaxByProperty(arr1, "price");
  console.log(maxObj1); // { name: 'orange', price: 3 }
  
  // Test case 2
  const arr2 = [
    { name: "Pranay", age: 20 },
    { name: "Nidhi", age: 21 },
    { name: "Soumya", age: 21 },
  ];
  const maxObj2 = findMaxByProperty(arr2, "age");
  console.log(maxObj2); // { name: 'Nidhi', age: 21 }
  
  // Test case 3
  const arr3 = [];
  const maxObj3 = findMaxByProperty(arr3, "price");
  console.log(maxObj3); // null