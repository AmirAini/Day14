console.log('okok');

var apiKey = 'ad77f935d5fc7f9e923946ccd13ff20e'; 
var timezoneEle = document.getElementById('timezone');
var humidityEle = document.getElementById('humidity');
var windspeedEle = document.getElementById('windspeed');
var pressureEle = document.getElementById('pressure');



if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPostion);
} else {
    alert('Your browser not support Geolocation');
}

function showPostion (position){
    // console.log(`my location is ${position}`);
    console.log(`my location`, position);
    callWeatherApi(position);    
}

function callWeatherApi(pos){

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}`)

    .then(res => res.json())
    .then(data => {
    console.log(data)
    var timezone = data.timezone;
    var humidity = data.humidity;
    var windspeed = data.windspeed;
    var pressure = data.pressure

    timezoneEle.innerHTML = data.timezone;
    humidityEle.innerHTML = data.current.humidity;
    windspeedEle.innerHTML = data.current.wind_speed;
    pressureEle.innerHTML = data.current.pressure;
    
    // var icon =`http://openweathermap.org/img/w`
    console.log(`timezone: ${timezone}, humidity ${humidity}`);
    
});
}



function currentApi(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log('current city', data);  

        // var timezone = data.name;
        // var humidity = data.main.humidity;
        // var windspeed = data.wind.speed;
        // var pressure = data.pressure

        var dateTime = moment().utc(data.dt).format('MMMM Do YYYY, h:mm:ss a');
        console.log(dateTime);
        

        // timezoneEle.innerHTML = data.timezone;
        // humidityEle.innerHTML = data.current.humidity;
        // windspeedEle.innerHTML = data.wind.speed;
        // pressureEle.innerHTML = data.current.pressure;

    })
}

currentApi('Kuala Lumpur');




