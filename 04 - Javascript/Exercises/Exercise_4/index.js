// ## Topics covered:

// - Promises and async/await
// - Error handling and debugging

// 1) Write a function that returns a promise which resolves after a specified number of milliseconds.
function delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
  
  // Test case 1
  console.log("start");
  delay(2000).then(() => {
    console.log("2 seconds elapsed");
  });
  console.log("end");
  
  // Output:
  // start
  // end
  // 2 seconds elapsed


//   2) Write a function that returns a promise which rejects with a specified error message 
// after a specified number of milliseconds.

/**
 * Returns a promise which rejects with a specified error message after a specified number of milliseconds.
 */
function rejectWithDelay(errorMessage, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, delay);
    });
  }
  
  // Example usage:
  rejectWithDelay("Oops! Something went wrong.", 2000).catch((error) => {
    console.error(error.message); // Output: Oops! Something went wrong.
  });


//   3) Write a function that returns a promise which resolves with an array of random numbers after a 
//   specified number of milliseconds.
function getRandomNumbersArray(length, delay) {
    return new Promise((resolve, reject) => {
      // Using setTimeout to simulate delay
      setTimeout(() => {
        // Creating an array of random numbers of specified length
        const numbersArray = Array.from({ length }, () => Math.floor(Math.random() * 100));
        // Resolving the promise with the generated array
        resolve(numbersArray);
      }, delay);
    });
  }
  
  // Testing the function with delay of 2 seconds and array length of 5
  getRandomNumbersArray(5, 2000)
    .then((result) => {
      console.log(result); // Output: [23, 74, 48, 52, 63]
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Testing the function with delay of 3 seconds and array length of 10
  getRandomNumbersArray(10, 3000)
    .then((result) => {
      console.log(result); // Output: [79, 5, 64, 46, 2, 55, 33, 71, 28, 38]
    })
    .catch((error) => {
      console.error(error);
    });


// 4) Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.
// Function that uses async/await to make an API call and returns a promise with the response
async function fetchData(url) {
    try {
      const response = await fetch(url); // Wait for the response from the server
      const data = await response.json(); // Wait for the JSON data from the response
      return data; // Return the data as a resolved promise
    } catch (error) {
      return Promise.reject(error); // Return the error as a rejected promise
    }
  }
  
  // Example usage of the function
  fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
      console.log(data); // Log the fetched data
    })
    .catch((error) => {
      console.error(error); // Log any errors
    });


// 5) Write a function that uses async/await to make multiple API calls in parallel and returns a promise with 
// an array of responses.

// This function makes multiple API calls in parallel using async/await
async function fetchMultipleData(urls) {
    try {
      // Use Promise.all to make multiple API calls and wait for all of them to resolve
      const responses = await Promise.all(urls.map(url => fetch(url)));
  
      // Extract the response data from each API call and return as an array
      const data = await Promise.all(responses.map(response => response.json()));
      return data;
    } catch (error) {
      // Return the error message if any of the API calls fail
      return error.message;
    }
  }
  
  // Example usage
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1"
  ];
  
  // Call the function with the URLs and log the array of responses
  fetchMultipleData(urls)
    .then(responses => console.log(responses))
    .catch(error => console.log(error));


// 6) Write a function that throws an error if the parameter is not a number, and handles the error 
// with a custom error message.
// Function that throws an error if the parameter is not a number
function validateNumber(num) {
    return new Promise((resolve, reject) => {
      if (typeof num !== "number") {
        reject(new Error("Invalid input. Expected a number."));
      } else {
        resolve(num);
      }
    });
  }
  
  // Testing the function
  validateNumber(5)
    .then(num => console.log(num)) // Output: 5
    .catch(err => console.error(err.message));
  
  validateNumber("not a number")
    .then(num => console.log(num))
    .catch(err => console.error(err.message)); // Output: "Invalid input. Expected a number."


// 7) Write a try-catch block that catches any errors a function throws and logs them to the console with a custom error message.
function myFunction(num) {
    if (typeof num !== "number") {
      throw new Error("Parameter must be a number");
    }
  
    return num * 2;
  }
  
  try {
    const result = myFunction("hello");
    console.log(result);
  } catch (error) {
    console.log("Error caught:", error.message);
  }


// 8) Write a function that uses console.assert to check whether a variable 
// is equal to a certain value, and throws an error if the assertion fails.
function assertEqual(actual, expected, message) {
    console.assert(actual === expected, message || `Expected ${expected}, but got ${actual}`);
  }


// 9) Write a function that logs an error message to the console if a certain condition is not met.
function logErrorIf(condition, message) {
    if (!condition) {
      console.error(message);
    }
  }

// 10) Write a function that catches and handles any errors thrown by a Promise, and logs a custom error message to the console.
function handlePromiseError(promise, errorMessage) {
    promise.catch(error => {
      console.error(errorMessage, error);
    });
  }
