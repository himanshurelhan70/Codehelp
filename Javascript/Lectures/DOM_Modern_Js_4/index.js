// ////////////////////////////// my code ///////////////////////////////

// promises

// const myPromise = new Promise(function(myResolve, myReject){
//     for(let i=1; i<=100; i++){
//         const p = document.createElement("p");
//         p.innerHTML = "hello <b>Himanshu</b>";
//         document.body.appendChild(p);

//         // myResolve("printed");
//         myReject("error 404");
//     }
// });

// myPromise.then(
//     function(value){
//         console.log(".then() - Consuming code after promise fulfillment" );
//         console.log(value);
//     },
//     function(error){
//         console.log(".then() - oops recieved an error" + error);
//     }
// );

// myPromise.catch(function(error){
//     console.log(".catch() - Received an error" + error);
// });


// promises chaining

// const promise1 = new Promise(function(myResolve, myReject){
//     console.log("promise 1 producing code");
//     setTimeout(() => {
//         myResolve("promise1 resolved");
//     }, 2000);
// }); 

// promise1.then(function(value){
//     alert(value);
//     return new Promise(function(myResolve, myReject){
//         console.log("promise 2 producing code");
//         setTimeout(() => {
//             myResolve("promise2 resolved");
//         }, 2000);
//     });
// }
// ).then(function(value){ alert(value);});



// async/await

// async function fun(){
//     return "yessss";
// }

// console.log(fun());


// fetch API get call
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

// another way
// async function f(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// f();

// post call
// async function f(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'himanshu',
//           body: 'asthetic',
//           userId: 9467272127,
//           weight: 70,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let answer = await f();
//     console.log(answer);
// }

// utility();


// //// closures 
// example 1
// function outer(){
//     let x = 10;
//     return function inner(){
//         console.log(x);
//     }
// }

// let myFunc = outer();
// myFunc();

// example 2

function outer(x){
    function inner(y){
        console.log(x+y+z);
    }
    let z = 100;

    return inner;
}

let myFunc = outer(5);
myFunc(10);



// ///////////////////////////////////////////////// love babbar's code /////////////////////////////////


// setTimeout(function() {
//     console.log('third');
// },3000)

// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');


// let meraPromise1 = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('I am insde Promise1');
//         }, 5000);
//         //resolve(1234567890);
//         reject(new Error('Bhaisahab Error aaaye hai'))
// });

// meraPromise1.then((value) => { console.log(value)}, (error) => { console.log("Recieved an Error")});


// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am insde Promise2');
//     }, 3000);
//     //resolve(2233);
//     //reject(new Error('Bhaisahab Error aaaye hai'))
// });


// console.log('Pehla');

let temp =  {
    val:123
};

// let waadaa1 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(()=> {
//             console.log('setimeout2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// })

// output.then((value) => console.log(value));


// async function abcd() {
//     return "kya hua tera";
// }

// async function utility() {


//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hai");
//         },5000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Hyderabad is Cool");
//         },6000);
//     });

//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM, hM];
// // }
// let obj = {
//     heading:"head"
// };
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     //let output = await content.json();
//     console.log(content);
// }
// utility();

// async function helper() {

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }


// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

function init() {
    let name = "Mozilla"; 
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();
  


