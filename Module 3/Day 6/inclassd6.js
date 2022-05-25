// Warmup
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter((number) => number % 2===0)
console.log(evenNumbers)

//Grosser way to do it
const nonFilterEvenNumbers = [];
for (var i= 0; i <numbers.length; i++) {
    if (numbers [i] % 2 === 0 ) {
        nonFilterEvenNumbers.push(numbers[i])
    }
}
console.log(nonFilterEvenNumbers)
//Async Await
const WEATHER_API_KEY = 'ce39e8980cb244ffa42150821221405';
const forecastPath = 
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=73112&days=10`;
const getWeatherDataButton = document.getElementById("getWeatherData");


getWeatherDataButton.addEventListener("click", getWeatherData)

function addDatatoPreTag(data) {
    const resultsPreTag = document.getElementById('dataResults');
    resultsPreTag.innerHTML = (JSON.stringify(data.location.name, null, 4)).toString().replaceAll("\"", "");
}
async function getWeatherData () {
    try {
        const res = await fetch(forecastPath);
        const data = await res.json ()
        addDatatoPreTag(data)
    } catch (error) {
        console.log(error)
    }
}