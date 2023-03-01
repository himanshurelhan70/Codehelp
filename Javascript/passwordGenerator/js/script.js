const slider = document.querySelector("[data-lengthSlider");
const length = document.querySelector("[data-lengthNumber");

slider.addEventListener('input', ()=> {
    length.innerHTML = slider.value;
}); 


// genarate any random no. b/w min and max
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// generate any random no. b/w 0- 9
function generateNumber(){
    getRandomInteger(1, 10);
}

// generate any random lowercase b/w a - z
// The ASCII value of the lowercase alphabet is from 97 to 122. 
function generateLowercase(){
   return String.fromCharCode(getRandomInteger(97, 123));
}

// generate any random uppercase b/w A - Z
// ASCII value of the uppercase alphabet is from 65 to 90.
function generateUppercase(){
    return String.fromCharCode(getRandomInteger(65, 91));
}

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

function generateSymbols(){
    const randomIndex = getRandomInteger(0, symbols.length);
    return symbols.charAt(randomIndex);
}