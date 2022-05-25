const WEATHER_API_KEY = 'ce39e8980cb244ffa42150821221405';

function getZip() {
    const zipCode = document.getElementById("locationData").value;
    console.log(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${zipCode}&days=10`)
  }