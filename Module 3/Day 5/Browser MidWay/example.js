const forecastPath = 
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${zipCodeInput}&days=10`;
const getWeatherDataButton = document.getElementById("getWeatherData");


getWeatherDataButton.addEventListener("click", () =>fetch(forecastPath)
    .then((response) => response.json())
    .then((data) => addDatatoPreTag(data))
    .catch ((error) =>
console.log('Error in fetch.json',error.message)))

function addDatatoPreTag(data) {
    const resultsPreTag = document.getElementById('dataResults');
    resultsPreTag.innerHTML = (JSON.stringify(data, null, 4)).toString().replaceAll("\"", "");
}
//Changing background
function backgroundChange(weather) {
    if (weatherinfo == Rain) {
    document.body.style.backgroundImage = "url(rain3.gif)";
    } else if (weatherinfo == Clouds) {
    document.body.style.backgroundImage = "url(cloud.gif)";
    } else if (weatherinfo == Clear) {
    document.body.style.backgroundImage = "url(sky3.gif)";
    } else {
    document.body.style.backgroundImage= "url(background.gif)";
    }
  }