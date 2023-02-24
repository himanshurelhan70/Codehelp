// //addung 100para
// const t1 = performance.now();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took " + (t2-t1) + " ms");

// //optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took " + (t4-t3) + " ms");


// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); // 1 Reflow, 1 Repaint


// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'Js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'Kya haal Chaal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// document.addEventListener('click', function() {
//     console.log('hello DiDi');
// });






