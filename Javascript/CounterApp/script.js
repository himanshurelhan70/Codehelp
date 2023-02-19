const decre_btn = document.getElementById("decre_btn");
const incre_btn = document.getElementById("incre_btn");
const value_box = document.getElementById("value_box");

let counter = 0;
value_box.innerText = 0;

decre_btn.addEventListener("click", ()=> {
    counter--;
    value_box.innerText = counter;
})

incre_btn.addEventListener("click", ()=> {
    counter++;
    value_box.innerText = counter;
})