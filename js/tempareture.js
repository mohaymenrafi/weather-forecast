const button = document.querySelector('button');
const input = document.querySelector('input');
function getAPIData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=d7ed9319d84e3e9ea246209e9459ffe0`
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
    input.value= '';
}

function showData(data){
    const parentDiv = document.querySelector('#info-parent');
    parentDiv.innerHTML= '';
    const div = document.createElement('div')
    div.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].main}">
    <h2>${data.name}</h2>
    <h4>Max Tempareture: ${data.main.temp_max}°C</h4>
    <h4>Min Tempareture: ${data.main.temp_min}°C</h4>
    <h4>Feels Like: ${data.main.feels_like}°C</h4>
    <h4>Wind: ${data.wind.speed}km/h</h4>
    <h4>Weather: ${data.weather[0].main}</h4>
    <h4>Humidity: ${data.main.humidity}%</h4>
    `
    parentDiv.appendChild(div);
    // if(data.name === input.value){
    // } 
    // else{
    //     showError();
    // }
}

// function showError() {
//     document.querySelector('#info-parent').innerHTML =`
//         <h2>City Name Did not Match. Please enter a valid city name </h2>
//     `
// }

function handleEnter(e){
    if(e.key === 'Enter') getAPIData();
} 
button.addEventListener('click', getAPIData);
window.addEventListener('keyup', handleEnter)