
const decre_btn = document.querySelector("#decre_btn");
const incre_btn = document.querySelector("#incre_btn");
const counter_box = document.querySelector("#counter_box");
let counter_value = 0;


if(localStorage.getItem("counter_value") != null){
    counter_value = parseInt(localStorage.getItem("counter_value"));
    counter_box.innerText = counter_value;
}

else{
    localStorage.setItem("counter_value", counter_value);
    counter_box.innerText = counter_value;
}


decre_btn.addEventListener("click", ()=> {
    counter_value--;
    localStorage.setItem("counter_value", counter_value);
    counter_box.innerText = counter_value;
})

incre_btn.addEventListener("click", ()=> {
    counter_value++;
    localStorage.setItem("counter_value", counter_value)
    counter_box.innerText = counter_value;
})