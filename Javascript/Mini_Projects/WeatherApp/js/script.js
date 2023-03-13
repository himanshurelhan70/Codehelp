// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
// }

// async function onSuccess(position){
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     let key = "3f3f574968cb2733cc82999956d2de80"; 

//     const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key}`);
//     document.body.innerText = `${result?.main?.temp}`;
// }

// function onError(){
//     console.log("error ");
// }



// API Key
const apiKey = "59c360e8f85738dbc015319553ff8e4d";

// buttons for switching tabs
const userTab = document.querySelector("[data-user-weather]");
const searchTab = document.querySelector("[data-search-weather]");

// weather Container
const weatherContainer = document.querySelector(".weather-container");

// 4 UI components
const grantAccess = document.querySelector(".grant-location-container");
const searchForm = document.querySelector(".search-form-container");
const loadingScreen = document.querySelector(".loading-screen-container");
const weatherInfoContainer = document.querySelector(".weather-info-container");


// initials variables
let currentTab = userTab;
currentTab.classList.add("active-tab");

function switchTab(clickedTab){
    if(currentTab != clickedTab){
        currentTab.classList.remove("active-tab");
        currentTab = clickedTab;
        currentTab.classList.add("active-tab");
    }

    // after switching tabs, check the currentTab equals to?
    if(currentTab == searchTab){
        searchForm.classList.add("active");
        grantAccess.classList.remove("active");
        weatherInfoContainer.classList.remove("active");
    }
    else{
        searchForm.classList.remove("active");
        weatherInfoContainer.classList.remove("active");

        getFromSessionStorage();
    }
}




function getFromSessionStorage(){
    const userCoords = localStorage.getItem("userCoords");
    
    if(!userCoords){
        grantAccess.classList.add("active");
    }

    else{ 
        const coords = JSON.parse(userCoords);
        fetchUserWeatherInfo(coords);
    }
}

async function fetchUserWeatherInfo(coords){
    const {lat, lon} = coords; //destructing

    grantAccess.classList.remove("active");
    loadingScreen.classList.add("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        weatherInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }

    catch(error){
        // 
    }
}


function renderWeatherInfo(data){
    const cityName = document.querySelector("[data-city-name]");
    const countryIcon = document.querySelector("[data-country-icon]");
    const weatherDesc = document.querySelector("[data-weather-desc]");
    const weatherIcon = document.querySelector("[data-weather-icon]");
    const weatherTemp = document.querySelector("[data-weather-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");


    cityName.innerText = data?.name;
    // countryIcon.src = "";
    weatherDesc.innerText = data?.weather?.[0]?.main;
    // weatherIcon.src = "cdn"
    weatherTemp.innerText = data?.main?.temp;
    windspeed.innerText = data?.wind?.speed;
    humidity.innerText = data?.main?.humidity;
    cloudiness.innerText = data?.clouds?.all;
}



userTab.addEventListener('click', () => {
    // pass clicked tab as argument
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    // pass clicked tab as argument
    switchTab(searchTab);
});

const grantAccessBtn = document.querySelector("[data-grant-access]");
grantAccessBtn.addEventListener('click', getLocation);

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("geolocation not supported");
    }
}

function showPosition(position){
    const userCoords = {
        lat :  position.coords.latitude,
        lon : position.coords.longitude
    }

    localStorage.setItem("userCoords", JSON.stringify(userCoords));
    fetchUserWeatherInfo(userCoords);
}

// serach form
const searchInput = document.querySelector("[data-search-Input]");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = searchInput.value;

    if(city === "") return;
    fetchSearchWeatherInfo(city);
});

async function fetchSearchWeatherInfo(city){
    try{
        loadingScreen.classList.add("active");
        grantAccess.classList.remove("active");
        weatherContainer.classList.remove("active");

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        
        const data = response.json();
        loadingScreen.classList.remove("active");
        weatherContainer.classList.add("active");
        renderWeatherInfo(data);

    }
    catch(error){

    }
}