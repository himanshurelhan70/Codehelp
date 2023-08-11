// ## Topics covered:

// - **Regular expressions**
// - **ES6 and modern JavaScript features**

// 1) Write a function that takes a string as input and returns true if the string contains only alphabets, and false otherwise.
function containsOnlyAlphabets(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
  }
  
  console.log(containsOnlyAlphabets("abcDEF")); // true
  console.log(containsOnlyAlphabets("123")); // false
  console.log(containsOnlyAlphabets("a b c")); // false
  console.log(containsOnlyAlphabets("")); // false


// 2) Write a function that takes a string as input and returns true if the string contains at least one digit, false otherwise.
function containsDigit(str) {
    const regex = /\d/;
    return regex.test(str);
  }
  
  console.log(containsDigit("abc123")); // true
  console.log(containsDigit("abc")); // false
  console.log(containsDigit("123")); // true
  console.log(containsDigit("a1b2c3")); // true


// 3) Write a function that takes a string as input and replaces all occurrences of "cat" with "dog".
function replaceCatWithDog(str) {
    const regex = /cat/g;
    return str.replace(regex, "dog");
  }
  
  console.log(replaceCatWithDog("The cat sat on the mat.")); // The dog sat on the mat.
  console.log(replaceCatWithDog("The cats sat on the mats.")); // The dogs sat on the mats.
  console.log(replaceCatWithDog("Caterpillar")); // Dogerpillar
  console.log(replaceCatWithDog("Cats are cool.")); // Dogs are cool.


// 4) Write a function that takes a string as input and returns the number of vowels in the string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("Pranay")); // expected output: 2
  console.log(countVowels("hello")); // expected output: 2
  console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); // expected output: 5
  console.log(countVowels("aeiou")); // expected output: 5
  console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // expected output: 0
  console.log(countVowels("The quick brown fox jumps over the lazy dog")); // expected output: 11
  console.log(countVowels("12345")); // expected output: 0


// 5) Write a function that takes a string as input and returns true if the string is a valid email address, false otherwise.
function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  console.log(isValidEmail("pgupta@duck.com")); // false
  console.log(isValidEmail("example@example.com")); // true
  console.log(isValidEmail("example.example@example.com")); // true
  console.log(isValidEmail("example-example@example.com")); // true
  console.log(isValidEmail("example@example.co.in")); // true
  console.log(isValidEmail("example123@example.com")); // true
  console.log(isValidEmail("example@.com")); // false
  console.log(isValidEmail("example@example.")); // false
  console.log(isValidEmail("example@examplecom")); // false
  console.log(isValidEmail("example@examplecom.")); // false
  console.log(isValidEmail("example@.com.")); // false


// 6) Write a function that uses arrow function syntax to add two numbers and return the result.
const add = (a, b) => {
    // arrow function syntax used to define the function
    // takes two parameters a and b and returns their sum
    return a + b;
  }
  
  // testing the function
  console.log(add(3, 4)); // expected output: 7
  console.log(add(5, -2)); // expected output: 3


// 7) Write a function that takes an array of numbers and uses the spread operator to find the maximum value.
const findMax = (numbers) => {
    // spread operator used to pass the array elements as arguments to Math.max()
    return Math.max(...numbers);
  }
  
  // testing the function
  console.log(findMax([5, 3, 9, 1, 7])); // expected output: 9
  console.log(findMax([0, -2, 10, 4])); // expected output: 10



// 8) Write a function that takes an array of strings and returns a new array with all the strings in uppercase.
const toUpperCase = (strings) => {
    // use Array.map() to create a new array with the uppercase versions of the strings
    return strings.map((string) => string.toUpperCase());
  };
  
  // testing the function
  console.log(toUpperCase(["Pranay", "Gupta"])); // expected output: ['PRANAY', 'GUPTA']
  console.log(toUpperCase(["hello", "world"])); // expected output: ['HELLO', 'WORLD']
  console.log(toUpperCase(["abc", "DEF", "gHi"])); // expected output: ['ABC', 'DEF', 'GHI']



// 9) Write a function that takes an object and uses destructuring to extract the values of its properties and
//  return them as an array.

const objectToArray = (obj) => {
    // use object destructuring to extract the values of the object properties
    const { prop1, prop2, prop3 } = obj;
  
    // return an array with the extracted values
    return [prop1, prop2, prop3];
  };
  
  // testing the function
  console.log(objectToArray({ prop1: 5, prop2: "hello", prop3: true })); // expected output: [5, 'hello', true]
  console.log(objectToArray({ prop1: "abc", prop2: 123, prop3: null })); // expected output: ['abc', 123, null]


// 10) Write a function that takes a string and uses template literals to create a new string
//  with the input string and a variable inserted into it.

const createString = (inputString, variable) => {
    // use template literals to create a new string with the input string and variable
    return `${inputString} ${variable}`;
  };
  
  // testing the function
  console.log(createString("My name is", "Pranay")); // expected output: 'My name is Pranay'
  console.log(createString("Hello", "world!")); // expected output: 'Hello world!'
  console.log(createString("The value is:", 123)); // expected output: 'The value is: 123'