// display
const passwordDisplay = document.querySelector("[data-password-display]");

// copy password
const copyBtn = document.querySelector("[data-copy-btn]");
const copyMsg = document.querySelector("[data-copy-msg]");

// length
const lengthDisplay = document.querySelector("[data-length-display]");
const lengthSlider = document.querySelector("[data-length-slider]");

// checkboxes
const uppercaseCb = document.querySelector("#uppercaseCb");
const lowercaseCb = document.querySelector("#lowercaseCb");
const numberCb = document.querySelector("#numberCb");
const symbolCb = document.querySelector("#symbolCb");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");

// indicator
const indicator = document.querySelector("[data-indicator]");

// generate button
const generateButton = document.querySelector("#generateButton");

// symbol
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;

// uppercase is checked by default. so checkCount = 1
uppercaseCb.checked = true;
let checkCount = 1;


// set password length  input slider background
function handleSlider() {
    lengthSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const min = lengthSlider.min;
    const max = lengthSlider.max;
    lengthSlider.style.backgroundSize =
      ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

handleSlider();


// handle input event on length slider
lengthSlider.addEventListener('input', (e)=> {
    passwordLength = e.target.value;
    handleSlider();
}); 


// handle check-count and password-length
allCheckbox.forEach( (checkbox) => {
    checkbox.addEventListener('change', countCheckedCb);
});

function countCheckedCb(){
    checkCount = 0;

    allCheckbox.forEach((checkbox) => {
        if(checkbox.checked) checkCount++;
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}
  

// copy password
async function copyContent() {
    try {
        // throw error if password is empty
        if(password === ""){
            alert('First Generate Password to copy');
            throw 'Failed'; 
        }

        await navigator.clipboard.writeText(password);
        copyMsg.innerText = "Copied";
    } 

    // catch() will only run if any error is thrown by the try block
    catch (error) {
      copyMsg.innerText = error;
    }

    copyMsg.classList.add("active");
    setTimeout(() => {
      copyMsg.classList.remove("active");
    }, 2000);
}
  
copyBtn.addEventListener("click", () => {
    // if (password) copyContent();
    copyContent();
});



// genarate any random no. b/w min and max(exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// generate any random no. b/w 0- 9
function generateNumber(){
    return getRandomInteger(1, 10);
}

// The ASCII value of the lowercase alphabet is from 97 to 122. 
// generate any random lowercase b/w a - z
function generateLowercase(){
   return String.fromCharCode(getRandomInteger(97, 123));
}

// ASCII value of the uppercase alphabet is from 65 to 90.
// generate any random uppercase b/w A - Z
function generateUppercase(){
    return String.fromCharCode(getRandomInteger(65, 91));
}

// generate any random symbol from index 0 - 39
function generateSymbol(){
    const randomIndex = getRandomInteger(0, symbols.length);
    return symbols.charAt(randomIndex);
}

// calculate password strength
// set Indicator
function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

setIndicator("#ccc");

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(uppercaseCb.checked) hasUpper = true;
    if(lowercaseCb.checked) hasLower = true;
    if(numberCb.checked) hasNumber = true;
    if(symbolCb.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasUpper || hasLower) && (hasNumber || hasSymbol) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

// Shuffle the array randomly - Fisher Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // find out random j
      const j = Math.floor(Math.random() * (i + 1));
      // swap 2 numbers
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let str = "";
    // array.forEach((el) => (str += el));
    str = array.join("");
    return str;
}

// Handle generate password
function generatePassword(){
    // none of the checkboxes are selected
    if(checkCount <= 0){
        alert('Atleast check one checkbox');
        return;
    }

    // password-length should be >= selected no. of checkbox
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // remove the previous password
    if (password.length) password = "";

    let checkedCbArray = [];

    // add selected checkbox functions to an array
    if(uppercaseCb.checked) checkedCbArray.push(generateUppercase);
    if(lowercaseCb.checked) checkedCbArray.push(generateLowercase);
    if(numberCb.checked) checkedCbArray.push(generateNumber);
    if(symbolCb.checked) checkedCbArray.push(generateSymbol);

    // add the required characters - compulsory addition
    for(let i=0; i < checkedCbArray.length; i++){
        password += checkedCbArray[i]();
    }

    // adding random characters till the password length - remaining addition
    for(let i=0; i < (passwordLength - checkedCbArray.length); i++){
        let randomIndex = getRandomInteger(0, checkedCbArray.length);
        password += checkedCbArray[randomIndex]();
    }

    // shuffle the newly created pass.
    password = shuffleArray(Array.from(password));
    passwordDisplay.value = password;
    console.log('password :', password);


    // calculate strength
    calcStrength();
}

generateButton.addEventListener('click', generatePassword);