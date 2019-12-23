function getWeather(woeid) {
    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`temperatures in ${data.title} stay between ${today.min_temp} and ${data.title} stay between ${today.max_temp}`);
        })
        .catch(error => {
            console.log(error);
        })
}
// getWeather(44418);
// getWeather(2487956);

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
        const data = await result.jason();
        console.log(data);
        const tomorrow = data.consolidated_weather[1];
        console.log(`temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${data.title} stay between ${tomorrow.max_temp}`);

    } catch (error) {
        console.log(error);
    }
}
getWeatherAW(44418);
let dataLondon;
getWeatherAW(2487956).then(data => {
    dataLondon = data
    console.log(dataLondon);
});