
//Part1

//target variables first API
let cityName = document.querySelectorAll('#city-name');
let locationIcon = document.querySelector('.weather-icon');
let tempEle = document.querySelector('#temperature');
let windSpeedEle = document.querySelector('#wind-speed');
let pressureEle = document.querySelector('#pressure');
let humidityEle = document.querySelector('#humidity');
let apiKey = 'ad77f935d5fc7f9e923946ccd13ff20e'; 
// const {icon} = data.weather[0];


//Part3: different days
let locationIcon1 = document.querySelector('.weather-icon1');
let tempEle1 = document.querySelector('#temperature1');
let windSpeedEle1 = document.querySelector('#wind-speed1');
let pressureEle1 = document.querySelector('#pressure1');
let humidityEle1 = document.querySelector('#humidity1');














//functions
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log(position);
    callAPI(position);
}

//!call function
getLocation();
// showPosition(position);
console.log('get');

//!call API
function callAPI(position){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {   
    console.log(data);
    cityName.innerHTML = data.timezone;
    humidityEle.innerHTML = data.current.humidity + '%';
    pressureEle.innerHTML = data.current.pressure + ' atm';

    let deg = data.current.temp - 273;
    tempEle.innerHTML = Math.round(deg) + " DegC";

    windSpeedEle.innerHTML = data.current.wind_speed + ' m/s';

    console.log(data.current.weather[0].icon);
    let icon = data.current.weather[0].icon;
    locationIcon.src=`openweathermap-api-icons-master/icons/${icon}.png`;    
})
}

//Part2: Change Cities
function changeCity(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log('current city', data);

    console.log(data.name);

    cityName.innerHTML =data.name;
    humidityEle.innerHTML = data.main.humidity + '%';
    pressureEle.innerHTML = data.main.pressure + 'atm';
    let deg = data.main.temp - 273;
    tempEle.innerHTML = Math.round(deg) + " DegC";
    
    let icon = data.weather[0].icon;
    windSpeedEle.innerHTML = data.wind.speed + ' m/s';
    locationIcon.src=`openweathermap-api-icons-master/icons/${icon}.png`; 

    console.log(data.wind.speed);
  })
}



//Part3: Weekly Forecast for each city

