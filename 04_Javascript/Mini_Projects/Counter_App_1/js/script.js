// buttons
const decre_btn = document.querySelector("#decre_btn");
const incre_btn = document.querySelector("#incre_btn");

const decre_ten_btn = document.querySelector("#decre_ten_btn");
const reset_btn = document.querySelector("#reset_btn");
const incre_ten_btn = document.querySelector("#incre_ten_btn");

// sounds
const coin_sound = document.querySelector('#coin_sound');
const fireball_sound = document.querySelector('#fireball_sound');

const pipe_sound = document.querySelector('#pipe_sound');
const stomp_sound = document.querySelector('#stomp_sound');
const pause_sound = document.querySelector('#pause_sound');

// output box
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


incre_btn.addEventListener("click", ()=> {
    counter_value++;
    localStorage.setItem("counter_value", counter_value);
    counter_box.innerText = counter_value;

    coin_sound.currentTime = 0;
    coin_sound.play();
    console.log('Incremented by 1');
});


decre_btn.addEventListener("click", ()=> {
    counter_value--;
    localStorage.setItem("counter_value", counter_value);
    counter_box.innerText = counter_value;

    fireball_sound.currentTime = 0;
    fireball_sound.play();
    console.log('decremented by 1');
});

decre_ten_btn.addEventListener('click', ()=> {
    counter_value -= 10;
    localStorage.setItem("counter_value", counter_value);
    counter_box.innerText = counter_value;

    pipe_sound.currentTime = 0;
    pipe_sound.play();
    console.log('Decremented by 10');
});

incre_ten_btn.addEventListener('click', ()=> {
    counter_value += 10;
    localStorage.setItem("counter_value", counter_value);
    counter_box.innerText = counter_value;

    pause_sound.currentTime = 0;
    pause_sound.play();
    console.log('Increment by 10');
});

reset_btn.addEventListener('click', ()=> {
    counter_value = 0;
    localStorage.setItem("counter_value", counter_value);
    counter_box.innerText = counter_value;

    stomp_sound.currentTime = 0;
    stomp_sound.play();
    console.log('Reset Counter Value to zero');
});

