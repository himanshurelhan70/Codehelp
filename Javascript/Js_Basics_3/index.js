// console.log('Hello Jee');

// let lastName = 'Babbar' ;

// let firstName = new String('Love');

// let message = 
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Babbar`;

// console.log(message);

// let words = message.split(' ');

// console.log(words);

// let date = new Date();


// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(1998, 11, 20, 7);


// date3.setFullYear(1947);

// console.log(date3);

// let numbers = [1,4,5,7];

// console.log(numbers);

// //end -> push
// //beginning -> unshift

// //middle -> splice

// //Searching
// console.log(numbers);

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1) 
//     console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4, 2) );


// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

//console.log(courses);

//console.log( courses.includes( {no:1, naam:'Love'} ) );

// let course =  courses.find(course => course.naam === 'Kilvish');

// function(course) {
//     return course.naam === 'Love';
// }

// console.log(course);

// let numbers = [1,2,3,4,5,6,7];

// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2, 1);

// // console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// //numbers = [];
// //numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// //let sliced = marks.slice(2);
// // let sliced = marks.slice(2,6);
// console.log(sliced);



// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);

// //copy kaise create karu
// let another = [...combined];

// let arr = [10,20,30,40,50];

// // for(let value of arr) {
// //     console.log(value);
// // }

// arr.forEach(number=> console.log(number));



// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// let numbers = [5,10,4,40];

// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// let numbers = [1,2,-1,-4];

// let filtered =  numbers.filter(value => value >= 0);

// console.log(filtered);


// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'student_no' + value);

// console.log(items);

let numbers = [1,2,-6,-9];

let items = numbers
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);





