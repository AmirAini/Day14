
//Part1
//target variables first API
let cityName = document.querySelector('#city-name');
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






//!Task 1

//!get location
// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
      
//     } else {
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     console.log(position);
//     callAPI(position);
// }

//!call function
// getLocation();
// // showPosition(position);
// console.log('get');

//!call API, 
let cityLatLong = {
  'Kuala Lumpur':[3.0623, 101.7113],
  'Hong Kong':[22.2855,114.1577],
  'London':[51.5085,-0.1257], 
  'Johor Bahru':[1.4655,103.7578],
  'Beijing':[39.9075,116.3972],
  'New York City':[40.7143,-74.006]
}

//!Update for Task3
function callAPI(pos){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {   
    console.log('data here');
    console.log(data);
    
    //!task1 (no longer use)
    // cityName.innerHTML = data.timezone;
    // humidityEle.innerHTML = data.current.humidity + '%';
    // pressureEle.innerHTML = data.current.pressure + ' atm';

    // let deg = data.current.temp - 273;
    // tempEle.innerHTML = Math.round(deg) + " DegC";

    // windSpeedEle.innerHTML = data.current.wind_speed + ' m/s';

    // console.log(data.current.weather[0].icon);
    // let icon = data.current.weather[0].icon;
    // locationIcon.src=`openweathermap-api-icons-master/icons/${icon}.png`;    


    //Day1 var 
    let temp1 = document.getElementById('temp1');
    let wind1 = document.getElementById('wind1');
    let weatherPic1 = document.getElementById('weatherPic1');
    let pressure1 = document.getElementById('pressure1');
    let humidity1 = document.getElementById('humidity1');

    //Day1 show
    let deg1 = data.daily[1].temp.day - 273;
    temp1.innerHTML = `Temp:${Math.round(deg1)} degC`;
    
    wind1.innerHTML= `Windspeed: ${data.daily[1].wind_speed} ms`;
    
    let icon1 = data.daily[1].weather[0].icon;
    weatherPic1.src=`openweathermap-api-icons-master/icons/${icon1}.png`; 

    pressure1.innerHTML = `Pressure: ${data.daily[1].pressure} atm`;

    humidity1.textContent = `Humidity: ${data.daily[1].humidity} %`;

    //Day2 var 
    let temp2 = document.getElementById('temp2');
    let wind2 = document.getElementById('wind2');
    let weatherPic2 = document.getElementById('weatherPic2');
    let pressure2 = document.getElementById('pressure2');
    let humidity2 = document.getElementById('humidity2');

    //Day2 show
    let deg2 = data.daily[2].temp.day - 273;
    temp2.innerHTML = `Temp:${Math.round(deg2)} degC`;
    wind2.innerHTML= `Windspeed: ${data.daily[2].wind_speed} ms`;
    let icon2 = data.daily[2].weather[0].icon;
    weatherPic2.src=`openweathermap-api-icons-master/icons/${icon2}.png`; 
    pressure2.innerHTML = `Pressure: ${data.daily[1].pressure} atm`;
    humidity2.textContent = `Humidity: ${data.daily[1].humidity} %`;

    //Day3 var 
    let temp3 = document.getElementById('temp3');
    let wind3 = document.getElementById('wind3');
    let weatherPic3 = document.getElementById('weatherPic3');
    let pressure3 = document.getElementById('pressure3');
    let humidity3 = document.getElementById('humidity3');
    //Day3 show
    let deg3 = data.daily[3].temp.day - 273;
    temp3.innerHTML = `Temp:${Math.round(deg3)} degC`;
    wind3.innerHTML= `Windspeed: ${data.daily[3].wind_speed} ms`;
    let icon3 = data.daily[3].weather[0].icon;
    weatherPic3.src=`openweathermap-api-icons-master/icons/${icon3}.png`; 
    pressure3.innerHTML = `Pressure: ${data.daily[3].pressure} atm`;
    humidity3.textContent = `Humidity: ${data.daily[3].humidity} %`;

    //Day4 var 
    let temp4 = document.getElementById('temp4');
    let wind4 = document.getElementById('wind4');
    let weatherPic4 = document.getElementById('weatherPic4');
    let pressure4 = document.getElementById('pressure4');
    let humidity4 = document.getElementById('humidity4');
    //Day4 show
    let deg4 = data.daily[4].temp.day - 273;
    temp4.innerHTML = `Temp:${Math.round(deg4)} degC`;
    wind4.innerHTML= `Windspeed: ${data.daily[4].wind_speed} ms`;
    let icon4 = data.daily[4].weather[0].icon;
    weatherPic4.src=`openweathermap-api-icons-master/icons/${icon4}.png`; 
    pressure4.innerHTML = `Pressure: ${data.daily[4].pressure} atm`;
    humidity4.textContent = `Humidity: ${data.daily[4].humidity} %`;

    //Day5 var 
    let temp5 = document.getElementById('temp5');
    let wind5 = document.getElementById('wind5');
    let weatherPic5 = document.getElementById('weatherPic5');
    let pressure5 = document.getElementById('pressure5');
    let humidity5 = document.getElementById('humidity5');
    //Day5 show
    let deg5 = data.daily[5].temp.day - 273;
    temp5.innerHTML = `Temp:${Math.round(deg5)} degC`;
    wind5.innerHTML= `Windspeed: ${data.daily[5].wind_speed} ms`;
    let icon5 = data.daily[5].weather[0].icon;
    weatherPic5.src=`openweathermap-api-icons-master/icons/${icon5}.png`; 
    pressure5.innerHTML = `Pressure: ${data.daily[5].pressure} atm`;
    humidity5.textContent = `Humidity: ${data.daily[5].humidity} %`;









})
}



//!Task2: Change Cities
function changeCity(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {

     //call function
     
    
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

    //when click call info 
    for (let locate in cityLatLong) {

      if (locate == data.name){
          console.log(data.name);
          console.log(cityLatLong[data.name]);
          callAPI(cityLatLong[data.name]);

        }
      }

      //store the time
      let timeStore = moment().utc(data.dt).format('MMMM Do YYYY, h:mm:ss a');
      console.log(`this is time ${timeStore}`);
      
   
    
  })
}

//!Time



changeCity("Kuala Lumpur");



var day = document.getElementById("day");
var date = document.getElementById("date");
var time = document.getElementById("time");

function getDateTime(){
    day.innerHTML = moment().format('dddd');
    date.innerHTML = moment().format("MMM Do YYYY");
    time.innerHTML = moment().format('h:mm a');

    
}

setInterval(updateTime, 6000);

function updateTime(){
    time.innerHTML = moment().format('h:mm a');
}


