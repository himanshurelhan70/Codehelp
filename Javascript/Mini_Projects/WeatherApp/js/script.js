if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

async function onSuccess(position){
    let lati = position.coords.latitude;
    let longi = position.coords.longitude;

    const result = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?lat={lati}&lon={longi}&appid={3f3f574968cb2733cc82999956d2de80}`)
    console.log(lati, longi);
}

function onError(){
    console.log("error ");
}