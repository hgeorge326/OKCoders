const WEATHER_API_KEY = 'ce39e8980cb244ffa42150821221405'
const getWeatherDataButton = document.getElementById("getWeatherData");

getWeatherDataButton.addEventListener("click", getWeatherData)

function addDataToPreTag(data) {
    const resultsPreTag = document.getElementById('dataResults');
    resultsPreTag.innerHTML = (`<div class="row align-items-center"></div>Today in ${JSON.stringify(data.location.name, null, 4).toString().replaceAll("\"", "")}, ${JSON.stringify(data.location.region, null, 4).toString().replaceAll("\"", "")}... Pussy is wet
    </div>
    <div class="row align-items-center"><img src="./Images/Wet Cat.png"></div>`)

  }

async function getWeatherData () {
  const userZipCode = document.getElementById("locationData").value;
  const forecastPath = 
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${userZipCode}&days=10`;
  try {
      const res = await fetch(forecastPath);
      const data = await res.json ()
      addDataToPreTag(data)
      console.log(data)
  } catch (error) {
      console.log(error)
  }
}
